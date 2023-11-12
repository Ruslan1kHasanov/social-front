import { Button, Card, List } from 'antd';
import './index.scss';

const GroupsList = ({ list }) => {
  return (
    <Card className={'groups_list_container'}>
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type={'primary'} key={'req'}>
                запросить контроль
              </Button>,
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
