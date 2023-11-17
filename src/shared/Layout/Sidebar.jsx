import { ContactsOutlined, IdcardOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { Grid, Menu } from 'antd';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to={'profile'}>Профиль</Link>, '1', <IdcardOutlined />),
  getItem(<Link to={'groups'}>Группы</Link>, '4', <TeamOutlined />),
  getItem(<Link to={'my-groups'}>Мои группы</Link>, '2', <ContactsOutlined />),
  getItem(<Link to={'settings'}>Настройки</Link>, '3', <SettingOutlined />),
];

function Sidebar({ open, onClickMenu }) {
  const breakPoint = Grid.useBreakpoint();
  const conditionalFunc = !breakPoint.sm ? onClickMenu : () => {};

  return (
    <div
      className={'menu_wrapper'}
      style={{
        position: !breakPoint.sm ? 'absolute' : '',
        transform:
          !breakPoint.sm && open ? 'translateX(0px)' : !breakPoint.sm && 'translateX(-80px)',
        height: 'calc(100% - 70px)',
        width: !breakPoint.lg && open ? '260px' : !breakPoint.lg && '80px',
      }}
    >
      <Menu
        onClick={conditionalFunc}
        style={{
          backgroundColor: '#00192e',
          height: '100%',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        theme={'dark'}
        inlineCollapsed={!breakPoint.lg && !open && breakPoint.sm}
      />
    </div>
  );
}

export default Sidebar;
