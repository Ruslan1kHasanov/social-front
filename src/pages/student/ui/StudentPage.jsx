import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, List } from 'antd';
import { SpaceContext } from 'antd/es/space';
import './index.scss';
const { Meta } = Card;

const data = [
  {
    title: <span className="decrement">-5 очков рейтинга</span>,
    description: 'Опоздание более чем на 15 минут',
  },
  {
    title: <span className="increment">+50 очков рейтинга</span>,
    description: 'Участие в олимпиаде',
  },
  {
    title: <span className="decrement">-10 очков рейтинга</span>,
    description: 'Отсутствие на паре',
  },
  {
    title: <span className="increment">+30 очков рейтинга</span>,
    description: 'Своевременная сдача дз',
  },
  {
    title: <span className="increment">+50 очков рейтинга</span>,
    description: 'Посещение мероприятия',
  },
];

export const StudentPage = () => (
  <>
    <div style={{ display: 'flex' }} className="student-main-container">
      <Card
        style={{
          width: 500,
        }}
        cover={<img alt="example" src="https://i.pravatar.cc/300" />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title={
            <span>
              Романов Николай Ильич <br /> romanov345@gmail.com
            </span>
          }
        />
      </Card>
      <div className="student-info-container">
        <Card
          title="Информация"
          bordered={false}
          style={{
            height: 150,
          }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta magnam
            repellendus eligendi itaque at quisquam nisi corrupti nemo tempora et quo rem quis,
            voluptate vel hic eaque iusto consequatur!
          </p>
        </Card>
        <Card style={{}}>
          <Meta title={<span className="history">История социального рейтинга</span>} />
          <List
            style={{ overflowY: 'scroll', height: 500 }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={<p>{item.title}</p>}
                  description={<p>{item.description}</p>}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    </div>
  </>
);
