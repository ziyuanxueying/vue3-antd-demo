import { FC, useRef } from 'react';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import {
  RoleGroupItemRoleGroupIdFragment,
  Maybe,
} from '../../generator/auth-center';
import { useTranslation } from 'react-i18next';
import {
  generatorColumns,
  getColumnSearch,
  localChange,
} from '../../utils/antd-helper';
import {
  RoleGroupItemRoleGroupIdFragmentDoc,
  useRoleGroupItemDestroyByIdMutation,
} from '../../generator/auth-center.operation';
import { message } from 'antd';
import CheckRole from './check-role';
import { toInteger, toString } from 'lodash';
import Format from 'string-format';
import ColDelOperation from '../common/col-del-operation';

interface IRoleExpandProp {
  roleGroupItemRoleGroupId?: Maybe<Array<RoleGroupItemRoleGroupIdFragment>>;
  onFinish?: (values: Maybe<RoleGroupItemRoleGroupIdFragment[]>) => void;
  /**
   * 是否明细 明细不显示添加和确认删除
   */
  isDetails: boolean;
  onDelete?: (record: Maybe<RoleGroupItemRoleGroupIdFragment>) => void;
}

const RoleExpand: FC<IRoleExpandProp> = (props) => {
  const { t } = useTranslation();

  const refProTable = useRef<ActionType>();

  const [itemDestroyById] = useRoleGroupItemDestroyByIdMutation();

  const handleDel = async (record: RoleGroupItemRoleGroupIdFragment) => {
    if (!props.isDetails) {
      itemDestroyById({
        variables: { id: toString(record?.id) },
      })
        .then(() => {
          props.onDelete && props.onDelete(record);
          refProTable.current?.reload();
          message.success(Format(t('deleteFor'), t('success')));
        })
        .catch((error) => {});
    } else {
      props.onDelete && props.onDelete(record);
      refProTable.current?.reload();
    }
  };

  /**
   * 扩展行
   */
  const columnsExpandDefault = generatorColumns<RoleGroupItemRoleGroupIdFragment>(
    RoleGroupItemRoleGroupIdFragmentDoc,
    [
      {
        key: 'roleIdObj.roleCode',
        title: t('roleCode'),
        dataIndex: ['roleIdObj', 'roleCode'],
        sorter: (a, b) =>
          toString(a.roleIdObj?.roleCode).localeCompare(
            toString(b.roleIdObj?.roleCode)
          ),
        ...getColumnSearch(),
      },
      {
        key: 'roleIdObj.roleName',
        title: t('roleName'),
        dataIndex: ['roleIdObj', 'roleName'],
        sorter: (a, b) =>
          toString(a.roleIdObj?.roleName).localeCompare(
            toString(b.roleIdObj?.roleName)
          ),
        ...getColumnSearch(),
      },
      {
        key: 'operation',
        sorter: false,
        onFilter: () => true,
        render: (_: string, record: RoleGroupItemRoleGroupIdFragment) => (
          <ColDelOperation
            showConfirm={!props.isDetails}
            onDelete={() => handleDel(record)}
          />
        ),
      },
    ],
    ['id', 'roleIdObj']
  ) as ProColumns<RoleGroupItemRoleGroupIdFragment>[];

  return (
    <ProTable<RoleGroupItemRoleGroupIdFragment>
      search={false}
      actionRef={refProTable}
      rowKey={(record) => toString(record.id || record.roleIdObj?.id)}
      size="small"
      pagination={{
        showQuickJumper: true,
        hideOnSinglePage: true,
      }}
      request={(params, sorter, filter) => {
        return Promise.resolve({
          data: localChange(
            props.roleGroupItemRoleGroupId,
            params,
            filter,
            sorter
          ),
          success: true,
        });
      }}
      columns={columnsExpandDefault}
      headerTitle={`${t('AppUser')} ${t('list')}`}
      toolBarRender={
        props.isDetails
          ? () => [
              <CheckRole
                roleGroupItemRoleGroupId={props.roleGroupItemRoleGroupId}
                onFinish={(values) => {
                  props.onFinish && props.onFinish(values);
                  refProTable.current?.reload();
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

export default RoleExpand;
