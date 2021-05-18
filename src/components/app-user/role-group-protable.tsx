import { FC } from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import {
  filtersToWhere,
  generatorColumns,
  proSortToOrder,
  WhereType,
} from '../../utils/antd-helper';
import {
  AppUserRoleAppUserIdFragment,
  RoleGroupFragment,
} from '../../generator/auth-center';
import {
  RoleGroupFragmentDoc,
  useFindRoleGroupListQuery,
} from '../../generator/auth-center.operation';
import { toInteger } from 'lodash';
import { Table } from 'antd';
import { useImmer } from 'use-immer';

const whereModel: {
  [p in keyof RoleGroupFragment]: WhereType;
} = {
  groupCode: '_like',
  groupName: '_like',
};

interface IroleGroupProtableProps {
  selectedRows: AppUserRoleAppUserIdFragment[] | undefined;
  emitProTableSel: (value: AppUserRoleAppUserIdFragment[]) => void;
}

const RoleGroupProtable: FC<IroleGroupProtableProps> = (props) => {
  const columns = generatorColumns<RoleGroupFragment>(
    RoleGroupFragmentDoc
  ) as ProColumns<RoleGroupFragment>[];

  const [proTableSel, setProTableSel] = useImmer<RoleGroupFragment[]>([]);

  const { refetch } = useFindRoleGroupListQuery({ skip: true });

  return (
    <ProTable<RoleGroupFragment>
      columns={columns}
      request={async (params, sorter, filter) => {
        const where =
          props.selectedRows && props.selectedRows.length > 0
            ? {
                ...filtersToWhere([params, filter], whereModel),
                id: {
                  _notIn: props.selectedRows.map((p) => p.typeId),
                },
              }
            : filtersToWhere([params, filter], whereModel);
        return refetch({
          param: {
            limit: params.pageSize,
            offset:
              (toInteger(params.current) - 1) * toInteger(params.pageSize),
            order: proSortToOrder(sorter),
            where,
          },
        }).then((result) => {
          return {
            data: result.data.roleGroupAll as Array<RoleGroupFragment>,
            total: toInteger(result.data?.roleGroupCount),
            success: true,
          };
        });
      }}
      rowKey="id"
      rowSelection={{
        selectedRowKeys: proTableSel.map((p) => p.id) as [],
        onChange: (selectedRowKeys, selectedRows) => {
          setProTableSel((draft) => selectedRows);
          props.emitProTableSel(
            selectedRows.map((p) => ({
              roleType: 'roleGroup',
              typeId: p.id,
              typeIdModel: {
                __typename: 'RoleGroup',
                name: p.groupName,
                code: p.groupCode,
              },
            }))
          );
        },
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }}
      pagination={{
        hideOnSinglePage: true,
        size: 'small',
      }}
      toolBarRender={false}
      search={false}
    />
  );
};

export default RoleGroupProtable;
