import {
  Maybe,
  RoleGroupSaveIn,
  Router,
  RouterFragment,
} from '../../generator/auth-center';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { useTranslation } from 'react-i18next';
import Format from 'string-format';
import { FC } from 'react';
import { useRouterMutation } from '../../generator/auth-center.operation';
import { message } from 'antd';
import { gqlErrorMessage } from '../../utils/antd-helper';

interface IRouterSaveProp {
  data?: Maybe<RouterFragment>;
}

const Save: FC<IRouterSaveProp> = (props) => {
  const { t } = useTranslation();

  const [save] = useRouterMutation();

  const create = async (values: RoleGroupSaveIn) => {
    return;
  };

  /**
   * 提交
   */
  const handleFinish = async (values: RoleGroupSaveIn) =>
    save({
      variables: {
        param: {
          id: props.data?.id,
          ...values,
        },
      },
    })
      .then((result) => {
        message.success(`${t('finish')}${t('success')}`);
      })
      .catch(gqlErrorMessage);

  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <ProForm<Router>
        onFinish={handleFinish}
        initialValues={props?.data || undefined}
      >
        <ProForm.Group>
          <ProFormText
            name="displayCode"
            label={t('displayCode')}
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
            name="displayTxt"
            label={t('displayTxt')}
            placeholder={Format(t('pleaseInput'))}
          />
          <ProFormText
            name="routerCode"
            label={t('routerCode')}
            placeholder={Format(t('pleaseInput'))}
            rules={[
              {
                required: true,
                message: Format(t('pleaseInput')),
              },
            ]}
          />
          <ProFormText
            name="routerName"
            label={t('routerName')}
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
        <ProForm.Item></ProForm.Item>
      </ProForm>
    </div>
  );
};

export default Save;
