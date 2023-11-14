import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  FilterOutlined,
  FrownOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Grid, Input } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../../shared/PageHeader/index.jsx';

const GroupInfoPage = () => {
  const breakpoints = Grid.useBreakpoint();
  const [searchParam, setSearchParam] = useState('');
  const params = useParams();

  console.log(params);

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

  return (
    <>
      <PageHeader
        title={`Группа ${params.id}`}
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
    </>
  );
};

export default GroupInfoPage;
