import ProForm, { ProFormText } from '@ant-design/pro-form';
import { MobileOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Format from 'string-format';
import { post } from 'plugins/cross-fetch';
import { RootState } from 'redux/store';
import actions, { LOGIN_ACTION } from 'redux/action/login';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get } from 'lodash';

const mapState = (state: RootState) => ({
  appUser: state.login.appUser,
});

const mapDispatch = {
  onLogin: actions[LOGIN_ACTION.LOGIN],
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginForm = (props: PropsFromRedux) => {
  const { t } = useTranslation();

  const history = useHistory();

  /**
   * 提交
   */
  const handleFinish = async (values: { phone: string; password: string }) => {
    props.onLogin('test');
    history.push(get(history.location, 'state.from', '/'));
    // await post('/api/app-user/login', values).then((result) => {
    //   props.onLogin(result);
    //   history.push(get(history.location, 'state.from', '/'));
    // });
  };

  return (
    <div
      style={{
        width: 330,
        margin: 'auto',
      }}
    >
      <ProForm
        onFinish={handleFinish}
        submitter={{
          searchConfig: {
            submitText: t('login'),
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          <img
            style={{
              height: '44px',
              marginRight: 16,
            }}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          {t('User rights management center')}
        </h1>
        <div
          style={{
            marginTop: 12,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          {t('User rights management center')}
        </div>
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined />,
          }}
          name="userName"
          placeholder={Format(t('pleaseInput'), t('phone'))}
          rules={[
            {
              required: true,
              message: Format(t('pleaseInput'), t('phone')),
            },
            {
              pattern: /^1\d{10}$/,
              message: t('rule.phone'),
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          rules={[
            {
              required: true,
              message: Format(t('pleaseInput'), t('password')),
            },
          ]}
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          placeholder={Format(t('pleaseInput'), t('password'))}
        />
      </ProForm>
    </div>
  );
};

export default connector(LoginForm);
