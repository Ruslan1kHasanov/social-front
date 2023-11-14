import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  FilterOutlined,
  FrownOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Grid, Input } from 'antd';
import { useState } from 'react';
import PageHeader from '../../../shared/PageHeader/index.jsx';
import GroupsList from '../../../widgets/groups';

const GroupsPage = () => {
  const breakpoints = Grid.useBreakpoint();
  const [searchParam, setSearchParam] = useState('');

  const items = [
    {
      key: '1',
      label: 'старший курс',
      icon: <ArrowUpOutlined />,
    },
    {
      key: '2',
      label: 'младший курс',
      icon: <ArrowDownOutlined />,
    },
    {
      key: '3',
      label: 'высокий рейтинг',
      icon: <TrophyOutlined />,
    },
    {
      key: '4',
      label: 'низкий рейтинг',
      icon: <FrownOutlined />,
    },
  ];

  const list = [
    {
      id: 1,
      name: 'МТ-402',
      faculty: 'Математический факультет',
      year: 4,
    },
    {
      id: 2,
      name: 'МТ-401',
      faculty: 'Математический факультет',
      year: 4,
    },
    {
      id: 3,
      name: 'ИТ-303',
      faculty: 'Инфофак факультет',
      year: 3,
    },
  ];

  const filteredList = !searchParam
    ? list
    : list.filter((el) => {
        let pos = -1;
        while ((pos = el.name.toLowerCase().indexOf(searchParam.toLowerCase(), pos + 1)) !== -1) {
          return true;
        }
      });

  return (
    <>
      <PageHeader
        title={'Группы'}
        actionSlot={[
          <Input.Search
            key={'search'}
            placeholder={'Поиск групп'}
            value={searchParam}
            onChange={(e) => {
              setSearchParam(() => e.target.value);
            }}
          />,
          <Dropdown
            key={'drop_down'}
            menu={{ items }}
            placement={'bottomRight'}
            trigger={['click']}
          >
            <Button
              type={'primary'}
              icon={<FilterOutlined />}
              style={breakpoints.xs && { padding: '7px' }}
            >
              {!breakpoints.xs && 'Сортировать'}
            </Button>
          </Dropdown>,
        ]}
      />
      <GroupsList list={filteredList} />
    </>
  );
};

export default GroupsPage;
