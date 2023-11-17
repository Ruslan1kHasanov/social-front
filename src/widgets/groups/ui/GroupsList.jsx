import { Button, Card, List, Modal } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

const GroupsList = ({ list }) => {
  // тут будет хук на получение объекта пользователя
  const is_admin = false;
  const params = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const onCloseModal = () => setModalOpen(false);
  const onConfirmModal = () => console.log('req');
  const onClickRequestControl = (item) => {
    setSelectedGroup(item);
    setModalOpen(true);
  };

  return (
    <>
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
                params.pathname !== '/groups' || is_admin ? (
                  <Link to={`${item.id}`} key={'req'}>
                    информация о группе
                  </Link>
                ) : (
                  <Button type={'link'} key={'req'} onClick={() => onClickRequestControl(item)}>
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
                    <b>{item.faculty_name}</b>
                  </>
                }
              />
            </List.Item>
          )}
        ></List>
      </Card>
      {!is_admin && (
        <Modal
          open={isModalOpen}
          centered
          onCancel={onCloseModal}
          onOk={onConfirmModal}
          title={'Подтвердите действие'}
          okText={'Запросить'}
          cancelText={'Отмена'}
        >
          Запросить у администрации доступ к группе <b>{selectedGroup?.name}</b>
        </Modal>
      )}
    </>
  );
};

export default GroupsList;
