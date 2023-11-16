import { FilterOutlined, FrownOutlined, TrophyOutlined } from '@ant-design/icons';
import { Button, Dropdown, Grid, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../../shared/PageHeader/index.jsx';
import { StudentsList } from '../../../widgets/users/ui/StudentsList.jsx';

const GroupInfoPage = () => {
  const breakpoints = Grid.useBreakpoint();
  const [searchParam, setSearchParam] = useState('');
  const params = useParams();

  console.log(params);

  const items = [
    {
      key: '1',
      label: 'высокий рейтинг',
      icon: <TrophyOutlined />,
    },
    {
      key: '2',
      label: 'низкий рейтинг',
      icon: <FrownOutlined />,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);

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
      <StudentsList data={data} />
    </>
  );
};

export default GroupInfoPage;
