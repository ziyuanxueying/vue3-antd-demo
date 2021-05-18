import { ConfigProvider } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from './plugins/router';
import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import './App.less';
import { useTranslation } from 'react-i18next';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { FC } from 'react';
import Login from 'pages/login';
import { PersistGate } from 'redux-persist/lib/integration/react';

const App: FC = () => {
  let { i18n } = useTranslation();

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL,
    cache: new InMemoryCache(),
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <ConfigProvider
            csp={{ nonce: 'YourNonceCode' }}
            locale={i18n.language === 'zh-CN' ? zhCN : enUS}
          >
            <Router>
              <Switch>
                <Route path="/login" component={Login} exact={true} />
                {routes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.link}
                    exact={route.exact}
                    render={(propsRouter) =>
                      store.getState()?.login?.appUser ? (
                        <route.component />
                      ) : (
                        <Redirect
                          to={{
                            pathname: '/login',
                            state: { from: propsRouter.location },
                          }}
                        />
                      )
                    }
                  />
                ))}
                <Redirect to="/" />
              </Switch>
            </Router>
          </ConfigProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
