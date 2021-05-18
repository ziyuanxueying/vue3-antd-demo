import { IAppUser } from '../../pages/login.type';
import { createActions } from 'redux-actions';

export const LOGIN_ACTION = {
  LOGIN: 'login',
  LOGOUT: 'logout',
};

const loginActions = createActions({
  [LOGIN_ACTION.LOGIN]: (appUser: IAppUser) => appUser,
  [LOGIN_ACTION.LOGOUT]: () => null,
});

export default loginActions;
