import {
  AppUserRoleTypeIdFragment,
  AppUserSaveIn,
  Maybe,
  Role,
  RoleManageFragment,
  RoleSaveIn,
} from '../../generator/auth-center';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useTranslation } from 'react-i18next';
import Format from 'string-format';
import { FC } from 'react';
import { useImmer } from 'use-immer';
import { differenceBy, remove } from 'lodash';
import {
  useAppUserRoleBulkMutation,
  useAppUserRoleDestroyMutation,
  useRoleMutation,
} from '../../generator/auth-center.operation';
import { message } from 'antd';
import { gqlErrorMessage } from '../../utils/antd-helper';
import Bluebird from 'bluebird';
import { union } from 'lodash';
import AppUserList from 'components/role/app-user-list';

interface IRoleSaveProp {
  data?: Maybe<RoleManageFragment>;
}

const Save: FC<IRoleSaveProp> = (props) => {
  const { t } = useTranslation();

  const [appUserRoleTypeId, setAppUserRoleTypeId] = useImmer(
    props.data?.appUserRoleTypeId
  );

  const [save] = useRoleMutation();
  const [destroy] = useAppUserRoleDestroyMutation();
  const [bulkSave] = useAppUserRoleBulkMutation();

  const create = async (values: RoleSaveIn) => {
    return save({
      variables: {
        param: values,
      },
    })
      .then((result) => {
        return (
          appUserRoleTypeId &&
          bulkSave({
            variables: {
              param: appUserRoleTypeId?.map((p) => ({
                appUserId: p?.appUserId,
                roleType: 'role',
                typeId: result.data?.role,
              })),
            },
          })
        );
      })
      .then((result) => {
        message.success(`${t('finish')}${t('success')}`);
      })
      .catch(gqlErrorMessage);
  };

  const update = async (values: AppUserSaveIn) => {
    const delList = differenceBy(
      props.data?.appUserRoleTypeId,
      appUserRoleTypeId as any,
      'id'
    );
    const addList = differenceBy(
      appUserRoleTypeId,
      props.data?.appUserRoleTypeId as any,
      'id'
    );
    const savePromise = {
      save: save({
        variables: {
          param: {
            id: props?.data?.id,
            ...values,
          },
        },
      }),
      destroy:
        delList && delList.length > 0
          ? destroy({
              variables: {
                where: {
                  id: delList.map((p) => p?.id) as Array<string>,
                },
              },
            })
          : undefined,
      bulkSave:
        addList && addList.length > 0
          ? bulkSave({
              variables: {
                param: addList.map((p) => ({
                  appUserId: p?.appUserId,
                  roleType: 'role',
                  typeId: props.data?.id,
                })),
              },
            })
          : undefined,
    };

    return Bluebird.props(savePromise)
      .then((result) => {
        message.success(`${t('finish')}${t('success')}`);
      })
      .catch(gqlErrorMessage);
  };
  /**
   * 提交
   */
  const handleFinish = async (values: AppUserSaveIn) =>
    props.data?.id ? update(values) : create(values);

  const handleReset = (e: any) => {
    setAppUserRoleTypeId((draft) => {
      return props.data?.appUserRoleTypeId;
    });
  };

  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <ProForm<Role>
        onFinish={handleFinish}
        onReset={handleReset}
        initialValues={props?.data || undefined}
      >
        <ProForm.Group>
          <ProFormText
            name="roleCode"
            label={t('roleCode')}
            tooltip={Format(t('rule.maxLength'), '15')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput'), t('roleCode')),
              },
            ]}
            fieldProps={{
              maxLength: 15,
            }}
          />
          <ProFormText
            name="roleName"
            label={t('roleName')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput')),
              },
            ]}
          />
          <ProFormText
            name="remark"
            label={t('remark')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput')),
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Item>
          <AppUserList
            isDetails={true}
            appUserRoleTypeId={
              appUserRoleTypeId as Maybe<Array<AppUserRoleTypeIdFragment>>
            }
            onDelete={(record) => {
              setAppUserRoleTypeId((draft) => {
                if (!draft || draft.length <= 0) {
                  return [];
                }
                remove(
                  draft,
                  (p) =>
                    (record?.id && p?.id && p?.id === record?.id) ||
                    p?.appUserId === record?.appUserId
                );
              });
            }}
            onFinish={(values) => {
              setAppUserRoleTypeId((draft) => {
                return union(draft, values);
              });
            }}
          />
        </ProForm.Item>
      </ProForm>
    </div>
  );
};

export default Save;
