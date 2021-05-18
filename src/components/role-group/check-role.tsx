import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  RoleGroupItemRoleGroupIdFragment,
  Maybe,
  AppUserRoleAppUserIdFragment,
} from '../../generator/auth-center';
import { useImmer } from 'use-immer';
import { ModalForm } from '@ant-design/pro-form';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { union } from 'lodash';
import RoleProtable from '../app-user/role-protable';

interface ICheckAppUserProp {
  roleGroupItemRoleGroupId?: Maybe<Array<RoleGroupItemRoleGroupIdFragment>>;
  onFinish?: (values: Maybe<Array<RoleGroupItemRoleGroupIdFragment>>) => void;
}

const CheckAppUser: FC<ICheckAppUserProp> = (props) => {
  const { t } = useTranslation();

  const [proSel, setProSel] = useImmer<Array<RoleGroupItemRoleGroupIdFragment>>(
    []
  );

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
      <RoleProtable
        selectedRows={union(props.roleGroupItemRoleGroupId, proSel).map((p) => {
          return {
            id: p.id,
            roleType: 'role',
            typeId: p.roleIdObj?.id,
          } as AppUserRoleAppUserIdFragment;
        })}
        emitProTableSel={(values) =>
          setProSel((draft) => {
            return values.map((p) => {
              return {
                id: p.id,
                roleIdObj: {
                  id: p.typeId,
                  roleCode: p.typeIdModel?.code,
                  roleName: p.typeIdModel?.name,
                },
              };
            });
          })
        }
      />
    </ModalForm>
  );
};

export default CheckAppUser;
