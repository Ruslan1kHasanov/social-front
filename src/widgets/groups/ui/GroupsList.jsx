import { Button, Card, List } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';
import { groupsApi } from '../../../entities/groups/api/groups.api';

const GroupsList = ({ list }) => {
  const { useGetBooksQuery } = groupsApi;
  const data = useGetBooksQuery();
  console.log(data);
  // тут будет хук на получение объекта пользователя
  const is_admin = true;
  return (
    <Card className={'groups_list_container'}>
      <List
        className={'groups_list_container__list'}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
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
