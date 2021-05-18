import { FC } from 'react';
import { Button, Tabs } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import { PlusOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import RoleProtable from './role-protable';
import RoleGroupProtable from './role-group-protable';
import { useImmer } from 'use-immer';
import { AppUserRoleAppUserIdFragment, Maybe } from 'generator/auth-center';
import { union } from 'lodash';
const { TabPane } = Tabs;

interface IRoleGroupExpandProp {
  appUserRoleAppUserId?: Maybe<Array<AppUserRoleAppUserIdFragment>>;
  onFinish?: (values: Maybe<Array<AppUserRoleAppUserIdFragment>>) => void;
}

const CheckRoleAndGroup: FC<IRoleGroupExpandProp> = (props) => {
  const { t } = useTranslation();
  const [roleSelectedRows] = useImmer(
    props.appUserRoleAppUserId?.filter((p) => p.roleType === 'role')
  );
  const [roleGroupSelectedRows] = useImmer(
    props.appUserRoleAppUserId?.filter((p) => p.roleType === 'roleGroup')
  );

  const [roleProSel, setRoleProSel] = useImmer<
    Array<AppUserRoleAppUserIdFragment>
  >([]);

  return (
    <ModalForm<{
      name: string;
      company: string;
    }>
      title={t('checkRole')}
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
        props.onFinish && props.onFinish(roleProSel);
        setRoleProSel((draft) => []);
        return true;
      }}
    >
      <Tabs defaultActiveKey="role">
        <TabPane
          tab={
            <span>
              <UserOutlined />
              {t('role')}
            </span>
          }
          key="role"
        >
          <RoleProtable
            selectedRows={union(
              roleSelectedRows,
              roleProSel.filter((p) => p.roleType === 'role')
            )}
            emitProTableSel={(values) =>
              setRoleProSel((draft) => union(draft, values))
            }
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <TeamOutlined />
              {t('roleGroup')}
            </span>
          }
          key="roleGroup"
        >
          <RoleGroupProtable
            selectedRows={union(
              roleGroupSelectedRows,
              roleProSel.filter((p) => p.roleType === 'roleGroup')
            )}
            emitProTableSel={(values) =>
              setRoleProSel((draft) => union(draft, values))
            }
          />
        </TabPane>
      </Tabs>
    </ModalForm>
  );
};

export default CheckRoleAndGroup;
