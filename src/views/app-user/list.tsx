import { FC, ReactNode, useRef } from 'react';
import { Popconfirm, Button, message, Tag } from 'antd';
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
  AppUserFragment,
  AppUserRoleAppUserIdFragment,
  Maybe,
} from 'generator/auth-center';
import { toString, toInteger, debounce } from 'lodash';
import {
  useAppUserDestroyByIdMutation,
  FindAppUserListDocument,
  useAppUserStatusMutation,
  useFindAppUserListQuery,
} from 'generator/auth-center.operation';
import Format from 'string-format';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { UseFetchDataAction } from '@ant-design/pro-table/lib/typing';
import { format } from 'date-fns';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import RoleGroupExpand from 'components/app-user/role-group-expand';

// #region type
type SetColumnType = { key: keyof AppUserFragment; [p: string]: any };
type FilterType = {
  [p in keyof AppUserFragment]: WhereType;
};
// #endregion
const whereModel: FilterType = {
  userName: '_like',
  nickName: '_like',
  phone: '_like',
  createdAt: '_between',
};

const List: FC = () => {
  const { t } = useTranslation();

  const history = useHistory();

  const refProTable = useRef<ActionType>();

  const columnsDefault = generatorColumns<AppUserFragment>(
    FindAppUserListDocument,
    [
      {
        key: 'avatarUrl',
        ellipsis: true,
        search: false,
      },
      {
        key: 'userName',
        ...getColumnSearch<AppUserFragment>('userName'),
      },
      {
        key: 'nickName',
        ...getColumnSearch<AppUserFragment>('nickName'),
      },
      {
        key: 'phone',
        ...getColumnSearch<AppUserFragment>('phone'),
      },
      {
        key: 'userGender',
        filters: true, // 列筛选
        onFilter: true, // form筛选
        valueType: 'select',
        filterMultiple: false,
        valueEnum: {
          w: {
            text: t('w'),
          },
          m: {
            text: t('m'),
          },
        },
      },
      {
        key: 'appUserStatus',
        filters: true, // 列筛选
        onFilter: true, // form筛选
        valueType: 'select',
        filterMultiple: false,
        valueEnum: {
          Y: {
            text: t('enable'),
          },
          N: {
            text: t('disable'),
          },
        },
        render: (
          text: ReactNode,
          record: AppUserFragment,
          index: number,
          action: UseFetchDataAction<AppUserFragment>
        ) => (
          <Button
            type="link"
            key={index}
            onClick={debounce(() => {
              appUserStatusMutatioin({
                variables: {
                  id: toString(record.id),
                  appUserStatus: record.appUserStatus === 'Y' ? 'N' : 'Y',
                },
              })
                .then(() => {
                  action.reload();
                  message.success(Format(t('StatusMutationFor'), t('success')));
                })
                .catch(message.error);
            }, toInteger(process.env.REACT_APP_ANTD_DEBOUNCE))}
          >
            <Tag color={record.appUserStatus === 'Y' ? 'green' : 'geekblue'}>
              {t(record.appUserStatus === 'Y' ? 'enable' : 'disable')}
            </Tag>
          </Button>
        ),
      },
      {
        key: 'createdAt',
        valueType: 'dateTimeRange',
        render: (text: ReactNode, record: AppUserFragment) =>
          format(new Date(record.createdAt), 'yyyy-MM-dd HH:mm:ss'),
      },
      {
        key: 'operation',
        sorter: false,
        valueType: 'option',
        render: (
          text: ReactNode,
          record: AppUserFragment,
          index: number,
          action: UseFetchDataAction<AppUserFragment>
        ) => (
          <Popconfirm
            title={t('sureDelete')}
            onConfirm={() =>
              appUserDestroyByIdMutation({
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
      {
        key: 'id',
        ...getColumnSearch<AppUserFragment>('id'),
        render: (
          text: ReactNode,
          record: AppUserFragment,
          index: number,
          action: UseFetchDataAction<AppUserFragment>
        ) => <Link to={`/app-user/${text}`}>{text}</Link>,
      },
    ] as SetColumnType[],
    ['appUserRoleAppUserId']
  ) as ProColumns<AppUserFragment>[];

  /**
   * 定义列
   */
  const [columns] = useImmer(columnsDefault);

  /**
   * mutation delete
   */
  const [appUserDestroyByIdMutation] = useAppUserDestroyByIdMutation();

  /**
   * mutation update
   */
  const [appUserStatusMutatioin] = useAppUserStatusMutation();

  /**
   * 展开关闭
   * @param expanded
   * @param record
   */
  const handleTableExpand = (record: AppUserFragment) => {
    return (
      <RoleGroupExpand
        isDetails={false}
        onDelete={() => refProTable.current?.reload()}
        appUserRoleAppUserId={
          record.appUserRoleAppUserId as Maybe<
            Array<AppUserRoleAppUserIdFragment>
          >
        }
      />
    );
  };

  const { refetch } = useFindAppUserListQuery({ skip: true });

  return (
    <ProTable<AppUserFragment>
      columns={columns}
      actionRef={refProTable}
      request={async (params, sorter, filter) =>
        refetch({
          param: {
            limit: params.pageSize,
            offset:
              (toInteger(params.current) - 1) * toInteger(params.pageSize),
            order: proSortToOrder(sorter),
            where: filtersToWhere([params, filter], whereModel),
          },
        }).then((result) => {
          return {
            data: result.data.appUserAll as Array<AppUserFragment>,
            total: toInteger(result.data?.appUserCount),
            success: true,
          };
        })
      }
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
          onClick={() => history.push('/app-user/')}
        >
          {t('add')}
        </Button>,
      ]}
      expandable={{
        expandedRowRender: (record) => handleTableExpand(record),
        rowExpandable: ({ appUserRoleAppUserId }) =>
          !!(appUserRoleAppUserId?.length && appUserRoleAppUserId?.length > 0),
      }}
      debounceTime={toInteger(process.env.REACT_APP_ANTD_DEBOUNCE)}
      options={{ density: true }}
    />
  );
};

export default List;
