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
  RoleManageFragment,
  AppUserRoleAppUserIdFragment,
  Maybe,
} from 'generator/auth-center';
import { toString, toInteger } from 'lodash';
import {
  FindRoleListManageDocument,
  useFindRoleListManageQuery,
  useRoleDestroyByIdMutation,
} from 'generator/auth-center.operation';
import Format from 'string-format';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { UseFetchDataAction } from '@ant-design/pro-table/lib/typing';
import { format } from 'date-fns';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AppUserList from 'components/role/app-user-list';

// #region type
type SetColumnType = { key: keyof RoleManageFragment; [p: string]: any };
type FilterType = {
  [p in keyof RoleManageFragment]: WhereType;
};
// #endregion
const whereModel: FilterType = {
  roleCode: '_like',
  roleName: '_like',
  createdAt: '_between',
};

const List: FC = () => {
  const { t } = useTranslation();

  const history = useHistory();

  const refProTable = useRef<ActionType>();

  const columnsDefault = generatorColumns<RoleManageFragment>(
    FindRoleListManageDocument,
    [
      {
        key: 'id',
        ...getColumnSearch<RoleManageFragment>(),
        render: (
          text: ReactNode,
          record: RoleManageFragment,
          index: number,
          action: UseFetchDataAction<RoleManageFragment>
        ) => <Link to={`/role/${text}`}>{text}</Link>,
      },
      {
        key: 'roleCode',
        ...getColumnSearch<RoleManageFragment>(),
      },
      {
        key: 'roleName',
        ...getColumnSearch<RoleManageFragment>(),
      },
      {
        key: 'createdAt',
        valueType: 'dateTimeRange',
        render: (text: ReactNode, record: RoleManageFragment) =>
          format(new Date(record.createdAt), 'yyyy-MM-dd HH:mm:ss'),
      },
      {
        key: 'operation',
        sorter: false,
        onFilter: true,
        valueType: 'option',
        render: (
          text: ReactNode,
          record: RoleManageFragment,
          index: number,
          action: UseFetchDataAction<RoleManageFragment>
        ) => (
          <Popconfirm
            title={t('sureDelete')}
            onConfirm={() =>
              roleDestroyByIdMutation({
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
    ['appUserRoleTypeId']
  ) as ProColumns<RoleManageFragment>[];

  /**
   * 定义列
   */
  const [columns] = useImmer(columnsDefault);

  /**
   * mutation delete
   */
  const [roleDestroyByIdMutation] = useRoleDestroyByIdMutation();

  /**
   * 展开关闭
   * @param expanded
   * @param record
   */
  const handleTableExpand = (record: RoleManageFragment) => {
    return (
      <AppUserList
        isDetails={false}
        onDelete={() => refProTable.current?.reload()}
        appUserRoleTypeId={
          record.appUserRoleTypeId as Maybe<Array<AppUserRoleAppUserIdFragment>>
        }
      />
    );
  };

  const { refetch } = useFindRoleListManageQuery({ skip: true });
  return (
    <ProTable<RoleManageFragment>
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
            data: result.data.roleAll as Array<RoleManageFragment>,
            total: toInteger(result.data?.roleCount),
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
          onClick={() => history.push('/role/')}
        >
          {t('add')}
        </Button>,
      ]}
      expandable={{
        expandedRowRender: (record) => handleTableExpand(record),
        rowExpandable: ({ appUserRoleTypeId }) =>
          !!(appUserRoleTypeId?.length && appUserRoleTypeId?.length > 0),
      }}
      debounceTime={toInteger(process.env.REACT_APP_ANTD_DEBOUNCE)}
      options={{ density: true }}
    />
  );
};

export default List;
