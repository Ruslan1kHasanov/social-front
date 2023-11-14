import { Button, Card, List } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const GroupsList = ({ list }) => {
  // тут будет хук на получение объекта пользователя
  const is_admin = true;

  return (
    <Card className={'groups_list_container'}>
      <List
        style={{
          padding: '0px',
        }}
        className={'groups_list_container__list'}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            className={'groups_list_container__list__item'}
            key={item.id}
            actions={[
              is_admin ? (
                <Link to={item.id} key={'req'}>
                  информация о группе
                </Link>
              ) : (
                <Button type={'link'} key={'req'}>
                  запросить контроль
                </Button>
              ),
            ]}
          >
            <List.Item.Meta
              title={item.name}
              description={
                <>
                  <span>факультет/институт: </span>
                  <b>{item.faculty}</b>
                </>
              }
            />
          </List.Item>
        )}
      ></List>
    </Card>
  );
};

export default GroupsList;
