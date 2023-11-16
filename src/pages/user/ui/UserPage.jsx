import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, List } from 'antd';
import { SpaceContext } from 'antd/es/space';
import './index.scss';
const { Meta } = Card;

export const UserPage = () => (
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
      <Card title="Информация" bordered={false}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta magnam
          repellendus eligendi itaque at quisquam nisi corrupti nemo tempora et quo rem quis,
          voluptate vel hic eaque iusto consequatur!
        </p>
      </Card>
    </div>
  </>
);
