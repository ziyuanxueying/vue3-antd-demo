import { FC, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, RobotOutlined, LinkOutlined } from '@ant-design/icons';
import './home.less';
import {
  Route,
  useRouteMatch,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom';
import { viewRouter } from '../plugins/router';
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';

export interface IMenuProperty {
  icon?: JSX.Element;
  key: string;
  link: string;
  text?: string;
  subChild?: IMenuProperty[];
}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Home: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const match = useRouteMatch();
  const { t } = useTranslation();

  // 加载导航 后端数据返回
  const menuList = [
    {
      icon: <UserOutlined />,
      key: 'AppUser',
      link: '/app-user',
      subChild: [
        {
          icon: <UserOutlined />,
          key: 'AppUserList',
          link: '/list',
        },
        {
          icon: <UserOutlined />,
          key: 'AppUserAdd',
          link: '/',
        },
      ],
    },
    {
      icon: <RobotOutlined />,
      key: 'Role',
      link: '/role',
      subChild: [
        {
          icon: <RobotOutlined />,
          key: 'RoleList',
          link: '/list',
        },
        {
          icon: <RobotOutlined />,
          key: 'RoleAdd',
          link: '/',
        },
      ],
    },
    {
      icon: <RobotOutlined />,
      key: 'RoleGroup',
      link: '/role-group',
      subChild: [
        {
          icon: <RobotOutlined />,
          key: 'RoleGroupList',
          link: '/list',
        },
        {
          icon: <RobotOutlined />,
          key: 'RoleGroupAdd',
          link: '/',
        },
      ],
    },
    {
      icon: <LinkOutlined />,
      key: 'Router',
      link: '/router',
      subChild: [
        {
          icon: <LinkOutlined />,
          key: 'RouterList',
          link: '/list',
        },
        {
          icon: <LinkOutlined />,
          key: 'RouterAdd',
          link: '/',
        },
      ],
    },
  ];

  const breadcrumbNameMap = {
    '/app-user': {
      key: 'AppUser',
      notLink: true,
      '/list': {
        key: 'AppUserList',
      },
      '/': {
        key: 'AppUserAdd',
      },
    },
    '/role': {
      key: 'Role',
      notLink: true,
      '/list': {
        key: 'RoleList',
      },
      '/': {
        key: 'RoleAdd',
      },
    },
    '/role-group': {
      key: 'RoleGroup',
      notLink: true,
      '/list': {
        key: 'RoleGroupList',
      },
      '/': {
        key: 'RoleGroupAdd',
      },
    },
    '/router': {
      key: 'Router',
      notLink: true,
      '/list': {
        key: 'RouterList',
      },
      '/': {
        key: 'RouterAdd',
      },
    },
  };

  /**
   * 导航控件
   * @param menuList
   * @param parentMatch
   * @returns
   */
  const menuControl = (menuList: IMenuProperty[], parentMatch: string = '') => {
    return menuList.map((menu) => {
      if (menu.subChild) {
        return (
          <SubMenu
            key={menu.key}
            icon={menu.icon}
            title={t(menu.text || menu.key)}
          >
            {menuControl(menu.subChild, `${parentMatch}${menu.link}`)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={menu.key}>
          <Link to={`${parentMatch}${menu.link}`}>
            {t(menu.text || menu.key)}
          </Link>
        </Menu.Item>
      );
    });
  };

  /**
   * 爆米花导航
   */
  const BreadControl = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/');
    let parentItem: any = undefined;
    let url = '';
    const items = pathSnippets
      .map((pathItem, index) => {
        url = `${url}/${pathItem}`.replaceAll('//', '/');
        parentItem = get(parentItem || breadcrumbNameMap, `/${pathItem}`);
        if (!parentItem && !pathItem) {
          return undefined;
        }
        return (
          <Breadcrumb.Item key={url}>
            {parentItem?.notLink ? (
              t(parentItem?.key || pathItem)
            ) : (
              <Link to={url}>{t(parentItem?.key || pathItem)}</Link>
            )}
          </Breadcrumb.Item>
        );
      })
      .filter((p) => p) as JSX.Element[];
    const extraBreadcrumbItems = new Set(items);
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">{t('Home')}</Link>
      </Breadcrumb.Item>,
    ].concat(Array.from(extraBreadcrumbItems));
    return (
      <Breadcrumb style={{ margin: '16px' }}>{breadcrumbItems}</Breadcrumb>
    );
  });

  return (
    <Layout style={{ minHeight: '100vh' }} className="App">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {menuControl(menuList)}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <BreadControl />
          <div className="site-layout-background center-view">
            <Switch>
              {viewRouter.map((route) => (
                <Route
                  exact={route.exact}
                  key={route.key}
                  path={`${match.path}${route.link}`}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
