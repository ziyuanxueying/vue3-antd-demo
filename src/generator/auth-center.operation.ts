import * as SchemaTypes from './auth-center';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export const AppUserRoleAppUserIdFragmentDoc = gql`
  fragment AppUserRoleAppUserId on AppUserRole {
    id
    roleType
    typeId
    typeIdModel {
      __typename
      ... on Role {
        name: roleName
        code: roleCode
      }
      ... on RoleGroup {
        name: groupName
        code: groupCode
      }
    }
  }
`;
export const AppUserFragmentDoc = gql`
  fragment AppUser on AppUser {
    id
    userName
    nickName
    realName
    userGender
    phone
    avatarUrl
    appUserStatus
    createdAt
    appUserRoleAppUserId {
      ...AppUserRoleAppUserId
    }
  }
  ${AppUserRoleAppUserIdFragmentDoc}
`;
export const AppUserOnlyFragmentDoc = gql`
  fragment AppUserOnly on AppUser {
    id
    userName
    nickName
    realName
    userGender
    phone
    appUserStatus
    createdAt
  }
`;
export const RoleGroupFragmentDoc = gql`
  fragment RoleGroup on RoleGroup {
    id
    groupCode
    groupName
  }
`;
export const RoleGroupItemRoleGroupIdFragmentDoc = gql`
  fragment RoleGroupItemRoleGroupId on RoleGroupItem {
    id
    roleIdObj {
      id
      roleCode
      roleName
    }
  }
`;
export const RoleGroupManageFragmentDoc = gql`
  fragment RoleGroupManage on RoleGroup {
    id
    groupCode
    groupName
    createdAt
    remark
    roleGroupItemRoleGroupId {
      ...RoleGroupItemRoleGroupId
    }
  }
  ${RoleGroupItemRoleGroupIdFragmentDoc}
`;
export const RoleFragmentDoc = gql`
  fragment Role on Role {
    id
    roleCode
    roleName
  }
`;
export const AppUserRoleTypeIdFragmentDoc = gql`
  fragment appUserRoleTypeId on AppUserRole {
    id
    appUserId
    appUserIdObj {
      userName
      nickName
      phone
    }
  }
`;
export const RoleManageFragmentDoc = gql`
  fragment RoleManage on Role {
    id
    roleCode
    roleName
    createdAt
    remark
    appUserRoleTypeId {
      ...appUserRoleTypeId
    }
  }
  ${AppUserRoleTypeIdFragmentDoc}
`;
export const RouterFragmentDoc = gql`
  fragment Router on Router {
    id
    displayCode
    displayTxt
    parentId
    remark
    routerCode
    routerName
    createdAt
  }
`;
export const AppUserRoleDestroyByIdDocument = gql`
  mutation appUserRoleDestroyById($id: String!) {
    appUserRoleDestroyById(id: $id)
  }
`;
export type AppUserRoleDestroyByIdMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserRoleDestroyByIdMutation,
  SchemaTypes.AppUserRoleDestroyByIdMutationVariables
>;

/**
 * __useAppUserRoleDestroyByIdMutation__
 *
 * To run a mutation, you first call `useAppUserRoleDestroyByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserRoleDestroyByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserRoleDestroyByIdMutation, { data, loading, error }] = useAppUserRoleDestroyByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAppUserRoleDestroyByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserRoleDestroyByIdMutation,
    SchemaTypes.AppUserRoleDestroyByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserRoleDestroyByIdMutation,
    SchemaTypes.AppUserRoleDestroyByIdMutationVariables
  >(AppUserRoleDestroyByIdDocument, options);
}
export type AppUserRoleDestroyByIdMutationHookResult = ReturnType<
  typeof useAppUserRoleDestroyByIdMutation
>;
export type AppUserRoleDestroyByIdMutationResult = Apollo.MutationResult<SchemaTypes.AppUserRoleDestroyByIdMutation>;
export type AppUserRoleDestroyByIdMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserRoleDestroyByIdMutation,
  SchemaTypes.AppUserRoleDestroyByIdMutationVariables
>;
export const AppUserRoleDestroyDocument = gql`
  mutation appUserRoleDestroy($where: JSONObject!) {
    appUserRoleDestroy(where: $where)
  }
`;
export type AppUserRoleDestroyMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserRoleDestroyMutation,
  SchemaTypes.AppUserRoleDestroyMutationVariables
>;

/**
 * __useAppUserRoleDestroyMutation__
 *
 * To run a mutation, you first call `useAppUserRoleDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserRoleDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserRoleDestroyMutation, { data, loading, error }] = useAppUserRoleDestroyMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAppUserRoleDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserRoleDestroyMutation,
    SchemaTypes.AppUserRoleDestroyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserRoleDestroyMutation,
    SchemaTypes.AppUserRoleDestroyMutationVariables
  >(AppUserRoleDestroyDocument, options);
}
export type AppUserRoleDestroyMutationHookResult = ReturnType<
  typeof useAppUserRoleDestroyMutation
>;
export type AppUserRoleDestroyMutationResult = Apollo.MutationResult<SchemaTypes.AppUserRoleDestroyMutation>;
export type AppUserRoleDestroyMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserRoleDestroyMutation,
  SchemaTypes.AppUserRoleDestroyMutationVariables
>;
export const AppUserRoleDocument = gql`
  mutation appUserRole($param: AppUserRoleSaveIn!) {
    appUserRole(param: $param)
  }
`;
export type AppUserRoleMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserRoleMutation,
  SchemaTypes.AppUserRoleMutationVariables
>;

/**
 * __useAppUserRoleMutation__
 *
 * To run a mutation, you first call `useAppUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserRoleMutation, { data, loading, error }] = useAppUserRoleMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useAppUserRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserRoleMutation,
    SchemaTypes.AppUserRoleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserRoleMutation,
    SchemaTypes.AppUserRoleMutationVariables
  >(AppUserRoleDocument, options);
}
export type AppUserRoleMutationHookResult = ReturnType<
  typeof useAppUserRoleMutation
>;
export type AppUserRoleMutationResult = Apollo.MutationResult<SchemaTypes.AppUserRoleMutation>;
export type AppUserRoleMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserRoleMutation,
  SchemaTypes.AppUserRoleMutationVariables
>;
export const AppUserRoleBulkDocument = gql`
  mutation appUserRoleBulk($param: [AppUserRoleSaveIn]!) {
    appUserRoleBulk(param: $param)
  }
`;
export type AppUserRoleBulkMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserRoleBulkMutation,
  SchemaTypes.AppUserRoleBulkMutationVariables
>;

/**
 * __useAppUserRoleBulkMutation__
 *
 * To run a mutation, you first call `useAppUserRoleBulkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserRoleBulkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserRoleBulkMutation, { data, loading, error }] = useAppUserRoleBulkMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useAppUserRoleBulkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserRoleBulkMutation,
    SchemaTypes.AppUserRoleBulkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserRoleBulkMutation,
    SchemaTypes.AppUserRoleBulkMutationVariables
  >(AppUserRoleBulkDocument, options);
}
export type AppUserRoleBulkMutationHookResult = ReturnType<
  typeof useAppUserRoleBulkMutation
>;
export type AppUserRoleBulkMutationResult = Apollo.MutationResult<SchemaTypes.AppUserRoleBulkMutation>;
export type AppUserRoleBulkMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserRoleBulkMutation,
  SchemaTypes.AppUserRoleBulkMutationVariables
>;
export const FindAppUserListDocument = gql`
  query findAppUserList($param: QueryListParam!) {
    appUserAll(param: $param) {
      ...AppUser
    }
    appUserCount(param: $param)
  }
  ${AppUserFragmentDoc}
`;

/**
 * __useFindAppUserListQuery__
 *
 * To run a query within a React component, call `useFindAppUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAppUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAppUserListQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindAppUserListQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindAppUserListQuery,
    SchemaTypes.FindAppUserListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindAppUserListQuery,
    SchemaTypes.FindAppUserListQueryVariables
  >(FindAppUserListDocument, options);
}
export function useFindAppUserListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindAppUserListQuery,
    SchemaTypes.FindAppUserListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindAppUserListQuery,
    SchemaTypes.FindAppUserListQueryVariables
  >(FindAppUserListDocument, options);
}
export type FindAppUserListQueryHookResult = ReturnType<
  typeof useFindAppUserListQuery
>;
export type FindAppUserListLazyQueryHookResult = ReturnType<
  typeof useFindAppUserListLazyQuery
>;
export type FindAppUserListQueryResult = Apollo.QueryResult<
  SchemaTypes.FindAppUserListQuery,
  SchemaTypes.FindAppUserListQueryVariables
>;
export const FindAppUserDocument = gql`
  query findAppUser($id: ID!) {
    appUser(id: $id) {
      ...AppUser
    }
  }
  ${AppUserFragmentDoc}
`;

/**
 * __useFindAppUserQuery__
 *
 * To run a query within a React component, call `useFindAppUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAppUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAppUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindAppUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindAppUserQuery,
    SchemaTypes.FindAppUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindAppUserQuery,
    SchemaTypes.FindAppUserQueryVariables
  >(FindAppUserDocument, options);
}
export function useFindAppUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindAppUserQuery,
    SchemaTypes.FindAppUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindAppUserQuery,
    SchemaTypes.FindAppUserQueryVariables
  >(FindAppUserDocument, options);
}
export type FindAppUserQueryHookResult = ReturnType<typeof useFindAppUserQuery>;
export type FindAppUserLazyQueryHookResult = ReturnType<
  typeof useFindAppUserLazyQuery
>;
export type FindAppUserQueryResult = Apollo.QueryResult<
  SchemaTypes.FindAppUserQuery,
  SchemaTypes.FindAppUserQueryVariables
>;
export const FindAppUserListOnlyDocument = gql`
  query findAppUserListOnly($param: QueryListParam!) {
    appUserAll(param: $param) {
      ...AppUserOnly
    }
    appUserCount(param: $param)
  }
  ${AppUserOnlyFragmentDoc}
`;

/**
 * __useFindAppUserListOnlyQuery__
 *
 * To run a query within a React component, call `useFindAppUserListOnlyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAppUserListOnlyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAppUserListOnlyQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindAppUserListOnlyQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindAppUserListOnlyQuery,
    SchemaTypes.FindAppUserListOnlyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindAppUserListOnlyQuery,
    SchemaTypes.FindAppUserListOnlyQueryVariables
  >(FindAppUserListOnlyDocument, options);
}
export function useFindAppUserListOnlyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindAppUserListOnlyQuery,
    SchemaTypes.FindAppUserListOnlyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindAppUserListOnlyQuery,
    SchemaTypes.FindAppUserListOnlyQueryVariables
  >(FindAppUserListOnlyDocument, options);
}
export type FindAppUserListOnlyQueryHookResult = ReturnType<
  typeof useFindAppUserListOnlyQuery
>;
export type FindAppUserListOnlyLazyQueryHookResult = ReturnType<
  typeof useFindAppUserListOnlyLazyQuery
>;
export type FindAppUserListOnlyQueryResult = Apollo.QueryResult<
  SchemaTypes.FindAppUserListOnlyQuery,
  SchemaTypes.FindAppUserListOnlyQueryVariables
>;
export const AppUserDestroyByIdDocument = gql`
  mutation appUserDestroyById($id: String!) {
    appUserDestroyById(id: $id)
  }
`;
export type AppUserDestroyByIdMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserDestroyByIdMutation,
  SchemaTypes.AppUserDestroyByIdMutationVariables
>;

/**
 * __useAppUserDestroyByIdMutation__
 *
 * To run a mutation, you first call `useAppUserDestroyByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserDestroyByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserDestroyByIdMutation, { data, loading, error }] = useAppUserDestroyByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAppUserDestroyByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserDestroyByIdMutation,
    SchemaTypes.AppUserDestroyByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserDestroyByIdMutation,
    SchemaTypes.AppUserDestroyByIdMutationVariables
  >(AppUserDestroyByIdDocument, options);
}
export type AppUserDestroyByIdMutationHookResult = ReturnType<
  typeof useAppUserDestroyByIdMutation
>;
export type AppUserDestroyByIdMutationResult = Apollo.MutationResult<SchemaTypes.AppUserDestroyByIdMutation>;
export type AppUserDestroyByIdMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserDestroyByIdMutation,
  SchemaTypes.AppUserDestroyByIdMutationVariables
>;
export const AppUserStatusDocument = gql`
  mutation appUserStatus($id: ID!, $appUserStatus: String!) {
    appUser(param: { id: $id, appUserStatus: $appUserStatus })
  }
`;
export type AppUserStatusMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserStatusMutation,
  SchemaTypes.AppUserStatusMutationVariables
>;

/**
 * __useAppUserStatusMutation__
 *
 * To run a mutation, you first call `useAppUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserStatusMutation, { data, loading, error }] = useAppUserStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      appUserStatus: // value for 'appUserStatus'
 *   },
 * });
 */
export function useAppUserStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserStatusMutation,
    SchemaTypes.AppUserStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserStatusMutation,
    SchemaTypes.AppUserStatusMutationVariables
  >(AppUserStatusDocument, options);
}
export type AppUserStatusMutationHookResult = ReturnType<
  typeof useAppUserStatusMutation
>;
export type AppUserStatusMutationResult = Apollo.MutationResult<SchemaTypes.AppUserStatusMutation>;
export type AppUserStatusMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserStatusMutation,
  SchemaTypes.AppUserStatusMutationVariables
>;
export const AppUserDocument = gql`
  mutation appUser($param: AppUserSaveIn!) {
    appUser(param: $param)
  }
`;
export type AppUserMutationFn = Apollo.MutationFunction<
  SchemaTypes.AppUserMutation,
  SchemaTypes.AppUserMutationVariables
>;

/**
 * __useAppUserMutation__
 *
 * To run a mutation, you first call `useAppUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAppUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [appUserMutation, { data, loading, error }] = useAppUserMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useAppUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.AppUserMutation,
    SchemaTypes.AppUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.AppUserMutation,
    SchemaTypes.AppUserMutationVariables
  >(AppUserDocument, options);
}
export type AppUserMutationHookResult = ReturnType<typeof useAppUserMutation>;
export type AppUserMutationResult = Apollo.MutationResult<SchemaTypes.AppUserMutation>;
export type AppUserMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.AppUserMutation,
  SchemaTypes.AppUserMutationVariables
>;
export const RoleGroupItemDestroyByIdDocument = gql`
  mutation roleGroupItemDestroyById($id: String!) {
    roleGroupItemDestroyById(id: $id)
  }
`;
export type RoleGroupItemDestroyByIdMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleGroupItemDestroyByIdMutation,
  SchemaTypes.RoleGroupItemDestroyByIdMutationVariables
>;

/**
 * __useRoleGroupItemDestroyByIdMutation__
 *
 * To run a mutation, you first call `useRoleGroupItemDestroyByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleGroupItemDestroyByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleGroupItemDestroyByIdMutation, { data, loading, error }] = useRoleGroupItemDestroyByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleGroupItemDestroyByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleGroupItemDestroyByIdMutation,
    SchemaTypes.RoleGroupItemDestroyByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleGroupItemDestroyByIdMutation,
    SchemaTypes.RoleGroupItemDestroyByIdMutationVariables
  >(RoleGroupItemDestroyByIdDocument, options);
}
export type RoleGroupItemDestroyByIdMutationHookResult = ReturnType<
  typeof useRoleGroupItemDestroyByIdMutation
>;
export type RoleGroupItemDestroyByIdMutationResult = Apollo.MutationResult<SchemaTypes.RoleGroupItemDestroyByIdMutation>;
export type RoleGroupItemDestroyByIdMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleGroupItemDestroyByIdMutation,
  SchemaTypes.RoleGroupItemDestroyByIdMutationVariables
>;
export const RoleGroupItemDestroyDocument = gql`
  mutation roleGroupItemDestroy($where: JSONObject!) {
    roleGroupItemDestroy(where: $where)
  }
`;
export type RoleGroupItemDestroyMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleGroupItemDestroyMutation,
  SchemaTypes.RoleGroupItemDestroyMutationVariables
>;

/**
 * __useRoleGroupItemDestroyMutation__
 *
 * To run a mutation, you first call `useRoleGroupItemDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleGroupItemDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleGroupItemDestroyMutation, { data, loading, error }] = useRoleGroupItemDestroyMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRoleGroupItemDestroyMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleGroupItemDestroyMutation,
    SchemaTypes.RoleGroupItemDestroyMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleGroupItemDestroyMutation,
    SchemaTypes.RoleGroupItemDestroyMutationVariables
  >(RoleGroupItemDestroyDocument, options);
}
export type RoleGroupItemDestroyMutationHookResult = ReturnType<
  typeof useRoleGroupItemDestroyMutation
>;
export type RoleGroupItemDestroyMutationResult = Apollo.MutationResult<SchemaTypes.RoleGroupItemDestroyMutation>;
export type RoleGroupItemDestroyMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleGroupItemDestroyMutation,
  SchemaTypes.RoleGroupItemDestroyMutationVariables
>;
export const RoleGroupItemDocument = gql`
  mutation roleGroupItem($param: RoleGroupItemSaveIn!) {
    roleGroupItem(param: $param)
  }
`;
export type RoleGroupItemMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleGroupItemMutation,
  SchemaTypes.RoleGroupItemMutationVariables
>;

/**
 * __useRoleGroupItemMutation__
 *
 * To run a mutation, you first call `useRoleGroupItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleGroupItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleGroupItemMutation, { data, loading, error }] = useRoleGroupItemMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useRoleGroupItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleGroupItemMutation,
    SchemaTypes.RoleGroupItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleGroupItemMutation,
    SchemaTypes.RoleGroupItemMutationVariables
  >(RoleGroupItemDocument, options);
}
export type RoleGroupItemMutationHookResult = ReturnType<
  typeof useRoleGroupItemMutation
>;
export type RoleGroupItemMutationResult = Apollo.MutationResult<SchemaTypes.RoleGroupItemMutation>;
export type RoleGroupItemMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleGroupItemMutation,
  SchemaTypes.RoleGroupItemMutationVariables
>;
export const RoleGroupItemBulkDocument = gql`
  mutation roleGroupItemBulk($param: [RoleGroupItemSaveIn]!) {
    roleGroupItemBulk(param: $param)
  }
`;
export type RoleGroupItemBulkMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleGroupItemBulkMutation,
  SchemaTypes.RoleGroupItemBulkMutationVariables
>;

/**
 * __useRoleGroupItemBulkMutation__
 *
 * To run a mutation, you first call `useRoleGroupItemBulkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleGroupItemBulkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleGroupItemBulkMutation, { data, loading, error }] = useRoleGroupItemBulkMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useRoleGroupItemBulkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleGroupItemBulkMutation,
    SchemaTypes.RoleGroupItemBulkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleGroupItemBulkMutation,
    SchemaTypes.RoleGroupItemBulkMutationVariables
  >(RoleGroupItemBulkDocument, options);
}
export type RoleGroupItemBulkMutationHookResult = ReturnType<
  typeof useRoleGroupItemBulkMutation
>;
export type RoleGroupItemBulkMutationResult = Apollo.MutationResult<SchemaTypes.RoleGroupItemBulkMutation>;
export type RoleGroupItemBulkMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleGroupItemBulkMutation,
  SchemaTypes.RoleGroupItemBulkMutationVariables
>;
export const FindRoleGroupListDocument = gql`
  query findRoleGroupList($param: QueryListParam!) {
    roleGroupAll(param: $param) {
      ...RoleGroup
    }
    roleGroupCount(param: $param)
  }
  ${RoleGroupFragmentDoc}
`;

/**
 * __useFindRoleGroupListQuery__
 *
 * To run a query within a React component, call `useFindRoleGroupListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoleGroupListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoleGroupListQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindRoleGroupListQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRoleGroupListQuery,
    SchemaTypes.FindRoleGroupListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRoleGroupListQuery,
    SchemaTypes.FindRoleGroupListQueryVariables
  >(FindRoleGroupListDocument, options);
}
export function useFindRoleGroupListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRoleGroupListQuery,
    SchemaTypes.FindRoleGroupListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRoleGroupListQuery,
    SchemaTypes.FindRoleGroupListQueryVariables
  >(FindRoleGroupListDocument, options);
}
export type FindRoleGroupListQueryHookResult = ReturnType<
  typeof useFindRoleGroupListQuery
>;
export type FindRoleGroupListLazyQueryHookResult = ReturnType<
  typeof useFindRoleGroupListLazyQuery
>;
export type FindRoleGroupListQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRoleGroupListQuery,
  SchemaTypes.FindRoleGroupListQueryVariables
>;
export const FindRoleGroupManageListDocument = gql`
  query findRoleGroupManageList($param: QueryListParam!) {
    roleGroupAll(param: $param) {
      ...RoleGroupManage
    }
    roleGroupCount(param: $param)
  }
  ${RoleGroupManageFragmentDoc}
`;

/**
 * __useFindRoleGroupManageListQuery__
 *
 * To run a query within a React component, call `useFindRoleGroupManageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoleGroupManageListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoleGroupManageListQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindRoleGroupManageListQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRoleGroupManageListQuery,
    SchemaTypes.FindRoleGroupManageListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRoleGroupManageListQuery,
    SchemaTypes.FindRoleGroupManageListQueryVariables
  >(FindRoleGroupManageListDocument, options);
}
export function useFindRoleGroupManageListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRoleGroupManageListQuery,
    SchemaTypes.FindRoleGroupManageListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRoleGroupManageListQuery,
    SchemaTypes.FindRoleGroupManageListQueryVariables
  >(FindRoleGroupManageListDocument, options);
}
export type FindRoleGroupManageListQueryHookResult = ReturnType<
  typeof useFindRoleGroupManageListQuery
>;
export type FindRoleGroupManageListLazyQueryHookResult = ReturnType<
  typeof useFindRoleGroupManageListLazyQuery
>;
export type FindRoleGroupManageListQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRoleGroupManageListQuery,
  SchemaTypes.FindRoleGroupManageListQueryVariables
>;
export const FindRoleGroupDocument = gql`
  query findRoleGroup($id: ID!) {
    roleGroup(id: $id) {
      ...RoleGroupManage
    }
  }
  ${RoleGroupManageFragmentDoc}
`;

/**
 * __useFindRoleGroupQuery__
 *
 * To run a query within a React component, call `useFindRoleGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoleGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoleGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindRoleGroupQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRoleGroupQuery,
    SchemaTypes.FindRoleGroupQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRoleGroupQuery,
    SchemaTypes.FindRoleGroupQueryVariables
  >(FindRoleGroupDocument, options);
}
export function useFindRoleGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRoleGroupQuery,
    SchemaTypes.FindRoleGroupQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRoleGroupQuery,
    SchemaTypes.FindRoleGroupQueryVariables
  >(FindRoleGroupDocument, options);
}
export type FindRoleGroupQueryHookResult = ReturnType<
  typeof useFindRoleGroupQuery
>;
export type FindRoleGroupLazyQueryHookResult = ReturnType<
  typeof useFindRoleGroupLazyQuery
>;
export type FindRoleGroupQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRoleGroupQuery,
  SchemaTypes.FindRoleGroupQueryVariables
>;
export const RoleGroupDestroyByIdDocument = gql`
  mutation roleGroupDestroyById($id: String!) {
    roleGroupDestroyById(id: $id)
  }
`;
export type RoleGroupDestroyByIdMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleGroupDestroyByIdMutation,
  SchemaTypes.RoleGroupDestroyByIdMutationVariables
>;

/**
 * __useRoleGroupDestroyByIdMutation__
 *
 * To run a mutation, you first call `useRoleGroupDestroyByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleGroupDestroyByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleGroupDestroyByIdMutation, { data, loading, error }] = useRoleGroupDestroyByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleGroupDestroyByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleGroupDestroyByIdMutation,
    SchemaTypes.RoleGroupDestroyByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleGroupDestroyByIdMutation,
    SchemaTypes.RoleGroupDestroyByIdMutationVariables
  >(RoleGroupDestroyByIdDocument, options);
}
export type RoleGroupDestroyByIdMutationHookResult = ReturnType<
  typeof useRoleGroupDestroyByIdMutation
>;
export type RoleGroupDestroyByIdMutationResult = Apollo.MutationResult<SchemaTypes.RoleGroupDestroyByIdMutation>;
export type RoleGroupDestroyByIdMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleGroupDestroyByIdMutation,
  SchemaTypes.RoleGroupDestroyByIdMutationVariables
>;
export const RoleGroupDocument = gql`
  mutation roleGroup($param: RoleGroupSaveIn!) {
    roleGroup(param: $param)
  }
`;
export type RoleGroupMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleGroupMutation,
  SchemaTypes.RoleGroupMutationVariables
>;

/**
 * __useRoleGroupMutation__
 *
 * To run a mutation, you first call `useRoleGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleGroupMutation, { data, loading, error }] = useRoleGroupMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useRoleGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleGroupMutation,
    SchemaTypes.RoleGroupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleGroupMutation,
    SchemaTypes.RoleGroupMutationVariables
  >(RoleGroupDocument, options);
}
export type RoleGroupMutationHookResult = ReturnType<
  typeof useRoleGroupMutation
>;
export type RoleGroupMutationResult = Apollo.MutationResult<SchemaTypes.RoleGroupMutation>;
export type RoleGroupMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleGroupMutation,
  SchemaTypes.RoleGroupMutationVariables
>;
export const FindRoleListDocument = gql`
  query findRoleList($param: QueryListParam!) {
    roleAll(param: $param) {
      ...Role
    }
    roleCount(param: $param)
  }
  ${RoleFragmentDoc}
`;

/**
 * __useFindRoleListQuery__
 *
 * To run a query within a React component, call `useFindRoleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoleListQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindRoleListQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRoleListQuery,
    SchemaTypes.FindRoleListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRoleListQuery,
    SchemaTypes.FindRoleListQueryVariables
  >(FindRoleListDocument, options);
}
export function useFindRoleListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRoleListQuery,
    SchemaTypes.FindRoleListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRoleListQuery,
    SchemaTypes.FindRoleListQueryVariables
  >(FindRoleListDocument, options);
}
export type FindRoleListQueryHookResult = ReturnType<
  typeof useFindRoleListQuery
>;
export type FindRoleListLazyQueryHookResult = ReturnType<
  typeof useFindRoleListLazyQuery
>;
export type FindRoleListQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRoleListQuery,
  SchemaTypes.FindRoleListQueryVariables
>;
export const FindRoleListManageDocument = gql`
  query findRoleListManage($param: QueryListParam!) {
    roleAll(param: $param) {
      ...RoleManage
    }
    roleCount(param: $param)
  }
  ${RoleManageFragmentDoc}
`;

/**
 * __useFindRoleListManageQuery__
 *
 * To run a query within a React component, call `useFindRoleListManageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoleListManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoleListManageQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindRoleListManageQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRoleListManageQuery,
    SchemaTypes.FindRoleListManageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRoleListManageQuery,
    SchemaTypes.FindRoleListManageQueryVariables
  >(FindRoleListManageDocument, options);
}
export function useFindRoleListManageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRoleListManageQuery,
    SchemaTypes.FindRoleListManageQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRoleListManageQuery,
    SchemaTypes.FindRoleListManageQueryVariables
  >(FindRoleListManageDocument, options);
}
export type FindRoleListManageQueryHookResult = ReturnType<
  typeof useFindRoleListManageQuery
>;
export type FindRoleListManageLazyQueryHookResult = ReturnType<
  typeof useFindRoleListManageLazyQuery
>;
export type FindRoleListManageQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRoleListManageQuery,
  SchemaTypes.FindRoleListManageQueryVariables
>;
export const RoleDestroyByIdDocument = gql`
  mutation roleDestroyById($id: String!) {
    roleDestroyById(id: $id)
  }
`;
export type RoleDestroyByIdMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleDestroyByIdMutation,
  SchemaTypes.RoleDestroyByIdMutationVariables
>;

/**
 * __useRoleDestroyByIdMutation__
 *
 * To run a mutation, you first call `useRoleDestroyByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleDestroyByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleDestroyByIdMutation, { data, loading, error }] = useRoleDestroyByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleDestroyByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleDestroyByIdMutation,
    SchemaTypes.RoleDestroyByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleDestroyByIdMutation,
    SchemaTypes.RoleDestroyByIdMutationVariables
  >(RoleDestroyByIdDocument, options);
}
export type RoleDestroyByIdMutationHookResult = ReturnType<
  typeof useRoleDestroyByIdMutation
>;
export type RoleDestroyByIdMutationResult = Apollo.MutationResult<SchemaTypes.RoleDestroyByIdMutation>;
export type RoleDestroyByIdMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleDestroyByIdMutation,
  SchemaTypes.RoleDestroyByIdMutationVariables
>;
export const FindRoleDocument = gql`
  query findRole($id: ID!) {
    role(id: $id) {
      ...RoleManage
    }
  }
  ${RoleManageFragmentDoc}
`;

/**
 * __useFindRoleQuery__
 *
 * To run a query within a React component, call `useFindRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindRoleQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRoleQuery,
    SchemaTypes.FindRoleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRoleQuery,
    SchemaTypes.FindRoleQueryVariables
  >(FindRoleDocument, options);
}
export function useFindRoleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRoleQuery,
    SchemaTypes.FindRoleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRoleQuery,
    SchemaTypes.FindRoleQueryVariables
  >(FindRoleDocument, options);
}
export type FindRoleQueryHookResult = ReturnType<typeof useFindRoleQuery>;
export type FindRoleLazyQueryHookResult = ReturnType<
  typeof useFindRoleLazyQuery
>;
export type FindRoleQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRoleQuery,
  SchemaTypes.FindRoleQueryVariables
>;
export const RoleDocument = gql`
  mutation role($param: RoleSaveIn!) {
    role(param: $param)
  }
`;
export type RoleMutationFn = Apollo.MutationFunction<
  SchemaTypes.RoleMutation,
  SchemaTypes.RoleMutationVariables
>;

/**
 * __useRoleMutation__
 *
 * To run a mutation, you first call `useRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [roleMutation, { data, loading, error }] = useRoleMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useRoleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RoleMutation,
    SchemaTypes.RoleMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RoleMutation,
    SchemaTypes.RoleMutationVariables
  >(RoleDocument, options);
}
export type RoleMutationHookResult = ReturnType<typeof useRoleMutation>;
export type RoleMutationResult = Apollo.MutationResult<SchemaTypes.RoleMutation>;
export type RoleMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RoleMutation,
  SchemaTypes.RoleMutationVariables
>;
export const FindRouterListDocument = gql`
  query findRouterList($param: QueryListParam) {
    routerAll(param: $param) {
      ...Router
    }
    routerCount(param: $param)
  }
  ${RouterFragmentDoc}
`;

/**
 * __useFindRouterListQuery__
 *
 * To run a query within a React component, call `useFindRouterListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRouterListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRouterListQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useFindRouterListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SchemaTypes.FindRouterListQuery,
    SchemaTypes.FindRouterListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRouterListQuery,
    SchemaTypes.FindRouterListQueryVariables
  >(FindRouterListDocument, options);
}
export function useFindRouterListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRouterListQuery,
    SchemaTypes.FindRouterListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRouterListQuery,
    SchemaTypes.FindRouterListQueryVariables
  >(FindRouterListDocument, options);
}
export type FindRouterListQueryHookResult = ReturnType<
  typeof useFindRouterListQuery
>;
export type FindRouterListLazyQueryHookResult = ReturnType<
  typeof useFindRouterListLazyQuery
>;
export type FindRouterListQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRouterListQuery,
  SchemaTypes.FindRouterListQueryVariables
>;
export const FindRouterDocument = gql`
  query findRouter($id: ID!) {
    router(id: $id) {
      ...Router
    }
  }
  ${RouterFragmentDoc}
`;

/**
 * __useFindRouterQuery__
 *
 * To run a query within a React component, call `useFindRouterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRouterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRouterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindRouterQuery(
  baseOptions: Apollo.QueryHookOptions<
    SchemaTypes.FindRouterQuery,
    SchemaTypes.FindRouterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    SchemaTypes.FindRouterQuery,
    SchemaTypes.FindRouterQueryVariables
  >(FindRouterDocument, options);
}
export function useFindRouterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SchemaTypes.FindRouterQuery,
    SchemaTypes.FindRouterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SchemaTypes.FindRouterQuery,
    SchemaTypes.FindRouterQueryVariables
  >(FindRouterDocument, options);
}
export type FindRouterQueryHookResult = ReturnType<typeof useFindRouterQuery>;
export type FindRouterLazyQueryHookResult = ReturnType<
  typeof useFindRouterLazyQuery
>;
export type FindRouterQueryResult = Apollo.QueryResult<
  SchemaTypes.FindRouterQuery,
  SchemaTypes.FindRouterQueryVariables
>;
export const RouterDestroyByIdDocument = gql`
  mutation routerDestroyById($id: String!) {
    routerDestroyById(id: $id)
  }
`;
export type RouterDestroyByIdMutationFn = Apollo.MutationFunction<
  SchemaTypes.RouterDestroyByIdMutation,
  SchemaTypes.RouterDestroyByIdMutationVariables
>;

/**
 * __useRouterDestroyByIdMutation__
 *
 * To run a mutation, you first call `useRouterDestroyByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRouterDestroyByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [routerDestroyByIdMutation, { data, loading, error }] = useRouterDestroyByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRouterDestroyByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RouterDestroyByIdMutation,
    SchemaTypes.RouterDestroyByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RouterDestroyByIdMutation,
    SchemaTypes.RouterDestroyByIdMutationVariables
  >(RouterDestroyByIdDocument, options);
}
export type RouterDestroyByIdMutationHookResult = ReturnType<
  typeof useRouterDestroyByIdMutation
>;
export type RouterDestroyByIdMutationResult = Apollo.MutationResult<SchemaTypes.RouterDestroyByIdMutation>;
export type RouterDestroyByIdMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RouterDestroyByIdMutation,
  SchemaTypes.RouterDestroyByIdMutationVariables
>;
export const RouterDocument = gql`
  mutation router($param: RouterSaveIn!) {
    router(param: $param)
  }
`;
export type RouterMutationFn = Apollo.MutationFunction<
  SchemaTypes.RouterMutation,
  SchemaTypes.RouterMutationVariables
>;

/**
 * __useRouterMutation__
 *
 * To run a mutation, you first call `useRouterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRouterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [routerMutation, { data, loading, error }] = useRouterMutation({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useRouterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SchemaTypes.RouterMutation,
    SchemaTypes.RouterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SchemaTypes.RouterMutation,
    SchemaTypes.RouterMutationVariables
  >(RouterDocument, options);
}
export type RouterMutationHookResult = ReturnType<typeof useRouterMutation>;
export type RouterMutationResult = Apollo.MutationResult<SchemaTypes.RouterMutation>;
export type RouterMutationOptions = Apollo.BaseMutationOptions<
  SchemaTypes.RouterMutation,
  SchemaTypes.RouterMutationVariables
>;
