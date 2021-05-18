import { Spin } from 'antd';
import { FC } from 'react';
import { useFindRouterQuery } from '../../generator/auth-center.operation';
import { useRouteMatch } from 'react-router-dom';
import Save from '../../components/router/save';
import { get } from 'lodash';
import { RouterFragment } from '../../generator/auth-center';

const Item: FC = () => {
  const match = useRouteMatch();
  const { data, loading } = useFindRouterQuery({
    variables: match.params as { id: string },
    skip: !get(match, 'params.id'),
  });

  if (loading) {
    return <Spin />;
  }
  return <Save data={data?.router as RouterFragment}></Save>;
};

export default Item;
