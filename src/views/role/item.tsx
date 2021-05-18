import { Spin } from 'antd';
import { FC } from 'react';
import { useFindRoleQuery } from 'generator/auth-center.operation';
import { useRouteMatch } from 'react-router-dom';
import Save from 'components/role/save';
import { RoleManageFragment } from 'generator/auth-center';
import { get } from 'lodash';

const Item: FC = () => {
  const match = useRouteMatch();
  const { data, loading } = useFindRoleQuery({
    variables: match.params as { id: string },
    skip: !get(match, 'params.id'),
  });

  if (loading) {
    return <Spin />;
  }
  return <Save data={data?.role as RoleManageFragment}></Save>;
};

export default Item;
