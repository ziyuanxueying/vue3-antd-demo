# shell

```shell
yarn create react-app xxx --template typescript

yarn add antd -S

yarn add prettier -D

yarn add eslint-config-prettier eslint-plugin-prettier -D

# 配置默认格式化方式 prettier code formatter
```

## 编码规范

- 文件名全小写中横线分词
- .d.ts 位置于 src/types
- 其他 type 采用 .type.ts 命名与文件同目录
- 优先使用 interface 》 type
- redux 采用 redux-actions+immer

```ts
import { LOGIN_ACTION } from '../action/login';
import { Action, handleActions as createReducers } from 'redux-actions';
import { IAppUser } from 'pages/login.type';
import { produce } from 'immer';
import { Maybe } from 'graphql/jsutils/Maybe';

const defaultState = {
  appUser: undefined as Maybe<IAppUser>,
};

export default createReducers(
  {
    [LOGIN_ACTION.LOGIN]: produce(
      (draft: typeof defaultState, { payload }: Action<Maybe<IAppUser>>) => {
        draft.appUser = payload;
      }
    ),
    // 异常处理
    [LOGIN_ACTION.LOGOUT]: {
      next(state: typeof defaultState) {
        return produce((draft: typeof defaultState) => {
          draft.appUser = undefined;
        })(state);
      },
      throw(state: typeof defaultState) {
        return state;
      },
    },
  },
  defaultState
);
```

- redux 组件方案如下

```tsx
import { connect, ConnectedProps } from 'react-redux';
import { Button } from 'antd';
import { RootState } from 'redux/store';
import actions, { LOGIN_ACTION } from 'redux/action/login';

const mapState = (state: RootState) => ({
  appUser: state.login.appUser,
});

// mapDispatch 必须声明
const mapDispatch = {
  onLogin: actions[LOGIN_ACTION.LOGIN],
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const List = (props: PropsFromRedux) => {
  return (
    <div>
      {JSON.stringify(props.appUser)}
      <Button onClick={() => props.onLogin({ id: '1', userName: '123' })}>
        修改appUser
      </Button>
    </div>
  );
};

export default connector(List);
```

- graphql 采用 apollo client 方案
- ajax 采用 cross_fetch
- useState 改用 useImmer
- graphql-code-generator

```url
https://graphql-code-generator.com/docs/getting-started/config-field
```
plugins
```yml
overwrite: true
schema: 'http://localhost:8025/graphql?userId=333'
# 通配client操作
documents: 'src/**/*.graphql'
generates:
  src/generator/auth-center.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
  # 弃用方案 采用完整生成方式
  # src/generator/auth-center.operation.tsx:
  #   plugins:
  #     - 'typescript-react-apollo'
  # 弃用方案 采用完整生成方式
  # src/generator/auth-center.operation.ts:
  #   plugins:
  #     - 'typescript-document-nodes'
config:
  immutableTypes: true

```

- 不可变数据方案：immer
- 属性需要显式声明 用 ```Maybe<T>``` 隐式 用 ```?```
- 根据实际情况处理 apollo useQuery.fetchPolicy

```ts
// default cache-first
// cache-and-network 
// Apollo Client对缓存和GraphQL服务器执行完整查询。如果服务器端查询的结果修改了缓存的字段，则查询将自动更新。

// 提供快速响应，同时还有助于使缓存的数据与服务器数据保持一致。

```
