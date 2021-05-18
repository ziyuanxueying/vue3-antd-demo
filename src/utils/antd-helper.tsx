import { DocumentNode } from 'graphql';
import i18n from '../plugins/i18next';
import {
  get,
  isString,
  toString,
  isArray,
  difference,
  keys,
  set,
  toInteger,
  find,
} from 'lodash';
import { ColumnType } from 'antd/lib/table';
import {
  Tooltip,
  Input,
  Space,
  Button,
  notification,
  PageHeader,
  message,
} from 'antd';
import { produce } from 'immer';
import {
  FilterDropdownProps,
  SorterResult,
  SortOrder,
  TablePaginationConfig,
} from 'antd/lib/table/interface';
import { Maybe } from 'graphql/jsutils/Maybe';
import {
  SearchOutlined,
  CloseCircleOutlined,
  WarningOutlined,
  ExclamationCircleOutlined,
  RedoOutlined,
  SettingOutlined,
  ColumnHeightOutlined,
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useImmer } from 'use-immer';
import { ProColumns, ProColumnType } from '@ant-design/pro-table';

// #region table helper
export type WhereType =
  | '_like'
  | '_between'
  | '_gte'
  | '_gt'
  | '_lt'
  | '_lte'
  | '_eq'
  | '_not';
export interface ITablePagination {
  current: number;
  pageSize: number;
  order: Maybe<string[][]>;
  filters: Maybe<Object>;
}

/**
 * 根据table filters 转化为 where
 * @param keysFilter
 * @param whereType
 * @returns
 */
export const filtersToWhere = <T,>(
  keysFilter: Maybe<Object[]>,
  whereType: {
    [p in keyof T]: WhereType;
  }
): Maybe<Object> => {
  if (!keysFilter) {
    return undefined;
  }
  const where = {};
  keysFilter.forEach((k) => {
    keys(k)
      .filter((p) => get(k, p) && !['current', 'pageSize'].includes(p))
      .forEach((p) => {
        let value = get(k, p);
        if (isArray(value) && value.length === 1) {
          value = value[0];
        }
        const whereItem = get(whereType, p);
        if (whereItem === '_like') {
          value = `%${value}%`;
        }
        set(where, p, whereItem ? { [whereItem]: value } : value);
      });
  });
  return where;
};

export const localChange = <T,>(
  dataSource: Maybe<Array<any>>,
  pagination: TablePaginationConfig,
  filters: Record<string, (boolean | React.Key)[] | null>,
  sorter: SorterResult<T> | SorterResult<T>[],
  whereType?: {
    [p in keyof T]: WhereType;
  }
) => {
  const fkey = keys(filters).filter((p) => filters[p]);
  return dataSource?.filter((p) => {
    const item = find(fkey, (k) => {
      const value = toString((get(filters, k) as Array<string>)[0]);
      const source = toString(get(p, k));
      // 求反 如果存在则过滤掉
      if (!get(whereType, k) || ['_eq', '_like'].includes(get(whereType, k))) {
        return !source.includes(value);
      } else if (!get(whereType, k) || get(whereType, k) === '_not') {
        return source.includes(value);
      }
    });
    return item === undefined;
  });
};

/**
 * 根据查询类型反向生成列
 * @param param
 * @returns
 */
export const generatorColumns = <T,>(
  documentNode: DocumentNode,
  setColumns?: Array<ColumnType<T>>,
  delColumns?: Array<keyof T>
): (ProColumns<T> | ColumnType<T>)[] => {
  let stringList = findFragmentDefinition<T>(documentNode);
  if (delColumns) {
    stringList = difference(stringList, delColumns as any);
  }
  if (setColumns) {
    stringList = changeColumns(
      stringList as Array<keyof T | ColumnType<T>>,
      setColumns
    );
  }
  return createColumns<T>(...stringList);
};

/**
 * 根据operation生成columns array
 * @param documentNode
 * @returns
 */
export const findFragmentDefinition = <T,>(
  documentNode: DocumentNode
): Array<keyof T | ColumnType<T>> => {
  const definitionNode = documentNode.definitions.find(
    (p) => p.kind === 'FragmentDefinition'
  );
  if (!definitionNode) {
    throw new Error('没有找到[FragmentDefinition]请确认！');
  }
  const value = get(definitionNode, 'selectionSet.selections');
  return value?.map((p: any) => get(p, 'name.value'));
};

/**
 * 修正类型
 * @param columns
 * @param setState
 * @returns
 */
export const changeColumns = <T,>(
  columns: Array<keyof T | ColumnType<T>>,
  setState: Array<ColumnType<T>>
): Array<keyof T | ColumnType<T>> => {
  return produce(columns, (draft) => {
    setState.forEach((p) => {
      const inc = draft.findIndex((x) => x === p.key);
      inc > -1 ? (draft[inc] = p as any) : draft.push(p as any);
    });
  });
};

const columnsDefault = <T,>(key: string): ProColumnType<T> | ColumnType<T> => {
  return {
    title: i18n.t(key.toString()),
    dataIndex: key.toString(),
    sorter: true,
    key: key.toString(),
  };
};

const columnsTypeDefault = <T,>(
  col: ColumnType<T>
): ProColumnType<T> | ColumnType<T> => {
  return {
    title: i18n.t(toString(col.title || col.key)),
    dataIndex: toString(col.key),
    sorter: true,
    ...col,
  };
};

/**
 * 自动生成列
 * @param key to dataIndex
 * @returns
 */
export const createColumns = <T,>(
  ...key: Array<keyof T | ColumnType<T>>
): (ProColumns<T> | ColumnType<T>)[] =>
  key.map((p) =>
    isString(p) ? columnsDefault<T>(p) : columnsTypeDefault(p as ColumnType<T>)
  );

/**
 * ellipsis title to tooltip
 * @returns
 */
export const defaultEllipsis = {
  ellipsis: {
    showTitle: false,
  },
  render: (value: any) => (
    <Tooltip placement="topLeft" title={value}>
      {value}
    </Tooltip>
  ),
};

/**
 * table sort 转 order
 * @param sorter
 */
export const sortToOrder = <T,>(
  sorter: SorterResult<T> | SorterResult<T>[]
): Maybe<string[][]> => {
  if (!isArray(sorter) && !sorter.order) {
    return undefined;
  }
  const sorterList = isArray(sorter) ? sorter : [sorter];
  return sorterList
    .filter((p) => p.columnKey)
    .map((p) => [toString(p.columnKey), 'ascend' === p.order ? 'ASC' : 'DESC']);
};

/**
 * pro tbale sort
 * @param sort
 */
export const proSortToOrder = (sort: Record<string, SortOrder>) => {
  if (!sort) {
    return undefined;
  }
  const keystrings = keys(sort);
  if (keystrings.length <= 0) {
    return undefined;
  }
  return [
    [keystrings[0], 'ascend' === get(sort, keystrings[0]) ? 'ASC' : 'DESC'],
  ];
};

export interface IKeysFilter {
  dataIndex: string;
  searchValue: Maybe<(string | Date | Object)[]>;
  queryItem: Maybe<Object>;
}

/**
 * 自定义模糊筛选菜单
 */
export const getColumnSearch = <T,>(dataIndex?: keyof T) => {
  /**
   * 文本控件
   */
  let refSearchInput: Maybe<Input> = undefined;
  return {
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      filters,
    }: FilterDropdownProps) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => (refSearchInput = node)}
          placeholder={`${i18n.t('fuzzyMatching')}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => {
            console.log(selectedKeys);
            confirm();
          }}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            {i18n.t('search')}
          </Button>
          <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
            {i18n.t('reset')}
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => confirm({ closeDropdown: false })}
          >
            {i18n.t('filter')}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilterDropdownVisibleChange: (visible: any) =>
      visible && setTimeout(() => refSearchInput?.select(), 100),
    // 自定义列render
    render: (text: string) => {
      if (refSearchInput) {
        return (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[get(refSearchInput, 'props.value')]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        );
      } else {
        return text;
      }
    },
  };
};

/**
 * 判断当前页码
 * @param total
 * @param current
 * @param pageSize
 * @param delNum 删除数量
 * @returns
 */
export const calcCurrent = (
  total: Maybe<number>,
  current: number = 1,
  pageSize: number = 10,
  delNum: number = 0
): number => {
  let currentDiff = Math.floor(
    ((total || 0) + pageSize - 1 - delNum) / pageSize
  );
  if (currentDiff > current) {
    return current || 1;
  }
  return currentDiff || 1;
};

/**
 * use分页hook
 * @param paginationParam
 * @param whereModel
 * @returns
 */
export function usePagination(
  whereModel: any,
  paginationParam: ITablePagination = {
    current: 1,
    pageSize: 10,
    order: undefined,
    filters: undefined,
  }
) {
  const [pagination, setPagination] = useImmer<ITablePagination>({
    ...paginationParam,
  });

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, (boolean | React.Key)[] | null>,
    sorter: SorterResult<any> | SorterResult<any>[]
  ) => {
    setPagination((draft) => {
      draft.current = toInteger(pagination.current);
      draft.pageSize = toInteger(pagination.pageSize);
      draft.order = sortToOrder(sorter);
      draft.filters = filtersToWhere([filters], whereModel);
    });
  };
  return { pagination, handleTableChange };
}
/**
 * table header
 * @returns
 */
export function tableheaderComponent() {
  return (
    <PageHeader
      className="site-page-header"
      extra={[
        <Button key="add" type="primary">
          {i18n.t('add')}
        </Button>,
        <Tooltip title={i18n.t('refetch')}>
          <Button style={{ border: 0 }} icon={<RedoOutlined />} />
        </Tooltip>,
        <Tooltip title={i18n.t('density')}>
          <Button style={{ border: 0 }} icon={<ColumnHeightOutlined />} />
        </Tooltip>,
        <Tooltip title={i18n.t('setting')}>
          <Button style={{ border: 0 }} icon={<SettingOutlined />} />
        </Tooltip>,
      ]}
    />
  );
}
// #endregion

// #region 控件默认值
export const defaultPagination = {
  hideOnSinglePage: true,
  showSizeChanger: true,
  showQuickJumper: true,
};
// #endregion

// #region error
export const gqlErrorMessage = (error: any) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    error?.networkError?.statusCode === 400
  ) {
    return message.error(
      Array.from(
        new Set(
          get(error, 'networkError.result.errors').map((p: any) => p.message)
        )
      ).join('\r\n')
    );
  }
  return message.error(error.message || error.networkError.message);
};
// #endregion

// #region Notification helper
/**
 * error 错误提示
 */
export const openNotification = (
  title: string,
  message: string,
  type: 'error' | 'warning' | 'message' = 'error'
) => {
  let icon = <CloseCircleOutlined />;
  if (type === 'warning') {
    icon = <WarningOutlined />;
  } else if (type === 'message') {
    icon = <ExclamationCircleOutlined />;
  }
  notification.open({
    message: title,
    description: message,
    icon,
  });
};
// #endregion
