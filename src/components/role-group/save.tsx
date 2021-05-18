import {
  Maybe,
  RoleGroup,
  RoleGroupItemRoleGroupIdFragment,
  RoleGroupManageFragment,
  RoleGroupSaveIn,
} from '../../generator/auth-center';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useTranslation } from 'react-i18next';
import Format from 'string-format';
import { FC } from 'react';
import { useImmer } from 'use-immer';
import { differenceBy, remove } from 'lodash';
import {
  useRoleGroupItemBulkMutation,
  useRoleGroupItemDestroyMutation,
  useRoleGroupMutation,
} from '../../generator/auth-center.operation';
import { message } from 'antd';
import { gqlErrorMessage } from '../../utils/antd-helper';
import Bluebird from 'bluebird';
import { union } from 'lodash';
import RoleExpand from './role-expand';

interface IRoleGroupSaveProp {
  data?: Maybe<RoleGroupManageFragment>;
}

const Save: FC<IRoleGroupSaveProp> = (props) => {
  const { t } = useTranslation();

  const [roleGroupItemRoleGroupId, setRoleGroupItemRoleGroupId] = useImmer(
    props.data?.roleGroupItemRoleGroupId
  );

  const [save] = useRoleGroupMutation();
  const [destroy] = useRoleGroupItemDestroyMutation();
  const [bulkSave] = useRoleGroupItemBulkMutation();

  const create = async (values: RoleGroupSaveIn) => {
    return save({
      variables: {
        param: {
          ...values,
          roleGroupItemRoleGroupId: roleGroupItemRoleGroupId?.map((p) => ({
            roleId: p?.roleIdObj?.id,
          })),
        },
      },
    })
      .then((result) => {
        message.success(`${t('finish')}${t('success')}`);
      })
      .catch(gqlErrorMessage);
  };

  const update = async (values: RoleGroupSaveIn) => {
    const delList = differenceBy(
      props.data?.roleGroupItemRoleGroupId,
      roleGroupItemRoleGroupId as any,
      'id'
    );
    const addList = differenceBy(
      roleGroupItemRoleGroupId,
      props.data?.roleGroupItemRoleGroupId as any,
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
                  roleGroupId: props.data?.id,
                  roleId: p?.roleIdObj?.id,
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
  const handleFinish = async (values: RoleGroupSaveIn) =>
    props.data?.id ? update(values) : create(values);

  const handleReset = (e: any) => {
    setRoleGroupItemRoleGroupId((draft) => {
      return props.data?.roleGroupItemRoleGroupId;
    });
  };

  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <ProForm<RoleGroup>
        onFinish={handleFinish}
        onReset={handleReset}
        initialValues={props?.data || undefined}
      >
        <ProForm.Group>
          <ProFormText
            name="groupCode"
            label={t('groupCode')}
            tooltip={Format(t('rule.maxLength'), '15')}
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
            name="groupName"
            label={t('groupName')}
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
          <RoleExpand
            isDetails={true}
            roleGroupItemRoleGroupId={
              roleGroupItemRoleGroupId as Maybe<
                Array<RoleGroupItemRoleGroupIdFragment>
              >
            }
            onDelete={(record) => {
              setRoleGroupItemRoleGroupId((draft) => {
                if (!draft || draft.length <= 0) {
                  return [];
                }
                remove(
                  draft,
                  (p) =>
                    (record?.id && p?.id && p?.id === record?.id) ||
                    p?.roleIdObj?.id === record?.roleIdObj?.id
                );
              });
            }}
            onFinish={(values) => {
              setRoleGroupItemRoleGroupId((draft) => {
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
