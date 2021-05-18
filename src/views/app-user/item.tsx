import { Spin } from 'antd';
import { FC } from 'react';
import { useFindAppUserQuery } from 'generator/auth-center.operation';
import { useRouteMatch } from 'react-router-dom';
import Save from 'components/app-user/save';
import { AppUserFragment } from 'generator/auth-center';
import { get } from 'lodash';

const Item: FC = () => {
  const match = useRouteMatch();
  const { data, loading } = useFindAppUserQuery({
    variables: match.params as { id: string },
    skip: !get(match, 'params.id'),
  });

  if (loading) {
    return <Spin />;
  }
  return <Save data={data?.appUser as AppUserFragment}></Save>;
};

export default Item;
