import { Spin } from 'antd';
import { FC } from 'react';
import { useFindRoleGroupQuery } from '../../generator/auth-center.operation';
import { useRouteMatch } from 'react-router-dom';
import Save from '../../components/role-group/save';
import { RoleGroupManageFragment } from '../../generator/auth-center';
import { get } from 'lodash';

const Item: FC = () => {
  const match = useRouteMatch();
  const { data, loading } = useFindRoleGroupQuery({
    variables: match.params as { id: string },
    skip: !get(match, 'params.id'),
  });

  if (loading) {
    return <Spin />;
  }
  return <Save data={data?.roleGroup as RoleGroupManageFragment}></Save>;
};

export default Item;
