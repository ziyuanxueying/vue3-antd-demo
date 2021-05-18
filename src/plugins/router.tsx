import { pathToRegexp, Key, TokensToRegexpOptions } from 'path-to-regexp';
import loadable from '@loadable/component';
import { Spin } from 'antd';

// #region matchPath
const cache: any = {};
const cacheLimit = 10000;
let cacheCount = 0;

/**
 * 路径转正则表达
 * @param path 路径
 * @param options 参数
 * @returns 参数对象
 */
function compilePath(
  path: string,
  options: TokensToRegexpOptions
): { regexp: RegExp; keys: Key[] } {
  const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
  const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

  if (pathCache[path]) return pathCache[path];

  const keys: Key[] = [];
  const regexp = pathToRegexp(path, keys, options);
  const result = { regexp, keys };

  if (cacheCount < cacheLimit) {
    pathCache[path] = result;
    cacheCount++;
  }

  return result;
}

/**
 * Public API for matching a URL pathname to a path.
 * @param {string} pathname location.pathname(URL pathname)
 * @param {array<object>} paths paths to match
 * @return {object} matched path
 */
export function matchPath(pathname: string, paths: [any]): object {
  return paths.reduce(
    (matched, { path, exact = false, strict = false, sensitive = false }) => {
      if (!path && path !== '') return null;
      if (matched) return matched;

      const { regexp, keys } = compilePath(path, {
        end: exact,
        strict,
        sensitive,
      });
      const match = regexp.exec(pathname);

      if (!match) return null;

      const [url, ...values] = match;
      const isExact = pathname === url;

      if (exact && !isExact) return null;

      return {
        path, // the path used to match
        url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
        isExact, // whether or not we matched exactly
        params: keys.reduce((memo: any, key, index: number) => {
          memo[key.name] = values[index];
          return memo;
        }, {}),
      };
    },
    null
  );
}
// #endregion

// #region router
const options = {
  fallback: <Spin size="large" />,
};
/**
 * 所有路由组件前端定义 导航以及权限后台获取
 */
export const routes = [
  // {
  //   link: '/login',
  //   key: 'Login',
  //   iconType: 'profile',
  //   text: 'login',
  //   exact: true,
  //   component: loadable(() => import('../pages/login'), options),
  // },
  {
    link: '/',
    key: 'Home',
    iconType: 'home',
    text: 'home',
    exact: false,
    component: loadable(() => import('../pages/home'), options),
  },
];

/**
 * 视图导航，根据权限获取 导航与菜单不共用数据，独立存在
 */
export const viewRouter = [
  {
    link: 'app-user/list',
    key: 'AppUserList',
    iconType: 'home',
    text: 'AppUserList',
    exact: true,
    component: loadable(() => import('../views/app-user/list'), options),
  },
  {
    link: 'app-user/',
    key: 'AppUserAdd',
    iconType: 'home',
    text: 'AppUserAdd',
    exact: true,
    component: loadable(() => import('../views/app-user/item'), options),
  },
  {
    link: 'app-user/:id',
    key: 'AppUserEdit',
    iconType: 'home',
    text: 'AppUserEdit',
    exact: true,
    component: loadable(() => import('../views/app-user/item'), options),
  },
  {
    link: 'role/list',
    key: 'RoleList',
    iconType: 'home',
    text: 'RoleList',
    exact: true,
    component: loadable(() => import('../views/role/list'), options),
  },
  {
    link: 'role/',
    key: 'RoleAdd',
    iconType: 'home',
    text: 'RoleAdd',
    exact: true,
    component: loadable(() => import('../views/role/item'), options),
  },
  {
    link: 'role/:id',
    key: 'RoleEdit',
    iconType: 'home',
    text: 'RoleEdit',
    exact: true,
    component: loadable(() => import('../views/role/item'), options),
  },
  {
    link: 'role-group/list',
    key: 'RoleGroupList',
    iconType: 'home',
    text: 'RoleGroupList',
    exact: true,
    component: loadable(() => import('../views/role-group/list'), options),
  },
  {
    link: 'role-group/',
    key: 'RoleGroupAdd',
    iconType: 'home',
    text: 'RoleGroupAdd',
    exact: true,
    component: loadable(() => import('../views/role-group/item'), options),
  },
  {
    link: 'role-group/:id',
    key: 'RoleGroupEdit',
    iconType: 'home',
    text: 'RoleGroupEdit',
    exact: true,
    component: loadable(() => import('../views/role-group/item'), options),
  },
  {
    link: 'router/list',
    key: 'RouterList',
    iconType: 'home',
    text: 'RouterList',
    exact: true,
    component: loadable(() => import('../views/router/list'), options),
  },
  {
    link: 'router/',
    key: 'RouterAdd',
    iconType: 'home',
    text: 'RouterAdd',
    exact: true,
    component: loadable(() => import('../views/router/item'), options),
  },
  {
    link: 'router/:id',
    key: 'RouterEdit',
    iconType: 'home',
    text: 'RouterEdit',
    exact: true,
    component: loadable(() => import('../views/router/item'), options),
  },
];
// #endregion

export default viewRouter;
