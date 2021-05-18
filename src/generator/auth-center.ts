export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Query = {
  readonly __typename?: 'Query';
  /** 终端用户 总行数 */
  readonly appUserCount?: Maybe<Scalars['Int']>;
  /** 终端用户 分页查询 */
  readonly appUserList?: Maybe<AppUserList>;
  /** 终端用户  id 获取 */
  readonly appUser?: Maybe<AppUser>;
  /** 终端用户 有条件返回 */
  readonly appUserAll?: Maybe<ReadonlyArray<Maybe<AppUser>>>;
  /** 用户角色关系 总行数 */
  readonly appUserRoleCount?: Maybe<Scalars['Int']>;
  /** 用户角色关系 分页查询 */
  readonly appUserRoleList?: Maybe<AppUserRoleList>;
  /** 用户角色关系  id 获取 */
  readonly appUserRole?: Maybe<AppUserRole>;
  /** 用户角色关系 有条件返回 */
  readonly appUserRoleAll?: Maybe<ReadonlyArray<Maybe<AppUserRole>>>;
  /** 业务编码规则 总行数 */
  readonly businessRuleCount?: Maybe<Scalars['Int']>;
  /** 业务编码规则 分页查询 */
  readonly businessRuleList?: Maybe<BusinessRuleList>;
  /** 业务编码规则  id 获取 */
  readonly businessRule?: Maybe<BusinessRule>;
  /** 业务编码规则 有条件返回 */
  readonly businessRuleAll?: Maybe<ReadonlyArray<Maybe<BusinessRule>>>;
  /** 业务角色关系 总行数 */
  readonly businessSchemaCount?: Maybe<Scalars['Int']>;
  /** 业务角色关系 分页查询 */
  readonly businessSchemaList?: Maybe<BusinessSchemaList>;
  /** 业务角色关系  id 获取 */
  readonly businessSchema?: Maybe<BusinessSchema>;
  /** 业务角色关系 有条件返回 */
  readonly businessSchemaAll?: Maybe<ReadonlyArray<Maybe<BusinessSchema>>>;
  /** 单表聚合查询 */
  readonly aggregate?: Maybe<Scalars['JSONObject']>;
  /** findAll聚合 */
  readonly findAll?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 组件 总行数 */
  readonly componentCount?: Maybe<Scalars['Int']>;
  /** 组件 分页查询 */
  readonly componentList?: Maybe<ComponentList>;
  /** 组件  id 获取 */
  readonly component?: Maybe<Component>;
  /** 组件 有条件返回 */
  readonly componentAll?: Maybe<ReadonlyArray<Maybe<Component>>>;
  /** 组件内控件 总行数 */
  readonly componentControlerCount?: Maybe<Scalars['Int']>;
  /** 组件内控件 分页查询 */
  readonly componentControlerList?: Maybe<ComponentControlerList>;
  /** 组件内控件  id 获取 */
  readonly componentControler?: Maybe<ComponentControler>;
  /** 组件内控件 有条件返回 */
  readonly componentControlerAll?: Maybe<
    ReadonlyArray<Maybe<ComponentControler>>
  >;
  /** 控件角色 总行数 */
  readonly componentControlerRoleCount?: Maybe<Scalars['Int']>;
  /** 控件角色 分页查询 */
  readonly componentControlerRoleList?: Maybe<ComponentControlerRoleList>;
  /** 控件角色  id 获取 */
  readonly componentControlerRole?: Maybe<ComponentControlerRole>;
  /** 控件角色 有条件返回 */
  readonly componentControlerRoleAll?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerRole>>
  >;
  /** 角色 总行数 */
  readonly roleCount?: Maybe<Scalars['Int']>;
  /** 角色 分页查询 */
  readonly roleList?: Maybe<RoleList>;
  /** 角色  id 获取 */
  readonly role?: Maybe<Role>;
  /** 角色 有条件返回 */
  readonly roleAll?: Maybe<ReadonlyArray<Maybe<Role>>>;
  /** 角色组 总行数 */
  readonly roleGroupCount?: Maybe<Scalars['Int']>;
  /** 角色组 分页查询 */
  readonly roleGroupList?: Maybe<RoleGroupList>;
  /** 角色组  id 获取 */
  readonly roleGroup?: Maybe<RoleGroup>;
  /** 角色组 有条件返回 */
  readonly roleGroupAll?: Maybe<ReadonlyArray<Maybe<RoleGroup>>>;
  /** 角色组明细 总行数 */
  readonly roleGroupItemCount?: Maybe<Scalars['Int']>;
  /** 角色组明细 分页查询 */
  readonly roleGroupItemList?: Maybe<RoleGroupItemList>;
  /** 角色组明细  id 获取 */
  readonly roleGroupItem?: Maybe<RoleGroupItem>;
  /** 角色组明细 有条件返回 */
  readonly roleGroupItemAll?: Maybe<ReadonlyArray<Maybe<RoleGroupItem>>>;
  /** 前端路由 总行数 */
  readonly routerCount?: Maybe<Scalars['Int']>;
  /** 前端路由 分页查询 */
  readonly routerList?: Maybe<RouterList>;
  /** 前端路由  id 获取 */
  readonly router?: Maybe<Router>;
  /** 前端路由 有条件返回 */
  readonly routerAll?: Maybe<ReadonlyArray<Maybe<Router>>>;
  /** 路由角色关系 总行数 */
  readonly routerRoleCount?: Maybe<Scalars['Int']>;
  /** 路由角色关系 分页查询 */
  readonly routerRoleList?: Maybe<RouterRoleList>;
  /** 路由角色关系  id 获取 */
  readonly routerRole?: Maybe<RouterRole>;
  /** 路由角色关系 有条件返回 */
  readonly routerRoleAll?: Maybe<ReadonlyArray<Maybe<RouterRole>>>;
  /** graphql-schema-model 总行数 */
  readonly schemaModelCount?: Maybe<Scalars['Int']>;
  /** graphql-schema-model 分页查询 */
  readonly schemaModelList?: Maybe<SchemaModelList>;
  /** graphql-schema-model  id 获取 */
  readonly schemaModel?: Maybe<SchemaModel>;
  /** graphql-schema-model 有条件返回 */
  readonly schemaModelAll?: Maybe<ReadonlyArray<Maybe<SchemaModel>>>;
  /** model角色关系表 总行数 */
  readonly schemaModelRoleCount?: Maybe<Scalars['Int']>;
  /** model角色关系表 分页查询 */
  readonly schemaModelRoleList?: Maybe<SchemaModelRoleList>;
  /** model角色关系表  id 获取 */
  readonly schemaModelRole?: Maybe<SchemaModelRole>;
  /** model角色关系表 有条件返回 */
  readonly schemaModelRoleAll?: Maybe<ReadonlyArray<Maybe<SchemaModelRole>>>;
  /** serverapi 总行数 */
  readonly webapiCount?: Maybe<Scalars['Int']>;
  /** serverapi 分页查询 */
  readonly webapiList?: Maybe<WebapiList>;
  /** serverapi  id 获取 */
  readonly webapi?: Maybe<Webapi>;
  /** serverapi 有条件返回 */
  readonly webapiAll?: Maybe<ReadonlyArray<Maybe<Webapi>>>;
  /** 总行数 */
  readonly webapiRoleCount?: Maybe<Scalars['Int']>;
  /** 分页查询 */
  readonly webapiRoleList?: Maybe<WebapiRoleList>;
  /** id 获取 */
  readonly webapiRole?: Maybe<WebapiRole>;
  /** 有条件返回 */
  readonly webapiRoleAll?: Maybe<ReadonlyArray<Maybe<WebapiRole>>>;
};

export type QueryAppUserCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserArgs = {
  id: Scalars['ID'];
};

export type QueryAppUserAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserRoleArgs = {
  id: Scalars['ID'];
};

export type QueryAppUserRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBusinessRuleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBusinessRuleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBusinessRuleArgs = {
  id: Scalars['ID'];
};

export type QueryBusinessRuleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBusinessSchemaCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBusinessSchemaListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBusinessSchemaArgs = {
  id: Scalars['ID'];
};

export type QueryBusinessSchemaAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAggregateArgs = {
  modelName: Scalars['String'];
  field: Scalars['String'];
  aggregateFunction: AggregateFunctionEnum;
  options?: Maybe<AggregateOptions>;
};

export type QueryFindAllArgs = {
  modelName: Scalars['String'];
  options?: Maybe<FindAllOptions>;
};

export type QueryComponentCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentArgs = {
  id: Scalars['ID'];
};

export type QueryComponentAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentControlerCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentControlerListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentControlerArgs = {
  id: Scalars['ID'];
};

export type QueryComponentControlerAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentControlerRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentControlerRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryComponentControlerRoleArgs = {
  id: Scalars['ID'];
};

export type QueryComponentControlerRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
};

export type QueryRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleGroupCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleGroupListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleGroupArgs = {
  id: Scalars['ID'];
};

export type QueryRoleGroupAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleGroupItemCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleGroupItemListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRoleGroupItemArgs = {
  id: Scalars['ID'];
};

export type QueryRoleGroupItemAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRouterCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRouterListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRouterArgs = {
  id: Scalars['ID'];
};

export type QueryRouterAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRouterRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRouterRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryRouterRoleArgs = {
  id: Scalars['ID'];
};

export type QueryRouterRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySchemaModelCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySchemaModelListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySchemaModelArgs = {
  id: Scalars['ID'];
};

export type QuerySchemaModelAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySchemaModelRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySchemaModelRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySchemaModelRoleArgs = {
  id: Scalars['ID'];
};

export type QuerySchemaModelRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryWebapiCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryWebapiListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryWebapiArgs = {
  id: Scalars['ID'];
};

export type QueryWebapiAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryWebapiRoleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryWebapiRoleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryWebapiRoleArgs = {
  id: Scalars['ID'];
};

export type QueryWebapiRoleAllArgs = {
  param?: Maybe<QueryListParam>;
};

/** 查询参数 */
export type QueryListParam = {
  readonly where?: Maybe<Scalars['JSONObject']>;
  readonly order?: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['String']>>>>
  >;
  readonly limit?: Maybe<Scalars['Int']>;
  readonly offset?: Maybe<Scalars['Int']>;
};

/** 终端用户 分页查询返回 */
export type AppUserList = {
  readonly __typename?: 'AppUserList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUser>>>;
};

/** 终端用户 */
export type AppUser = {
  readonly __typename?: 'AppUser';
  readonly id?: Maybe<Scalars['ID']>;
  /** 凭证 */
  readonly accessToken?: Maybe<Scalars['String']>;
  /** 用户状态N停用Y启用 */
  readonly appUserStatus?: Maybe<Scalars['String']>;
  /** 用户类型[ordinary 普通用户,recovery 回收人员,system 系统用户,checkuser 检查人员] */
  readonly appUserType?: Maybe<Scalars['String']>;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** wxmini-用户所属企业的corpid */
  readonly corpid?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 系统默认头像 */
  readonly defaultAvatar?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 身份证头像 */
  readonly idHead?: Maybe<Scalars['String']>;
  /** 身份证国徽 */
  readonly idNational?: Maybe<Scalars['String']>;
  /** 登陆code（最后一次） */
  readonly jsCode?: Maybe<Scalars['String']>;
  /** 用户最后心跳时间 */
  readonly lastHeartbeatTime?: Maybe<Scalars['DateTime']>;
  /** 最后登陆时间 */
  readonly lastLoginTime?: Maybe<Scalars['DateTime']>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars['String']>;
  /** wxmini-企业微信的jscode2session返回的是userid，而微信返回的是openid */
  readonly openid?: Maybe<Scalars['String']>;
  /** 密码（小程序不需要） */
  readonly password?: Maybe<Scalars['String']>;
  /** 注册手机号 */
  readonly phone?: Maybe<Scalars['String']>;
  /** 用户真实姓名 */
  readonly realName?: Maybe<Scalars['String']>;
  /** 注册app */
  readonly registerApp?: Maybe<Scalars['String']>;
  /** 注册时间 */
  readonly registerTime?: Maybe<Scalars['DateTime']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 用户最后颁发token */
  readonly token?: Maybe<Scalars['String']>;
  /** wxmini-用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回 */
  readonly unionid?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 用户性别[男 m 男，女 w 女] */
  readonly userGender?: Maybe<EAppUserUserGender>;
  /** 用户名登陆用 */
  readonly userName?: Maybe<Scalars['String']>;
  readonly appUserRoleAppUserId?: Maybe<ReadonlyArray<Maybe<AppUserRole>>>;
};

/** 终端用户 */
export type AppUserAppUserRoleAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

export enum EAppUserUserGender {
  M = 'm',
  W = 'w',
}

/** 用户角色关系 */
export type AppUserRole = {
  readonly __typename?: 'AppUserRole';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 用户 */
  readonly appUserId?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** role、roleGroup */
  readonly roleType?: Maybe<Scalars['String']>;
  /** 角色id、角色组id */
  readonly typeId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** role roleGroup */
  readonly typeIdModel?: Maybe<TypeIdModel>;
};

export type TypeIdModel = Role | RoleGroup;

/** 角色 */
export type Role = {
  readonly __typename?: 'Role';
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色编码 */
  readonly roleCode?: Maybe<Scalars['String']>;
  /** 角色名称 */
  readonly roleName?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 权重 */
  readonly weight?: Maybe<Scalars['Float']>;
  readonly businessSchemaRoleId?: Maybe<ReadonlyArray<Maybe<BusinessSchema>>>;
  readonly componentControlerRoleRoleId?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerRole>>
  >;
  readonly roleGroupItemRoleId?: Maybe<ReadonlyArray<Maybe<RoleGroupItem>>>;
  readonly routerRoleRoleId?: Maybe<ReadonlyArray<Maybe<RouterRole>>>;
  readonly schemaModelRoleRoleId?: Maybe<ReadonlyArray<Maybe<SchemaModelRole>>>;
  readonly webapiRoleRoleId?: Maybe<ReadonlyArray<Maybe<WebapiRole>>>;
  readonly appUserRoleTypeId?: Maybe<ReadonlyArray<Maybe<AppUserRole>>>;
};

/** 角色 */
export type RoleBusinessSchemaRoleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 角色 */
export type RoleComponentControlerRoleRoleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 角色 */
export type RoleRoleGroupItemRoleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 角色 */
export type RoleRouterRoleRoleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 角色 */
export type RoleSchemaModelRoleRoleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 角色 */
export type RoleWebapiRoleRoleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 角色 */
export type RoleAppUserRoleTypeIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 业务角色关系 */
export type BusinessSchema = {
  readonly __typename?: 'BusinessSchema';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly businessRuleId?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 属性json */
  readonly propertyJson?: Maybe<Scalars['JSONObject']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 对象属性id */
  readonly schemaModelId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 默认值json */
  readonly valueDefault?: Maybe<Scalars['JSONObject']>;
  readonly roleIdObj?: Maybe<Role>;
  readonly businessRuleIdObj?: Maybe<BusinessRule>;
  readonly schemaModelIdObj?: Maybe<SchemaModel>;
};

/** 业务编码规则 */
export type BusinessRule = {
  readonly __typename?: 'BusinessRule';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 规则编码[unique] */
  readonly ruleCode?: Maybe<Scalars['String']>;
  /** 规则名称[unique] */
  readonly ruleName?: Maybe<Scalars['String']>;
  /** 规则 */
  readonly ruleValue?: Maybe<Scalars['JSONObject']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly businessSchemaBusinessRuleId?: Maybe<
    ReadonlyArray<Maybe<BusinessSchema>>
  >;
};

/** 业务编码规则 */
export type BusinessRuleBusinessSchemaBusinessRuleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** graphql-schema-model */
export type SchemaModel = {
  readonly __typename?: 'SchemaModel';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 编码[unique] */
  readonly code?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly comment?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 索引json */
  readonly indexJson?: Maybe<Scalars['JSONObject']>;
  /** 名称[unique] */
  readonly name?: Maybe<Scalars['String']>;
  /** 父级别 */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 属性json */
  readonly propertyJson?: Maybe<Scalars['JSONObject']>;
  /** 属性类型 */
  readonly propertyType?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** [model model 对象,property property 属性] */
  readonly schemaType?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly businessSchemaSchemaModelId?: Maybe<
    ReadonlyArray<Maybe<BusinessSchema>>
  >;
  readonly parentIdObj?: Maybe<SchemaModel>;
  readonly schemaModelRoleSchemaModelId?: Maybe<
    ReadonlyArray<Maybe<SchemaModelRole>>
  >;
};

/** graphql-schema-model */
export type SchemaModelBusinessSchemaSchemaModelIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** graphql-schema-model */
export type SchemaModelSchemaModelRoleSchemaModelIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** model角色关系表 */
export type SchemaModelRole = {
  readonly __typename?: 'SchemaModelRole';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 业务权限规则编码 */
  readonly businessValue?: Maybe<Scalars['JSONObject']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 权限[onlyOne onlyOne 只看自己，all all 可见可操作，businessCode businessCode 权限编码] */
  readonly dataState?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 对象id */
  readonly schemaModelId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly roleIdObj?: Maybe<Role>;
  readonly schemaModelIdObj?: Maybe<SchemaModel>;
};

/** 控件角色 */
export type ComponentControlerRole = {
  readonly __typename?: 'ComponentControlerRole';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 控件id */
  readonly componentControlerId?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色id */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly roleIdObj?: Maybe<Role>;
  readonly componentControlerIdObj?: Maybe<ComponentControler>;
};

/** 组件内控件 */
export type ComponentControler = {
  readonly __typename?: 'ComponentControler';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 组件id */
  readonly componentId?: Maybe<Scalars['String']>;
  /** 控件名称[unique] */
  readonly controlCode?: Maybe<Scalars['String']>;
  /** 控件唯一约束key[unique] */
  readonly controlKey?: Maybe<Scalars['String']>;
  /** 控件名称[unique] */
  readonly controlName?: Maybe<Scalars['String']>;
  /** 控件属性 */
  readonly controlProperty?: Maybe<Scalars['JSONObject']>;
  /** 控件类型 */
  readonly controlType?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 组件路径 */
  readonly filePath?: Maybe<Scalars['String']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<ComponentControler>;
  readonly componentIdObj?: Maybe<Component>;
  readonly componentControlerRoleComponentControlerId?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerRole>>
  >;
};

/** 组件内控件 */
export type ComponentControlerComponentControlerRoleComponentControlerIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 组件 */
export type Component = {
  readonly __typename?: 'Component';
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 组件名称[unique] */
  readonly componentCode?: Maybe<Scalars['String']>;
  /** 组件唯一约束key[unique] */
  readonly componentKey?: Maybe<Scalars['String']>;
  /** 组件名称[unique] */
  readonly componentName?: Maybe<Scalars['String']>;
  /** 控件属性 */
  readonly controlProperty?: Maybe<Scalars['JSONObject']>;
  /** 控件类型 */
  readonly controlType?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 组件路径 */
  readonly filePath?: Maybe<Scalars['String']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly componentControlerComponentId?: Maybe<
    ReadonlyArray<Maybe<ComponentControler>>
  >;
  readonly parentIdObj?: Maybe<Component>;
  readonly routerComponentId?: Maybe<ReadonlyArray<Maybe<Router>>>;
};

/** 组件 */
export type ComponentComponentControlerComponentIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 组件 */
export type ComponentRouterComponentIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 前端路由 */
export type Router = {
  readonly __typename?: 'Router';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 组件id */
  readonly componentId?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 路由编码 */
  readonly routerCode?: Maybe<Scalars['String']>;
  /** 路由名称 */
  readonly routerName?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<Router>;
  readonly componentIdObj?: Maybe<Component>;
  readonly routerRoleRouterId?: Maybe<ReadonlyArray<Maybe<RouterRole>>>;
};

/** 前端路由 */
export type RouterRouterRoleRouterIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 路由角色关系 */
export type RouterRole = {
  readonly __typename?: 'RouterRole';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 路由id */
  readonly routerId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly roleIdObj?: Maybe<Role>;
  readonly routerIdObj?: Maybe<Router>;
};

/** 角色组明细 */
export type RoleGroupItem = {
  readonly __typename?: 'RoleGroupItem';
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色组id */
  readonly roleGroupId?: Maybe<Scalars['String']>;
  /** 角色id */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 权重 */
  readonly weight?: Maybe<Scalars['Float']>;
  readonly roleIdObj?: Maybe<Role>;
  readonly roleGroupIdObj?: Maybe<RoleGroup>;
};

/** 角色组 */
export type RoleGroup = {
  readonly __typename?: 'RoleGroup';
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 组编号[unique] */
  readonly groupCode?: Maybe<Scalars['String']>;
  /** 组名[unique] */
  readonly groupName?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly roleGroupItemRoleGroupId?: Maybe<
    ReadonlyArray<Maybe<RoleGroupItem>>
  >;
};

/** 角色组 */
export type RoleGroupRoleGroupItemRoleGroupIdArgs = {
  param?: Maybe<QueryListParam>;
};

export type WebapiRole = {
  readonly __typename?: 'WebapiRole';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 对象id */
  readonly webapiId?: Maybe<Scalars['String']>;
  readonly roleIdObj?: Maybe<Role>;
  readonly webapiIdObj?: Maybe<Webapi>;
};

/** serverapi */
export type Webapi = {
  readonly __typename?: 'Webapi';
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 请求权限 */
  readonly authApiState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 路由编码[unique] */
  readonly code?: Maybe<Scalars['String']>;
  /** 说明 */
  readonly comment?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 请求方法 */
  readonly methodType?: Maybe<Scalars['String']>;
  /** 路由参数 */
  readonly params?: Maybe<Scalars['JSONObject']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 路由[unique] */
  readonly path?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly parentIdObj?: Maybe<Webapi>;
  readonly webapiRoleWebapiId?: Maybe<ReadonlyArray<Maybe<WebapiRole>>>;
};

/** serverapi */
export type WebapiWebapiRoleWebapiIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 用户角色关系 分页查询返回 */
export type AppUserRoleList = {
  readonly __typename?: 'AppUserRoleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserRole>>>;
};

/** 业务编码规则 分页查询返回 */
export type BusinessRuleList = {
  readonly __typename?: 'BusinessRuleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<BusinessRule>>>;
};

/** 业务角色关系 分页查询返回 */
export type BusinessSchemaList = {
  readonly __typename?: 'BusinessSchemaList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<BusinessSchema>>>;
};

/** 聚合函数列表 */
export enum AggregateFunctionEnum {
  /** sum(col_name) */
  Sum = 'SUM',
  /** max(col_name) */
  Max = 'MAX',
  /** min(col_name) */
  Min = 'MIN',
  /** count(col_name) */
  Count = 'COUNT',
  /** croup_concat([DISTINCT] expr [,expr ...][ORDER BY {unsigned_integer | col_name | formula} [ASC | DESC] [,col ...]][SEPARATOR str_val]) */
  GroupConcat = 'GROUP_CONCAT',
  /** concat(col_name,col_name,...) */
  Concat = 'CONCAT',
  /** concat_ws(separator,col_name,col_name,…) */
  ConcatWs = 'CONCAT_WS',
  /** avg(col_name) */
  Avg = 'AVG',
  /** JSON_ARRAYAGG(col or expr) */
  JsonArrayagg = 'JSON_ARRAYAGG',
  /** JSON_OBJECTAGG(key,value) */
  JsonObjectagg = 'JSON_OBJECTAGG',
}

/** 查询选项 */
export type AggregateOptions = {
  /** 查询属性 */
  readonly where?: Maybe<Scalars['JSONObject']>;
  /** 结果类型。如field是模型中的字段，默认为字段的类型，其它情况为默认为 float */
  readonly dataType?: Maybe<Scalars['String']>;
  /** 为字段使用DISTINCT聚合查询 */
  readonly distinct?: Maybe<Scalars['Boolean']>;
  /** 当为true时，第一个aggregateFunction的返回值为dataType指定和返回，如果添加了额外的属性，则由group分句决定。设置plain 为 false 时会返回所有返回行中的所有值 。默认为 true */
  readonly plain?: Maybe<Scalars['Boolean']>;
};

export type FindAllOptions = {
  readonly where?: Maybe<Scalars['JSONObject']>;
  readonly attributes?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly include?: Maybe<ReadonlyArray<Maybe<Include>>>;
  readonly order?: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars['String']>>>>
  >;
  readonly limit?: Maybe<Scalars['Int']>;
  readonly offset?: Maybe<Scalars['Int']>;
  readonly raw?: Maybe<Scalars['Boolean']>;
  readonly having?: Maybe<Scalars['JSONObject']>;
  readonly group?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type Include = {
  readonly model?: Maybe<Scalars['String']>;
  readonly as?: Maybe<Scalars['String']>;
  readonly where?: Maybe<Scalars['JSONObject']>;
  readonly attributes?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly required?: Maybe<Scalars['Boolean']>;
  readonly right?: Maybe<Scalars['Boolean']>;
  readonly limit?: Maybe<Scalars['Int']>;
  readonly include?: Maybe<Include>;
};

/** 组件 分页查询返回 */
export type ComponentList = {
  readonly __typename?: 'ComponentList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<Component>>>;
};

/** 组件内控件 分页查询返回 */
export type ComponentControlerList = {
  readonly __typename?: 'ComponentControlerList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<ComponentControler>>>;
};

/** 控件角色 分页查询返回 */
export type ComponentControlerRoleList = {
  readonly __typename?: 'ComponentControlerRoleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<ComponentControlerRole>>>;
};

/** 角色 分页查询返回 */
export type RoleList = {
  readonly __typename?: 'RoleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<Role>>>;
};

/** 角色组 分页查询返回 */
export type RoleGroupList = {
  readonly __typename?: 'RoleGroupList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<RoleGroup>>>;
};

/** 角色组明细 分页查询返回 */
export type RoleGroupItemList = {
  readonly __typename?: 'RoleGroupItemList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<RoleGroupItem>>>;
};

/** 前端路由 分页查询返回 */
export type RouterList = {
  readonly __typename?: 'RouterList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<Router>>>;
};

/** 路由角色关系 分页查询返回 */
export type RouterRoleList = {
  readonly __typename?: 'RouterRoleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<RouterRole>>>;
};

/** graphql-schema-model 分页查询返回 */
export type SchemaModelList = {
  readonly __typename?: 'SchemaModelList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<SchemaModel>>>;
};

/** model角色关系表 分页查询返回 */
export type SchemaModelRoleList = {
  readonly __typename?: 'SchemaModelRoleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<SchemaModelRole>>>;
};

/** serverapi 分页查询返回 */
export type WebapiList = {
  readonly __typename?: 'WebapiList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<Webapi>>>;
};

/** 分页查询返回 */
export type WebapiRoleList = {
  readonly __typename?: 'WebapiRoleList';
  readonly count: Scalars['Int'];
  readonly list?: Maybe<ReadonlyArray<Maybe<WebapiRole>>>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** 终端用户 新增 or 修改 */
  readonly appUser?: Maybe<Scalars['String']>;
  /** 终端用户 批量 新增 or 修改 */
  readonly appUserBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 终端用户 删除 */
  readonly appUserDestroy?: Maybe<Scalars['String']>;
  /** 终端用户 根据id删除 */
  readonly appUserDestroyById?: Maybe<Scalars['String']>;
  /** 用户角色关系 新增 or 修改 */
  readonly appUserRole?: Maybe<Scalars['String']>;
  /** 用户角色关系 批量 新增 or 修改 */
  readonly appUserRoleBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 用户角色关系 删除 */
  readonly appUserRoleDestroy?: Maybe<Scalars['String']>;
  /** 用户角色关系 根据id删除 */
  readonly appUserRoleDestroyById?: Maybe<Scalars['String']>;
  /** 业务编码规则 新增 or 修改 */
  readonly businessRule?: Maybe<Scalars['String']>;
  /** 业务编码规则 批量 新增 or 修改 */
  readonly businessRuleBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars['JSONObject']>>
  >;
  /** 业务编码规则 删除 */
  readonly businessRuleDestroy?: Maybe<Scalars['String']>;
  /** 业务编码规则 根据id删除 */
  readonly businessRuleDestroyById?: Maybe<Scalars['String']>;
  /** 业务角色关系 新增 or 修改 */
  readonly businessSchema?: Maybe<Scalars['String']>;
  /** 业务角色关系 批量 新增 or 修改 */
  readonly businessSchemaBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars['JSONObject']>>
  >;
  /** 业务角色关系 删除 */
  readonly businessSchemaDestroy?: Maybe<Scalars['String']>;
  /** 业务角色关系 根据id删除 */
  readonly businessSchemaDestroyById?: Maybe<Scalars['String']>;
  /** 组件 新增 or 修改 */
  readonly component?: Maybe<Scalars['String']>;
  /** 组件 批量 新增 or 修改 */
  readonly componentBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 组件 删除 */
  readonly componentDestroy?: Maybe<Scalars['String']>;
  /** 组件 根据id删除 */
  readonly componentDestroyById?: Maybe<Scalars['String']>;
  /** 组件内控件 新增 or 修改 */
  readonly componentControler?: Maybe<Scalars['String']>;
  /** 组件内控件 批量 新增 or 修改 */
  readonly componentControlerBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars['JSONObject']>>
  >;
  /** 组件内控件 删除 */
  readonly componentControlerDestroy?: Maybe<Scalars['String']>;
  /** 组件内控件 根据id删除 */
  readonly componentControlerDestroyById?: Maybe<Scalars['String']>;
  /** 控件角色 新增 or 修改 */
  readonly componentControlerRole?: Maybe<Scalars['String']>;
  /** 控件角色 批量 新增 or 修改 */
  readonly componentControlerRoleBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars['JSONObject']>>
  >;
  /** 控件角色 删除 */
  readonly componentControlerRoleDestroy?: Maybe<Scalars['String']>;
  /** 控件角色 根据id删除 */
  readonly componentControlerRoleDestroyById?: Maybe<Scalars['String']>;
  /** 角色 新增 or 修改 */
  readonly role?: Maybe<Scalars['String']>;
  /** 角色 批量 新增 or 修改 */
  readonly roleBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 角色 删除 */
  readonly roleDestroy?: Maybe<Scalars['String']>;
  /** 角色 根据id删除 */
  readonly roleDestroyById?: Maybe<Scalars['String']>;
  /** 角色组 新增 or 修改 */
  readonly roleGroup?: Maybe<Scalars['String']>;
  /** 角色组 批量 新增 or 修改 */
  readonly roleGroupBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 角色组 删除 */
  readonly roleGroupDestroy?: Maybe<Scalars['String']>;
  /** 角色组 根据id删除 */
  readonly roleGroupDestroyById?: Maybe<Scalars['String']>;
  /** 角色组明细 新增 or 修改 */
  readonly roleGroupItem?: Maybe<Scalars['String']>;
  /** 角色组明细 批量 新增 or 修改 */
  readonly roleGroupItemBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars['JSONObject']>>
  >;
  /** 角色组明细 删除 */
  readonly roleGroupItemDestroy?: Maybe<Scalars['String']>;
  /** 角色组明细 根据id删除 */
  readonly roleGroupItemDestroyById?: Maybe<Scalars['String']>;
  /** 前端路由 新增 or 修改 */
  readonly router?: Maybe<Scalars['String']>;
  /** 前端路由 批量 新增 or 修改 */
  readonly routerBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 前端路由 删除 */
  readonly routerDestroy?: Maybe<Scalars['String']>;
  /** 前端路由 根据id删除 */
  readonly routerDestroyById?: Maybe<Scalars['String']>;
  /** 路由角色关系 新增 or 修改 */
  readonly routerRole?: Maybe<Scalars['String']>;
  /** 路由角色关系 批量 新增 or 修改 */
  readonly routerRoleBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 路由角色关系 删除 */
  readonly routerRoleDestroy?: Maybe<Scalars['String']>;
  /** 路由角色关系 根据id删除 */
  readonly routerRoleDestroyById?: Maybe<Scalars['String']>;
  /** graphql-schema-model 新增 or 修改 */
  readonly schemaModel?: Maybe<Scalars['String']>;
  /** graphql-schema-model 批量 新增 or 修改 */
  readonly schemaModelBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** graphql-schema-model 删除 */
  readonly schemaModelDestroy?: Maybe<Scalars['String']>;
  /** graphql-schema-model 根据id删除 */
  readonly schemaModelDestroyById?: Maybe<Scalars['String']>;
  /** model角色关系表 新增 or 修改 */
  readonly schemaModelRole?: Maybe<Scalars['String']>;
  /** model角色关系表 批量 新增 or 修改 */
  readonly schemaModelRoleBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars['JSONObject']>>
  >;
  /** model角色关系表 删除 */
  readonly schemaModelRoleDestroy?: Maybe<Scalars['String']>;
  /** model角色关系表 根据id删除 */
  readonly schemaModelRoleDestroyById?: Maybe<Scalars['String']>;
  /** serverapi 新增 or 修改 */
  readonly webapi?: Maybe<Scalars['String']>;
  /** serverapi 批量 新增 or 修改 */
  readonly webapiBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** serverapi 删除 */
  readonly webapiDestroy?: Maybe<Scalars['String']>;
  /** serverapi 根据id删除 */
  readonly webapiDestroyById?: Maybe<Scalars['String']>;
  /** 新增 or 修改 */
  readonly webapiRole?: Maybe<Scalars['String']>;
  /** 批量 新增 or 修改 */
  readonly webapiRoleBulk?: Maybe<ReadonlyArray<Maybe<Scalars['JSONObject']>>>;
  /** 删除 */
  readonly webapiRoleDestroy?: Maybe<Scalars['String']>;
  /** 根据id删除 */
  readonly webapiRoleDestroyById?: Maybe<Scalars['String']>;
};

export type MutationAppUserArgs = {
  param: AppUserSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationAppUserBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserSaveIn>>;
};

export type MutationAppUserDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationAppUserDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationAppUserRoleArgs = {
  param: AppUserRoleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationAppUserRoleBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserRoleSaveIn>>;
};

export type MutationAppUserRoleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationAppUserRoleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationBusinessRuleArgs = {
  param: BusinessRuleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationBusinessRuleBulkArgs = {
  param: ReadonlyArray<Maybe<BusinessRuleSaveIn>>;
};

export type MutationBusinessRuleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationBusinessRuleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationBusinessSchemaArgs = {
  param: BusinessSchemaSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationBusinessSchemaBulkArgs = {
  param: ReadonlyArray<Maybe<BusinessSchemaSaveIn>>;
};

export type MutationBusinessSchemaDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationBusinessSchemaDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationComponentArgs = {
  param: ComponentSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationComponentBulkArgs = {
  param: ReadonlyArray<Maybe<ComponentSaveIn>>;
};

export type MutationComponentDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationComponentDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationComponentControlerArgs = {
  param: ComponentControlerSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationComponentControlerBulkArgs = {
  param: ReadonlyArray<Maybe<ComponentControlerSaveIn>>;
};

export type MutationComponentControlerDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationComponentControlerDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationComponentControlerRoleArgs = {
  param: ComponentControlerRoleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationComponentControlerRoleBulkArgs = {
  param: ReadonlyArray<Maybe<ComponentControlerRoleSaveIn>>;
};

export type MutationComponentControlerRoleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationComponentControlerRoleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationRoleArgs = {
  param: RoleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleBulkArgs = {
  param: ReadonlyArray<Maybe<RoleSaveIn>>;
};

export type MutationRoleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationRoleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationRoleGroupArgs = {
  param: RoleGroupSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleGroupBulkArgs = {
  param: ReadonlyArray<Maybe<RoleGroupSaveIn>>;
};

export type MutationRoleGroupDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationRoleGroupDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationRoleGroupItemArgs = {
  param: RoleGroupItemSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleGroupItemBulkArgs = {
  param: ReadonlyArray<Maybe<RoleGroupItemSaveIn>>;
};

export type MutationRoleGroupItemDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationRoleGroupItemDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationRouterArgs = {
  param: RouterSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationRouterBulkArgs = {
  param: ReadonlyArray<Maybe<RouterSaveIn>>;
};

export type MutationRouterDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationRouterDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationRouterRoleArgs = {
  param: RouterRoleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationRouterRoleBulkArgs = {
  param: ReadonlyArray<Maybe<RouterRoleSaveIn>>;
};

export type MutationRouterRoleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationRouterRoleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationSchemaModelArgs = {
  param: SchemaModelSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationSchemaModelBulkArgs = {
  param: ReadonlyArray<Maybe<SchemaModelSaveIn>>;
};

export type MutationSchemaModelDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationSchemaModelDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationSchemaModelRoleArgs = {
  param: SchemaModelRoleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationSchemaModelRoleBulkArgs = {
  param: ReadonlyArray<Maybe<SchemaModelRoleSaveIn>>;
};

export type MutationSchemaModelRoleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationSchemaModelRoleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationWebapiArgs = {
  param: WebapiSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationWebapiBulkArgs = {
  param: ReadonlyArray<Maybe<WebapiSaveIn>>;
};

export type MutationWebapiDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationWebapiDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationWebapiRoleArgs = {
  param: WebapiRoleSaveIn;
  must?: Maybe<Scalars['Boolean']>;
};

export type MutationWebapiRoleBulkArgs = {
  param: ReadonlyArray<Maybe<WebapiRoleSaveIn>>;
};

export type MutationWebapiRoleDestroyArgs = {
  where: Scalars['JSONObject'];
  limit?: Maybe<Scalars['Int']>;
};

export type MutationWebapiRoleDestroyByIdArgs = {
  id?: Maybe<Scalars['String']>;
};

export type AppUserSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** 凭证 */
  readonly accessToken?: Maybe<Scalars['String']>;
  /** 用户状态N停用Y启用 */
  readonly appUserStatus?: Maybe<Scalars['String']>;
  /** 用户类型[ordinary 普通用户,recovery 回收人员,system 系统用户,checkuser 检查人员] */
  readonly appUserType?: Maybe<Scalars['String']>;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** wxmini-用户所属企业的corpid */
  readonly corpid?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 系统默认头像 */
  readonly defaultAvatar?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 身份证头像 */
  readonly idHead?: Maybe<Scalars['String']>;
  /** 身份证国徽 */
  readonly idNational?: Maybe<Scalars['String']>;
  /** 登陆code（最后一次） */
  readonly jsCode?: Maybe<Scalars['String']>;
  /** 用户最后心跳时间 */
  readonly lastHeartbeatTime?: Maybe<Scalars['DateTime']>;
  /** 最后登陆时间 */
  readonly lastLoginTime?: Maybe<Scalars['DateTime']>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars['String']>;
  /** wxmini-企业微信的jscode2session返回的是userid，而微信返回的是openid */
  readonly openid?: Maybe<Scalars['String']>;
  /** 密码（小程序不需要） */
  readonly password?: Maybe<Scalars['String']>;
  /** 注册手机号 */
  readonly phone?: Maybe<Scalars['String']>;
  /** 用户真实姓名 */
  readonly realName?: Maybe<Scalars['String']>;
  /** 注册app */
  readonly registerApp?: Maybe<Scalars['String']>;
  /** 注册时间 */
  readonly registerTime?: Maybe<Scalars['DateTime']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 用户最后颁发token */
  readonly token?: Maybe<Scalars['String']>;
  /** wxmini-用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回 */
  readonly unionid?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 用户性别[男 m 男，女 w 女] */
  readonly userGender?: Maybe<EAppUserUserGender>;
  /** 用户名登陆用 */
  readonly userName?: Maybe<Scalars['String']>;
  readonly appUserRoleAppUserId?: Maybe<
    ReadonlyArray<Maybe<AppUserRoleSaveIn>>
  >;
};

export type AppUserRoleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 用户 */
  readonly appUserId?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** role、roleGroup */
  readonly roleType?: Maybe<Scalars['String']>;
  /** 角色id、角色组id */
  readonly typeId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
};

export type BusinessRuleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 规则编码[unique] */
  readonly ruleCode?: Maybe<Scalars['String']>;
  /** 规则名称[unique] */
  readonly ruleName?: Maybe<Scalars['String']>;
  /** 规则 */
  readonly ruleValue?: Maybe<Scalars['JSONObject']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly businessSchemaBusinessRuleId?: Maybe<
    ReadonlyArray<Maybe<BusinessSchemaSaveIn>>
  >;
};

export type BusinessSchemaSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly businessRuleId?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 属性json */
  readonly propertyJson?: Maybe<Scalars['JSONObject']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 对象属性id */
  readonly schemaModelId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 默认值json */
  readonly valueDefault?: Maybe<Scalars['JSONObject']>;
};

export type ComponentSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 组件名称[unique] */
  readonly componentCode?: Maybe<Scalars['String']>;
  /** 组件唯一约束key[unique] */
  readonly componentKey?: Maybe<Scalars['String']>;
  /** 组件名称[unique] */
  readonly componentName?: Maybe<Scalars['String']>;
  /** 控件属性 */
  readonly controlProperty?: Maybe<Scalars['JSONObject']>;
  /** 控件类型 */
  readonly controlType?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 组件路径 */
  readonly filePath?: Maybe<Scalars['String']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly componentControlerComponentId?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerSaveIn>>
  >;
  readonly componentParentId?: Maybe<ReadonlyArray<Maybe<ComponentSaveIn>>>;
  readonly routerComponentId?: Maybe<ReadonlyArray<Maybe<RouterSaveIn>>>;
};

export type ComponentControlerSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 组件id */
  readonly componentId?: Maybe<Scalars['String']>;
  /** 控件名称[unique] */
  readonly controlCode?: Maybe<Scalars['String']>;
  /** 控件唯一约束key[unique] */
  readonly controlKey?: Maybe<Scalars['String']>;
  /** 控件名称[unique] */
  readonly controlName?: Maybe<Scalars['String']>;
  /** 控件属性 */
  readonly controlProperty?: Maybe<Scalars['JSONObject']>;
  /** 控件类型 */
  readonly controlType?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 组件路径 */
  readonly filePath?: Maybe<Scalars['String']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly componentControlerParentId?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerSaveIn>>
  >;
  readonly componentControlerRoleComponentControlerId?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerRoleSaveIn>>
  >;
};

export type ComponentControlerRoleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 控件id */
  readonly componentControlerId?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色id */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
};

export type RouterSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 组件id */
  readonly componentId?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 路由编码 */
  readonly routerCode?: Maybe<Scalars['String']>;
  /** 路由名称 */
  readonly routerName?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly routerParentId?: Maybe<ReadonlyArray<Maybe<RouterSaveIn>>>;
  readonly routerRoleRouterId?: Maybe<ReadonlyArray<Maybe<RouterRoleSaveIn>>>;
};

export type RouterRoleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 路由id */
  readonly routerId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
};

export type RoleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色编码 */
  readonly roleCode?: Maybe<Scalars['String']>;
  /** 角色名称 */
  readonly roleName?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 权重 */
  readonly weight?: Maybe<Scalars['Float']>;
  readonly businessSchemaRoleId?: Maybe<
    ReadonlyArray<Maybe<BusinessSchemaSaveIn>>
  >;
  readonly componentControlerRoleRoleId?: Maybe<
    ReadonlyArray<Maybe<ComponentControlerRoleSaveIn>>
  >;
  readonly roleGroupItemRoleId?: Maybe<
    ReadonlyArray<Maybe<RoleGroupItemSaveIn>>
  >;
  readonly routerRoleRoleId?: Maybe<ReadonlyArray<Maybe<RouterRoleSaveIn>>>;
  readonly schemaModelRoleRoleId?: Maybe<
    ReadonlyArray<Maybe<SchemaModelRoleSaveIn>>
  >;
  readonly webapiRoleRoleId?: Maybe<ReadonlyArray<Maybe<WebapiRoleSaveIn>>>;
};

export type RoleGroupItemSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色组id */
  readonly roleGroupId?: Maybe<Scalars['String']>;
  /** 角色id */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 权重 */
  readonly weight?: Maybe<Scalars['Float']>;
};

export type SchemaModelRoleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 业务权限规则编码 */
  readonly businessValue?: Maybe<Scalars['JSONObject']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 权限[onlyOne onlyOne 只看自己，all all 可见可操作，businessCode businessCode 权限编码] */
  readonly dataState?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 对象id */
  readonly schemaModelId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
};

export type WebapiRoleSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 权限[view view 只读可见，operation operation 可见可操作，none none 没有权限] */
  readonly authState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 角色 */
  readonly roleId?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  /** 对象id */
  readonly webapiId?: Maybe<Scalars['String']>;
};

export type RoleGroupSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 组编号[unique] */
  readonly groupCode?: Maybe<Scalars['String']>;
  /** 组名[unique] */
  readonly groupName?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly roleGroupItemRoleGroupId?: Maybe<
    ReadonlyArray<Maybe<RoleGroupItemSaveIn>>
  >;
};

export type SchemaModelSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 编码[unique] */
  readonly code?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly comment?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 索引json */
  readonly indexJson?: Maybe<Scalars['JSONObject']>;
  /** 名称[unique] */
  readonly name?: Maybe<Scalars['String']>;
  /** 父级别 */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 属性json */
  readonly propertyJson?: Maybe<Scalars['JSONObject']>;
  /** 属性类型 */
  readonly propertyType?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** [model model 对象,property property 属性] */
  readonly schemaType?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly businessSchemaSchemaModelId?: Maybe<
    ReadonlyArray<Maybe<BusinessSchemaSaveIn>>
  >;
  readonly schemaModelParentId?: Maybe<ReadonlyArray<Maybe<SchemaModelSaveIn>>>;
  readonly schemaModelRoleSchemaModelId?: Maybe<
    ReadonlyArray<Maybe<SchemaModelRoleSaveIn>>
  >;
};

export type WebapiSaveIn = {
  readonly id?: Maybe<Scalars['ID']>;
  /** appName */
  readonly appName?: Maybe<Scalars['String']>;
  /** 请求权限 */
  readonly authApiState?: Maybe<Scalars['String']>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars['String']>;
  /** 路由编码[unique] */
  readonly code?: Maybe<Scalars['String']>;
  /** 说明 */
  readonly comment?: Maybe<Scalars['String']>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars['String']>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars['DateTime']>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars['String']>;
  /** 显示编码 */
  readonly displayCode?: Maybe<Scalars['String']>;
  /** 显示文本 */
  readonly displayTxt?: Maybe<Scalars['String']>;
  /** 请求方法 */
  readonly methodType?: Maybe<Scalars['String']>;
  /** 路由参数 */
  readonly params?: Maybe<Scalars['JSONObject']>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars['String']>;
  /** 路由[unique] */
  readonly path?: Maybe<Scalars['String']>;
  /** 备注 */
  readonly remark?: Maybe<Scalars['String']>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars['String']>;
  readonly webapiParentId?: Maybe<ReadonlyArray<Maybe<WebapiSaveIn>>>;
  readonly webapiRoleWebapiId?: Maybe<ReadonlyArray<Maybe<WebapiRoleSaveIn>>>;
};

export type AppUserRoleDestroyByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type AppUserRoleDestroyByIdMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'appUserRoleDestroyById'>;

export type AppUserRoleDestroyMutationVariables = Exact<{
  where: Scalars['JSONObject'];
}>;

export type AppUserRoleDestroyMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'appUserRoleDestroy'>;

export type AppUserRoleMutationVariables = Exact<{
  param: AppUserRoleSaveIn;
}>;

export type AppUserRoleMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'appUserRole'
>;

export type AppUserRoleBulkMutationVariables = Exact<{
  param: ReadonlyArray<Maybe<AppUserRoleSaveIn>> | Maybe<AppUserRoleSaveIn>;
}>;

export type AppUserRoleBulkMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'appUserRoleBulk'>;

export type FindAppUserListQueryVariables = Exact<{
  param: QueryListParam;
}>;

export type FindAppUserListQuery = { readonly __typename?: 'Query' } & Pick<
  Query,
  'appUserCount'
> & {
    readonly appUserAll?: Maybe<
      ReadonlyArray<
        Maybe<{ readonly __typename?: 'AppUser' } & AppUserFragment>
      >
    >;
  };

export type FindAppUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FindAppUserQuery = { readonly __typename?: 'Query' } & {
  readonly appUser?: Maybe<
    { readonly __typename?: 'AppUser' } & AppUserFragment
  >;
};

export type FindAppUserListOnlyQueryVariables = Exact<{
  param: QueryListParam;
}>;

export type FindAppUserListOnlyQuery = { readonly __typename?: 'Query' } & Pick<
  Query,
  'appUserCount'
> & {
    readonly appUserAll?: Maybe<
      ReadonlyArray<
        Maybe<{ readonly __typename?: 'AppUser' } & AppUserOnlyFragment>
      >
    >;
  };

export type AppUserFragment = { readonly __typename?: 'AppUser' } & Pick<
  AppUser,
  | 'id'
  | 'userName'
  | 'nickName'
  | 'realName'
  | 'userGender'
  | 'phone'
  | 'avatarUrl'
  | 'appUserStatus'
  | 'createdAt'
> & {
    readonly appUserRoleAppUserId?: Maybe<
      ReadonlyArray<
        Maybe<
          { readonly __typename?: 'AppUserRole' } & AppUserRoleAppUserIdFragment
        >
      >
    >;
  };

export type AppUserRoleAppUserIdFragment = {
  readonly __typename?: 'AppUserRole';
} & Pick<AppUserRole, 'id' | 'roleType' | 'typeId'> & {
    readonly typeIdModel?: Maybe<
      | ({ readonly __typename: 'Role' } & {
          name: Role['roleName'];
          code: Role['roleCode'];
        })
      | ({ readonly __typename: 'RoleGroup' } & {
          name: RoleGroup['groupName'];
          code: RoleGroup['groupCode'];
        })
    >;
  };

export type AppUserOnlyFragment = { readonly __typename?: 'AppUser' } & Pick<
  AppUser,
  | 'id'
  | 'userName'
  | 'nickName'
  | 'realName'
  | 'userGender'
  | 'phone'
  | 'appUserStatus'
  | 'createdAt'
>;

export type AppUserDestroyByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type AppUserDestroyByIdMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'appUserDestroyById'>;

export type AppUserStatusMutationVariables = Exact<{
  id: Scalars['ID'];
  appUserStatus: Scalars['String'];
}>;

export type AppUserStatusMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'appUser'
>;

export type AppUserMutationVariables = Exact<{
  param: AppUserSaveIn;
}>;

export type AppUserMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'appUser'
>;

export type RoleGroupItemDestroyByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type RoleGroupItemDestroyByIdMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'roleGroupItemDestroyById'>;

export type RoleGroupItemDestroyMutationVariables = Exact<{
  where: Scalars['JSONObject'];
}>;

export type RoleGroupItemDestroyMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'roleGroupItemDestroy'>;

export type RoleGroupItemMutationVariables = Exact<{
  param: RoleGroupItemSaveIn;
}>;

export type RoleGroupItemMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'roleGroupItem'
>;

export type RoleGroupItemBulkMutationVariables = Exact<{
  param: ReadonlyArray<Maybe<RoleGroupItemSaveIn>> | Maybe<RoleGroupItemSaveIn>;
}>;

export type RoleGroupItemBulkMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'roleGroupItemBulk'>;

export type FindRoleGroupListQueryVariables = Exact<{
  param: QueryListParam;
}>;

export type FindRoleGroupListQuery = { readonly __typename?: 'Query' } & Pick<
  Query,
  'roleGroupCount'
> & {
    readonly roleGroupAll?: Maybe<
      ReadonlyArray<
        Maybe<{ readonly __typename?: 'RoleGroup' } & RoleGroupFragment>
      >
    >;
  };

export type RoleGroupFragment = { readonly __typename?: 'RoleGroup' } & Pick<
  RoleGroup,
  'id' | 'groupCode' | 'groupName'
>;

export type FindRoleGroupManageListQueryVariables = Exact<{
  param: QueryListParam;
}>;

export type FindRoleGroupManageListQuery = {
  readonly __typename?: 'Query';
} & Pick<Query, 'roleGroupCount'> & {
    readonly roleGroupAll?: Maybe<
      ReadonlyArray<
        Maybe<{ readonly __typename?: 'RoleGroup' } & RoleGroupManageFragment>
      >
    >;
  };

export type FindRoleGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FindRoleGroupQuery = { readonly __typename?: 'Query' } & {
  readonly roleGroup?: Maybe<
    { readonly __typename?: 'RoleGroup' } & RoleGroupManageFragment
  >;
};

export type RoleGroupDestroyByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type RoleGroupDestroyByIdMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'roleGroupDestroyById'>;

export type RoleGroupMutationVariables = Exact<{
  param: RoleGroupSaveIn;
}>;

export type RoleGroupMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'roleGroup'
>;

export type RoleGroupManageFragment = {
  readonly __typename?: 'RoleGroup';
} & Pick<
  RoleGroup,
  'id' | 'groupCode' | 'groupName' | 'createdAt' | 'remark'
> & {
    readonly roleGroupItemRoleGroupId?: Maybe<
      ReadonlyArray<
        Maybe<
          {
            readonly __typename?: 'RoleGroupItem';
          } & RoleGroupItemRoleGroupIdFragment
        >
      >
    >;
  };

export type RoleGroupItemRoleGroupIdFragment = {
  readonly __typename?: 'RoleGroupItem';
} & Pick<RoleGroupItem, 'id'> & {
    readonly roleIdObj?: Maybe<
      { readonly __typename?: 'Role' } & Pick<
        Role,
        'id' | 'roleCode' | 'roleName'
      >
    >;
  };

export type FindRoleListQueryVariables = Exact<{
  param: QueryListParam;
}>;

export type FindRoleListQuery = { readonly __typename?: 'Query' } & Pick<
  Query,
  'roleCount'
> & {
    readonly roleAll?: Maybe<
      ReadonlyArray<Maybe<{ readonly __typename?: 'Role' } & RoleFragment>>
    >;
  };

export type RoleFragment = { readonly __typename?: 'Role' } & Pick<
  Role,
  'id' | 'roleCode' | 'roleName'
>;

export type RoleManageFragment = { readonly __typename?: 'Role' } & Pick<
  Role,
  'id' | 'roleCode' | 'roleName' | 'createdAt' | 'remark'
> & {
    readonly appUserRoleTypeId?: Maybe<
      ReadonlyArray<
        Maybe<
          { readonly __typename?: 'AppUserRole' } & AppUserRoleTypeIdFragment
        >
      >
    >;
  };

export type AppUserRoleTypeIdFragment = {
  readonly __typename?: 'AppUserRole';
} & Pick<AppUserRole, 'id' | 'appUserId'> & {
    readonly appUserIdObj?: Maybe<
      { readonly __typename?: 'AppUser' } & Pick<
        AppUser,
        'userName' | 'nickName' | 'phone'
      >
    >;
  };

export type FindRoleListManageQueryVariables = Exact<{
  param: QueryListParam;
}>;

export type FindRoleListManageQuery = { readonly __typename?: 'Query' } & Pick<
  Query,
  'roleCount'
> & {
    readonly roleAll?: Maybe<
      ReadonlyArray<
        Maybe<{ readonly __typename?: 'Role' } & RoleManageFragment>
      >
    >;
  };

export type RoleDestroyByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type RoleDestroyByIdMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'roleDestroyById'>;

export type FindRoleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FindRoleQuery = { readonly __typename?: 'Query' } & {
  readonly role?: Maybe<{ readonly __typename?: 'Role' } & RoleManageFragment>;
};

export type RoleMutationVariables = Exact<{
  param: RoleSaveIn;
}>;

export type RoleMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'role'
>;

export type FindRouterListQueryVariables = Exact<{
  param?: Maybe<QueryListParam>;
}>;

export type FindRouterListQuery = { readonly __typename?: 'Query' } & Pick<
  Query,
  'routerCount'
> & {
    readonly routerAll?: Maybe<
      ReadonlyArray<Maybe<{ readonly __typename?: 'Router' } & RouterFragment>>
    >;
  };

export type FindRouterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type FindRouterQuery = { readonly __typename?: 'Query' } & {
  readonly router?: Maybe<{ readonly __typename?: 'Router' } & RouterFragment>;
};

export type RouterFragment = { readonly __typename?: 'Router' } & Pick<
  Router,
  | 'id'
  | 'displayCode'
  | 'displayTxt'
  | 'parentId'
  | 'remark'
  | 'routerCode'
  | 'routerName'
  | 'createdAt'
>;

export type RouterDestroyByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type RouterDestroyByIdMutation = {
  readonly __typename?: 'Mutation';
} & Pick<Mutation, 'routerDestroyById'>;

export type RouterMutationVariables = Exact<{
  param: RouterSaveIn;
}>;

export type RouterMutation = { readonly __typename?: 'Mutation' } & Pick<
  Mutation,
  'router'
>;
