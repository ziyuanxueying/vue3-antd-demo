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
  RoleFragment,
} from '../../generator/auth-center';
import {
  RoleFragmentDoc,
  useFindRoleListQuery,
} from '../../generator/auth-center.operation';
import { toInteger } from 'lodash';
import { Table } from 'antd';
import { useImmer } from 'use-immer';

export const whereModel: {
  [p in keyof RoleFragment]: WhereType;
} = {
  roleCode: '_like',
  roleName: '_like',
};

interface IroleProtableProps {
  selectedRows: AppUserRoleAppUserIdFragment[] | undefined;
  emitProTableSel: (value: AppUserRoleAppUserIdFragment[]) => void;
}

const RoleProtable: FC<IroleProtableProps> = (props) => {
  const columns = generatorColumns<RoleFragment>(
    RoleFragmentDoc
  ) as ProColumns<RoleFragment>[];

  const [proTableSel, setProTableSel] = useImmer<RoleFragment[]>([]);

  const { refetch } = useFindRoleListQuery({ skip: true });

  return (
    <ProTable<RoleFragment>
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
            data: result.data.roleAll as Array<RoleFragment>,
            total: toInteger(result.data?.roleCount),
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
              roleType: 'role',
              typeId: p.id,
              typeIdModel: {
                __typename: 'Role',
                name: p.roleName,
                code: p.roleCode,
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

export default RoleProtable;
