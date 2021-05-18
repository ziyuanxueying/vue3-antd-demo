import { FC, ReactNode, useRef } from 'react';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { AppUserRoleTypeIdFragment, Maybe } from '../../generator/auth-center';
import { useTranslation } from 'react-i18next';
import {
  generatorColumns,
  getColumnSearch,
  localChange,
} from '../../utils/antd-helper';
import {
  AppUserRoleTypeIdFragmentDoc,
  useAppUserRoleDestroyByIdMutation,
} from '../../generator/auth-center.operation';
import { message } from 'antd';
import CheckAppUser from './check-app-user';
import { toInteger, toString } from 'lodash';
import Format from 'string-format';
import ColDelOperation from '../common/col-del-operation';
import { Link } from 'react-router-dom';

interface IAppUserListExpandProp {
  appUserRoleTypeId?: Maybe<Array<AppUserRoleTypeIdFragment>>;
  onFinish?: (values: Maybe<AppUserRoleTypeIdFragment[]>) => void;
  /**
   * 是否明细 明细不显示添加和确认删除
   */
  isDetails: boolean;
  onDelete?: (record: Maybe<AppUserRoleTypeIdFragment>) => void;
}

const AppUserList: FC<IAppUserListExpandProp> = (props) => {
  const { t } = useTranslation();

  const refProTable = useRef<ActionType>();

  const [appUserRoleDestroyById] = useAppUserRoleDestroyByIdMutation();

  const handleDel = async (record: AppUserRoleTypeIdFragment) => {
    if (!props.isDetails) {
      appUserRoleDestroyById({
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
  const columnsExpandDefault = generatorColumns<AppUserRoleTypeIdFragment>(
    AppUserRoleTypeIdFragmentDoc,
    [
      {
        key: 'appUserIdObj.userName',
        title: t('userName'),
        dataIndex: ['appUserIdObj', 'userName'],
        sorter: (a, b) =>
          toString(a.appUserIdObj?.userName).localeCompare(
            toString(b.appUserIdObj?.userName)
          ),
        ...getColumnSearch(),
      },
      {
        key: 'appUserIdObj.phone',
        title: t('phone'),
        dataIndex: ['appUserIdObj', 'phone'],
        sorter: (a, b) =>
          toString(a.appUserIdObj?.phone).localeCompare(
            toString(b.appUserIdObj?.phone)
          ),
        ...getColumnSearch(),
      },
      {
        key: 'appUserIdObj.nickName',
        title: t('nickName'),
        dataIndex: ['appUserIdObj', 'nickName'],
        sorter: (a, b) =>
          toString(a.appUserIdObj?.nickName).localeCompare(
            toString(b.appUserIdObj?.nickName)
          ),
        ...getColumnSearch(),
      },
      {
        key: 'appUserId',
        title: t('id'),
        sorter: (a, b) => {
          return toString(a.appUserId).localeCompare(toString(b.appUserId));
        },
        render: (
          value: ReactNode,
          record: AppUserRoleTypeIdFragment,
          index: number
        ) => <Link to={`/app-user/${value}`}>{value}</Link>,
      },
      {
        key: 'operation',
        sorter: false,
        onFilter: () => true,
        render: (_: string, record: AppUserRoleTypeIdFragment) => (
          <ColDelOperation
            showConfirm={!props.isDetails}
            onDelete={() => handleDel(record)}
          />
        ),
      },
    ],
    ['id', 'appUserIdObj']
  ) as ProColumns<AppUserRoleTypeIdFragment>[];

  return (
    <ProTable<AppUserRoleTypeIdFragment>
      search={false}
      actionRef={refProTable}
      rowKey={(record) => toString(record.id || record.appUserId)}
      size="small"
      pagination={{
        showQuickJumper: true,
        hideOnSinglePage: true,
      }}
      request={(params, sorter, filter) => {
        return Promise.resolve({
          data: localChange(props.appUserRoleTypeId, params, filter, sorter),
          success: true,
        });
      }}
      columns={columnsExpandDefault}
      headerTitle={`${t('AppUser')} ${t('list')}`}
      toolBarRender={
        props.isDetails
          ? () => [
              <CheckAppUser
                appUserRoleTypeId={props.appUserRoleTypeId}
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

export default AppUserList;
