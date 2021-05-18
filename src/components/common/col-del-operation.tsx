import { FC } from 'react';
import { Button, Popconfirm } from 'antd';
import { useTranslation } from 'react-i18next';

interface IColDelOperationProp {
  onDelete: () => void;
  showConfirm: boolean;
}
/**
 * 删除列渲染
 * @returns
 */
const ColDelOperation: FC<IColDelOperationProp> = (props) => {
  const { t } = useTranslation();

  return props.showConfirm ? (
    <Popconfirm
      title={t('sureDelete')}
      onConfirm={async () => {
        props.onDelete && props.onDelete();
      }}
    >
      <Button type="link" size="small">
        {t('delete')}
      </Button>
    </Popconfirm>
  ) : (
    <Button
      type="link"
      size="small"
      onClick={async () => {
        props.onDelete && props.onDelete();
      }}
    >
      {t('delete')}
    </Button>
  );
};

export default ColDelOperation;
