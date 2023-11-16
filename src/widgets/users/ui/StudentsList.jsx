import { Avatar, Card, List } from 'antd';

export const StudentsList = ({ data }) => {
  return (
    <Card className={'group_info_list_container'}>
      <List
        className={'list'}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      />
    </Card>
  );
};
