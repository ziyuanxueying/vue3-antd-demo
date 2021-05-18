import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppUserRoleTypeIdFragment, Maybe } from '../../generator/auth-center';
import { useImmer } from 'use-immer';
import { ModalForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CheckAppUserList from './check-app-user-list';
import { union } from 'lodash';

interface ICheckAppUserProp {
  appUserRoleTypeId?: Maybe<Array<AppUserRoleTypeIdFragment>>;
  onFinish?: (values: Maybe<Array<AppUserRoleTypeIdFragment>>) => void;
}

const CheckAppUser: FC<ICheckAppUserProp> = (props) => {
  const { t } = useTranslation();

  const [proSel, setProSel] = useImmer<Array<AppUserRoleTypeIdFragment>>([]);

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title={t('checkAppUser')}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          {t('addTo')}
        </Button>
      }
      modalProps={
        {
          // onCancel: () => console.log('run'),
        }
      }
      onFinish={async (values) => {
        props.onFinish && props.onFinish(proSel);
        setProSel((draft) => []);
        return true;
      }}
    >
      <CheckAppUserList
        selectedRows={union(props.appUserRoleTypeId, proSel)}
        emitProTableSel={(values) => setProSel((draft) => values)}
      />
    </ModalForm>
  );
};

export default CheckAppUser;
