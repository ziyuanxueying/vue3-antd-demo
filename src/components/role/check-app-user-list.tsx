import { ActionType } from '@ant-design/pro-table';
import {
  ProColumns,
  UseFetchDataAction,
} from '@ant-design/pro-table/lib/typing';
import { FC, ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppUserOnlyFragment,
  AppUserRoleTypeIdFragment,
} from '../../generator/auth-center';
import {
  FindAppUserListOnlyDocument,
  useFindAppUserListOnlyQuery,
} from '../../generator/auth-center.operation';
import {
  filtersToWhere,
  generatorColumns,
  getColumnSearch,
  proSortToOrder,
  WhereType,
} from '../../utils/antd-helper';
import { Table, Tag } from 'antd';
import { format } from 'date-fns';
import { useImmer } from 'use-immer';
import ProTable from '@ant-design/pro-table';
import { set, toInteger } from 'lodash';

// #region type
type SetColumnType = { key: keyof AppUserOnlyFragment; [p: string]: any };
type FilterType = {
  [p in keyof AppUserOnlyFragment]: WhereType;
};
// #endregion
const whereModel: FilterType = {
  userName: '_like',
  nickName: '_like',
  phone: '_like',
  createdAt: '_between',
};

interface ICheckAppUserListProps {
  selectedRows: AppUserRoleTypeIdFragment[] | undefined;
  emitProTableSel: (value: AppUserRoleTypeIdFragment[]) => void;
}

const CheckAppUserList: FC<ICheckAppUserListProps> = (props) => {
  const { t } = useTranslation();

  const refProTable = useRef<ActionType>();

  const columnsDefault = generatorColumns<AppUserOnlyFragment>(
    FindAppUserListOnlyDocument,
    [
      {
        key: 'userName',
        ...getColumnSearch<AppUserOnlyFragment>('userName'),
      },
      {
        key: 'nickName',
        ...getColumnSearch<AppUserOnlyFragment>('nickName'),
      },
      {
        key: 'phone',
        ...getColumnSearch<AppUserOnlyFragment>('phone'),
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
          record: AppUserOnlyFragment,
          index: number,
          action: UseFetchDataAction<AppUserOnlyFragment>
        ) => (
          <Tag color={record.appUserStatus === 'Y' ? 'green' : 'geekblue'}>
            {t(record.appUserStatus === 'Y' ? 'enable' : 'disable')}
          </Tag>
        ),
      },
      {
        key: 'createdAt',
        valueType: 'dateTimeRange',
        render: (text: ReactNode, record: AppUserOnlyFragment) =>
          format(new Date(record.createdAt), 'yyyy-MM-dd HH:mm:ss'),
      },
    ] as SetColumnType[],
    ['id']
  ) as ProColumns<AppUserOnlyFragment>[];

  /**
   * 定义列
   */
  const [columns] = useImmer(columnsDefault);

  const { refetch } = useFindAppUserListOnlyQuery({ skip: true });

  const [proTableSel, setProTableSel] = useImmer<AppUserOnlyFragment[]>([]);

  return (
    <ProTable<AppUserOnlyFragment>
      columns={columns}
      actionRef={refProTable}
      request={async (params, sorter, filter) => {
        const where = filtersToWhere([params, filter], whereModel) || {};
        if (props.selectedRows && props.selectedRows.length > 0) {
          set(where, 'id', {
            _not: props.selectedRows.map((p) => p.appUserId),
          });
        }
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
            data: result.data.appUserAll as Array<AppUserOnlyFragment>,
            total: toInteger(result.data?.appUserCount),
            success: true,
          };
        });
      }}
      rowKey="id"
      size="small"
      pagination={{
        showQuickJumper: true,
        hideOnSinglePage: true,
        size: 'small',
        pageSize: 5,
      }}
      rowSelection={{
        selectedRowKeys: proTableSel.map((p) => p.id) as [],
        onChange: (selectedRowKeys, selectedRows) => {
          setProTableSel((draft) => selectedRows);
          props.emitProTableSel(
            selectedRows.map((p) => ({
              appUserId: p.id,
              appUserIdObj: {
                userName: p.userName,
                nickName: p.nickName,
                phone: p.phone,
              },
            }))
          );
        },
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }}
      dateFormatter="string"
      debounceTime={toInteger(process.env.REACT_APP_ANTD_DEBOUNCE)}
      options={{ density: true }}
      toolBarRender={false}
      search={false}
    />
  );
};

export default CheckAppUserList;
