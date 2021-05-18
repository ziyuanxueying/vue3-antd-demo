import { FC } from 'react';
import { Card } from 'antd';
import LoginForm from '../components/common/login-form';
import './login.less';

const Login: FC = () => (
  <Card className="login-card" hoverable>
    <LoginForm />
  </Card>
);

export default Login;
