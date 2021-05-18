import {
  AppUser,
  AppUserFragment,
  AppUserRoleAppUserIdFragment,
  AppUserSaveIn,
  Maybe,
} from '../../generator/auth-center';
import ProForm, {
  ProFormText,
  ProFormRadio,
  ProFormDateTimePicker,
  ProFormSwitch,
} from '@ant-design/pro-form';
import { useTranslation } from 'react-i18next';
import Format from 'string-format';
import { FC } from 'react';
import RoleGroupExpand from '../app-user/role-group-expand';
import { useImmer } from 'use-immer';
import { differenceBy, remove } from 'lodash';
import {
  useAppUserMutation,
  useAppUserRoleBulkMutation,
  useAppUserRoleDestroyMutation,
} from 'generator/auth-center.operation';
import { message } from 'antd';
import { gqlErrorMessage } from 'utils/antd-helper';
import Bluebird from 'bluebird';
import { union } from 'lodash';

interface IAppUserSaveProp {
  data?: Maybe<AppUserFragment>;
}

const Save: FC<IAppUserSaveProp> = (props) => {
  const { t } = useTranslation();

  const [appUserRoleAppUserId, setAppUserRoleAppUserId] = useImmer(
    props.data?.appUserRoleAppUserId
  );

  const [appUserSave] = useAppUserMutation();
  const [appUserRoleDestroy] = useAppUserRoleDestroyMutation();
  const [appUserRoleBulkSave] = useAppUserRoleBulkMutation();

  const create = async (values: AppUserSaveIn) => {
    return appUserSave({
      variables: {
        param: {
          ...values,
          appUserRoleAppUserId: appUserRoleAppUserId?.map((p) => ({
            typeId: p?.typeId,
            id: p?.id,
            roleType: p?.roleType,
          })),
        },
      },
    })
      .then((result) => {
        message.success(`${t('finish')}${t('success')}`);
      })
      .catch(gqlErrorMessage);
  };

  const update = async (values: AppUserSaveIn) => {
    const delList = differenceBy(
      props.data?.appUserRoleAppUserId,
      appUserRoleAppUserId as any,
      'id'
    );
    const addList = differenceBy(
      appUserRoleAppUserId,
      props.data?.appUserRoleAppUserId as any,
      'id'
    );
    const save = {
      appUserSave: appUserSave({
        variables: {
          param: {
            id: props?.data?.id,
            ...values,
          },
        },
      }),
      appUserRoleDestroy:
        delList && delList.length > 0
          ? appUserRoleDestroy({
              variables: {
                where: {
                  id: delList.map((p) => p?.id) as Array<string>,
                },
              },
            })
          : undefined,
      appUserRoleBulkSave:
        addList && addList.length > 0
          ? appUserRoleBulkSave({
              variables: {
                param: addList.map((p) => ({
                  appUserId: props.data?.id,
                  roleType: p?.roleType,
                  typeId: p?.typeId,
                })),
              },
            })
          : undefined,
    };

    return Bluebird.props(save)
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
    setAppUserRoleAppUserId((draft) => {
      return props.data?.appUserRoleAppUserId;
    });
  };

  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <ProForm<AppUser>
        onFinish={handleFinish}
        onReset={handleReset}
        initialValues={props?.data || undefined}
      >
        <ProForm.Group>
          <ProFormText
            name="userName"
            label={t('userName')}
            tooltip={Format(t('rule.maxLength'), '15')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput'), t('userName')),
              },
            ]}
            fieldProps={{
              maxLength: 15,
            }}
          />
          <ProFormText
            name="phone"
            label={t('phone')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput')),
              },
            ]}
          />
          <ProFormRadio.Group
            name="userGender"
            label={t('userGender')}
            options={[
              {
                label: t('w'),
                value: 'w',
              },
              {
                label: t('m'),
                value: 'm',
              },
            ]}
          />
          <ProFormText
            name="realName"
            label={t('realName')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput')),
              },
            ]}
            fieldProps={{
              maxLength: 15,
            }}
          />
          <ProFormText
            name="nickName"
            label={t('nickName')}
            placeholder={Format(t('pleaseInput'))}
            fieldProps={{
              maxLength: 15,
            }}
          />
          <ProFormDateTimePicker
            name="registerTime"
            label={t('registerTime')}
            placeholder=""
            disabled
          />
          <ProFormSwitch
            name="appUserStatus"
            label={t('appUserStatus')}
            checkedChildren={t('enable')}
            unCheckedChildren={t('disable')}
            fieldProps={{
              defaultChecked: true,
            }}
          />
          {/* app_user_status */}
        </ProForm.Group>
        <ProForm.Item>
          <RoleGroupExpand
            isDetails={true}
            appUserRoleAppUserId={
              appUserRoleAppUserId as Maybe<Array<AppUserRoleAppUserIdFragment>>
            }
            onDelete={(record) => {
              setAppUserRoleAppUserId((draft) => {
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
            onFinish={(values) => {
              setAppUserRoleAppUserId((draft) => {
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
