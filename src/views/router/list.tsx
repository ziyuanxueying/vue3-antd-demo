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
} from '../../utils/antd-helper';
import { RouterFragment } from '../../generator/auth-center';
import { toString, toInteger } from 'lodash';
import {
  FindRouterListDocument,
  useFindRouterListQuery,
  useRoleGroupDestroyByIdMutation,
} from '../../generator/auth-center.operation';
import Format from 'string-format';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { UseFetchDataAction } from '@ant-design/pro-table/lib/typing';
import { format } from 'date-fns';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

// #region type
type SetColumnType = { key: keyof RouterFragment; [p: string]: any };
type FilterType = {
  [p in keyof RouterFragment]: WhereType;
};
// #endregion
const whereModel: FilterType = {
  routerCode: '_like',
  routerName: '_like',
  createdAt: '_between',
};

const List: FC = () => {
  const { t } = useTranslation();

  const history = useHistory();

  const refProTable = useRef<ActionType>();

  const columnsDefault = generatorColumns<RouterFragment>(
    FindRouterListDocument,
    [
      {
        key: 'id',
        ...getColumnSearch<RouterFragment>(),
        render: (
          text: ReactNode,
          record: RouterFragment,
          index: number,
          action: UseFetchDataAction<RouterFragment>
        ) => <Link to={`/router/${text}`}>{text}</Link>,
      },
      {
        key: 'routerCode',
        ...getColumnSearch<RouterFragment>(),
      },
      {
        key: 'routerName',
        ...getColumnSearch<RouterFragment>(),
      },
      {
        key: 'createdAt',
        valueType: 'dateTimeRange',
        render: (text: ReactNode, record: RouterFragment) =>
          format(new Date(record.createdAt), 'yyyy-MM-dd HH:mm:ss'),
      },
      {
        key: 'operation',
        sorter: false,
        onFilter: true,
        valueType: 'option',
        render: (
          text: ReactNode,
          record: RouterFragment,
          index: number,
          action: UseFetchDataAction<RouterFragment>
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
    []
  ) as ProColumns<RouterFragment>[];

  /**
   * 定义列
   */
  const [columns] = useImmer(columnsDefault);

  /**
   * mutation delete
   */
  const [destroyByIdMutation] = useRoleGroupDestroyByIdMutation();

  const { refetch } = useFindRouterListQuery({ skip: true });

  return (
    <ProTable<RouterFragment>
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
            data: result.data.routerAll as Array<RouterFragment>,
            total: toInteger(result.data?.routerCount),
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
          onClick={() => history.push('/router/')}
        >
          {t('add')}
        </Button>,
      ]}
      debounceTime={toInteger(process.env.REACT_APP_ANTD_DEBOUNCE)}
      options={{ density: true }}
    />
  );
};

export default List;
