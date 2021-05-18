import { FC, ReactNode, useRef } from 'react';
import { Popconfirm, Button, message } from 'antd';
import { useImmer } from 'use-immer';
import { useTranslation } from 'react-i18next';
import {
  generatorColumns,
  getColumnSearch,
  WhereType,
  filtersToWhere,
  proSortToOrder,
} from 'utils/antd-helper';
import {
  RoleGroupManageFragment,
  Maybe,
  RoleGroupItemRoleGroupIdFragment,
} from 'generator/auth-center';
import { toString, toInteger } from 'lodash';
import {
  FindRoleGroupManageListDocument,
  useFindRoleGroupManageListQuery,
  useRoleGroupDestroyByIdMutation,
} from 'generator/auth-center.operation';
import Format from 'string-format';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { UseFetchDataAction } from '@ant-design/pro-table/lib/typing';
import { format } from 'date-fns';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import RoleExpand from 'components/role-group/role-expand';

// #region type
type SetColumnType = { key: keyof RoleGroupManageFragment; [p: string]: any };
type FilterType = {
  [p in keyof RoleGroupManageFragment]: WhereType;
};
// #endregion
const whereModel: FilterType = {
  groupCode: '_like',
  groupName: '_like',
  createdAt: '_between',
};

const List: FC = () => {
  const { t } = useTranslation();

  const history = useHistory();

  const refProTable = useRef<ActionType>();

  const columnsDefault = generatorColumns<RoleGroupManageFragment>(
    FindRoleGroupManageListDocument,
    [
      {
        key: 'id',
        ...getColumnSearch<RoleGroupManageFragment>(),
        render: (
          text: ReactNode,
          record: RoleGroupManageFragment,
          index: number,
          action: UseFetchDataAction<RoleGroupManageFragment>
        ) => <Link to={`/role-group/${text}`}>{text}</Link>,
      },
      {
        key: 'groupCode',
        ...getColumnSearch<RoleGroupManageFragment>(),
      },
      {
        key: 'groupName',
        ...getColumnSearch<RoleGroupManageFragment>(),
      },
      {
        key: 'createdAt',
        valueType: 'dateTimeRange',
        render: (text: ReactNode, record: RoleGroupManageFragment) =>
          format(new Date(record.createdAt), 'yyyy-MM-dd HH:mm:ss'),
      },
      {
        key: 'operation',
        sorter: false,
        onFilter: true,
        valueType: 'option',
        render: (
          text: ReactNode,
          record: RoleGroupManageFragment,
          index: number,
          action: UseFetchDataAction<RoleGroupManageFragment>
        ) => (
          <Popconfirm
            title={t('sureDelete')}
            onConfirm={() =>
              destroyByIdMutation({
                variables: { id: toString(record?.id) },
              })
                .then(() => {
                  action.reload();
                  message.success(Format(t('deleteFor'), t('success')));
                })
                .catch(message.error)
            }
          >
            <Button type="link" size="small">
              {t('delete')}
            </Button>
          </Popconfirm>
        ),
      },
    ] as SetColumnType[],
    ['roleGroupItemRoleGroupId']
  ) as ProColumns<RoleGroupManageFragment>[];

  /**
   * 定义列
   */
  const [columns] = useImmer(columnsDefault);

  /**
   * mutation delete
   */
  const [destroyByIdMutation] = useRoleGroupDestroyByIdMutation();

  /**
   * 展开关闭
   * @param expanded
   * @param record
   */
  const handleTableExpand = (record: RoleGroupManageFragment) => {
    return (
      <RoleExpand
        isDetails={false}
        onDelete={() => refProTable.current?.reload()}
        roleGroupItemRoleGroupId={
          record.roleGroupItemRoleGroupId as Maybe<
            Array<RoleGroupItemRoleGroupIdFragment>
          >
        }
      />
    );
  };

  const { refetch } = useFindRoleGroupManageListQuery({ skip: true });

  return (
    <ProTable<RoleGroupManageFragment>
      columns={columns}
      actionRef={refProTable}
      request={async (params, sorter, filter) => {
        return refetch({
          param: {
            limit: params.pageSize,
            offset:
              (toInteger(params.current) - 1) * toInteger(params.pageSize),
            order: proSortToOrder(sorter),
            where: filtersToWhere([params, filter], whereModel),
          },
        }).then((result) => {
          return {
            data: result.data.roleGroupAll as Array<RoleGroupManageFragment>,
            total: toInteger(result.data?.roleGroupCount),
            success: true,
          };
        });
      }}
      rowKey="id"
      pagination={{
        showQuickJumper: true,
        hideOnSinglePage: true,
      }}
      search={{
        layout: 'vertical',
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Button
          type="primary"
          key="primary"
          onClick={() => history.push('/role-group/')}
        >
          {t('add')}
        </Button>,
      ]}
      expandable={{
        expandedRowRender: (record) => handleTableExpand(record),
        rowExpandable: ({ roleGroupItemRoleGroupId }) =>
          !!(
            roleGroupItemRoleGroupId?.length &&
            roleGroupItemRoleGroupId?.length > 0
          ),
      }}
      debounceTime={toInteger(process.env.REACT_APP_ANTD_DEBOUNCE)}
      options={{ density: true }}
    />
  );
};

export default List;
