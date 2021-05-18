import { FC, useRef } from 'react';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import {
  AppUserRoleAppUserIdFragment,
  Maybe,
} from '../../generator/auth-center';
import { useTranslation } from 'react-i18next';
import { generatorColumns, getColumnSearch } from '../../utils/antd-helper';
import {
  AppUserRoleAppUserIdFragmentDoc,
  useAppUserRoleDestroyByIdMutation,
} from '../../generator/auth-center.operation';
import { Popconfirm, Button, Tag, message } from 'antd';
import CheckRoleAndGroup from './check-role-and-group';
import { get, remove, toInteger, toString, union } from 'lodash';
import Format from 'string-format';
import { useImmer } from 'use-immer';

interface IRoleGroupExpandProp {
  appUserRoleAppUserId?: Maybe<Array<AppUserRoleAppUserIdFragment>>;
  onFinish?: (values: Maybe<AppUserRoleAppUserIdFragment[]>) => void;
  /**
   * 是否明细 明细不显示添加和确认删除
   */
  isDetails: boolean;
  onDelete?: (record: Maybe<AppUserRoleAppUserIdFragment>) => void;
}

const RoleGroupExpand: FC<IRoleGroupExpandProp> = (props) => {
  const { t } = useTranslation();

  const [appUserRoleDestroyById] = useAppUserRoleDestroyByIdMutation();

  const refProTable = useRef<ActionType>();

  /**
   * 删除列渲染
   * @returns
   */
  const operationRender = (record: AppUserRoleAppUserIdFragment) => {
    return props.isDetails ? (
      <Button
        type="link"
        size="small"
        onClick={() => {
          props.onDelete && props.onDelete(record);
          setDataSource((draft) => {
            if (!draft || draft.length <= 0) {
              return [];
            }
            remove(
              draft,
              (p) =>
                (record?.id && p?.id && p?.id === record?.id) ||
                (p?.typeId === record?.typeId &&
                  p?.roleType === record?.roleType)
            );
          });
        }}
      >
        {t('delete')}
      </Button>
    ) : (
      <Popconfirm
        title={t('sureDelete')}
        onConfirm={() =>
          appUserRoleDestroyById({
            variables: { id: toString(record?.id) },
          })
            .then(() => {
              props.onDelete && props.onDelete(record);
              refProTable.current?.reload();
              message.success(Format(t('deleteFor'), t('success')));
            })
            .catch((error) => {})
        }
      >
        <Button type="link" size="small">
          {t('delete')}
        </Button>
      </Popconfirm>
    );
  };

  /**
   * 扩展行
   */
  const columnsExpandDefault = generatorColumns<AppUserRoleAppUserIdFragment>(
    AppUserRoleAppUserIdFragmentDoc,
    [
      {
        key: 'typeIdModel.name',
        title: t('typeIdModel.name'),
        dataIndex: ['typeIdModel', 'name'],
        sorter: (a, b) => {
          return get(a, 'typeIdModel.name').localeCompare(
            get(b, 'typeIdModel.name')
          );
        },
        ...getColumnSearch<AppUserRoleAppUserIdFragment>(),
      },
      {
        key: 'operation',
        sorter: false,
        render: (_: string, record: AppUserRoleAppUserIdFragment) =>
          operationRender(record),
      },
      {
        key: 'roleType',
        title: t('type'),
        filters: [
          {
            text: t('role'),
            value: 'role',
          },
          {
            text: t('roleGroup'),
            value: 'roleGroup',
          },
        ],
        sorter: (a, b) => {
          return toString(a.roleType).localeCompare(toString(b.roleType));
        },
        render: (text: string) => (
          <Tag color={text === 'role' ? 'red' : 'lime'}>{t(text)}</Tag>
        ),
      },
    ],
    ['id', 'typeId', 'typeIdModel']
  ) as ProColumns<AppUserRoleAppUserIdFragment>[];

  const [dataSource, setDataSource] = useImmer(props.appUserRoleAppUserId);

  return (
    <ProTable<AppUserRoleAppUserIdFragment>
      actionRef={refProTable}
      search={false}
      rowKey={(record) => record.id || `${record.roleType}${record.typeId}`}
      size="small"
      pagination={{
        showQuickJumper: true,
        hideOnSinglePage: true,
      }}
      dataSource={union(dataSource as [], props.appUserRoleAppUserId)}
      columns={columnsExpandDefault}
      headerTitle={`${t('role')}/${t('roleGroup')} ${t('list')}`}
      toolBarRender={
        props.isDetails
          ? () => [
              <CheckRoleAndGroup
                appUserRoleAppUserId={props.appUserRoleAppUserId}
                onFinish={(values) => {
                  setDataSource((draft) => {
                    return values;
                  });
                  props.onFinish && props.onFinish(values);
                }}
              />,
            ]
          : false
      }
      debounceTime={toInteger(process.env.REACT_APP_ANTD_DEBOUNCE)}
      options={{ density: true }}
    ></ProTable>
  );
};

export default RoleGroupExpand;
