import { FilterOutlined, FrownOutlined, TrophyOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Dropdown, Grid, Input, List } from 'antd';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EditRatingDialog from '../../../features/student';
import PageHeader from '../../../shared/PageHeader/index.jsx';

const GroupInfoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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

  const students = [
    {
      id: 1,
      name: 'Данилов Дмитрий',
      email: 'randomemail@gmail.ru',
      rating: 100,
    },
    {
      id: 2,
      name: 'Лавров Иван',
      email: 'randomemail@gmail.ru',
      rating: 42,
      description: 'Я студент ляляля',
    },
    {
      id: 3,
      name: 'Спиридонова Василиса',
      email: 'randomemail@gmail.ru',
      rating: 51,
      description: 'Я студент ляляля',
    },
    {
      id: 4,
      name: 'Мещеряков Тимофей',
      email: 'randomemail@gmail.ru',
      rating: 63,
      description: 'Я студент ляляля',
    },
    {
      id: 5,
      name: 'Петров Роман',
      email: 'randomemail@gmail.ru',
      rating: 236,
      description: 'Я студент ляляля',
    },
    {
      id: 6,
      name: 'Дроздов Григорий',
      email: 'randomemail@gmail.ru',
      rating: 874,
      description: 'Я студент ляляля',
    },
    {
      id: 7,
      name: 'Шубина Сара',
      email: 'randomemail@gmail.ru',
      rating: 425,
      description: 'Я студент ляляля',
    },
    {
      id: 8,
      name: 'Осипов Матвей',
      email: 'randomemail@gmail.ru',
      rating: 24,
      description: 'Я студент ляляля',
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
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={students}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                }
                title={
                  <span>
                    {item.name}
                    {` `}
                    <span style={{ fontWeight: 400 }}>({item.email})</span>
                    {` `}
                    <span
                      style={{
                        color: item.rating < 200 ? 'red' : item.rating < 500 ? 'orange' : 'green',
                      }}
                    >
                      {item.rating}
                    </span>
                  </span>
                }
              />
              <Link style={{ margin: 10 }} to={`${item.id}`} key={'req'}>
                открыть профиль
              </Link>
              <Button type="primary" onClick={showModal}>
                изменить рейтинг
              </Button>
            </List.Item>
          )}
        />
        <EditRatingDialog open={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} />
      </Card>
    </>
  );
};

export default GroupInfoPage;
