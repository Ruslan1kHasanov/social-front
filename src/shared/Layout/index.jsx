import { LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Grid, Space } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/soc_logo.svg';
import Sidebar from './Sidebar';
import './styles.scss';

function Layout() {
  if (!sessionStorage.getItem('token') && import.meta.env.VITE_BASE_URL === 'prod') {
    document.location.replace(import.meta.env.VITE_BASE_URL + '/auth');
  }
  const [isSideMenuOpen, toggleSideMenu] = useState(false);
  const breakpoint = Grid.useBreakpoint();
  const onToggleSideMenu = () => toggleSideMenu((prev) => !prev);

  const items = [
    {
      key: '1',
      label: (
        <Link style={{ margin: 10 }} to={'profile'} key={'req'}>
          Профиль
        </Link>
      ),
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: (
        <Link style={{ margin: 10 }} to={'settings'} key={'req'}>
          Настройки
        </Link>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: '3',
      danger: true,
      label: 'Выход',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div className="app_wrapper">
      <header className="content_wrapper__header">
        {!breakpoint.sm && (
          <Button
            icon={<MenuOutlined />}
            type={'link'}
            style={{ color: 'white' }}
            onClick={onToggleSideMenu}
          />
        )}
        {<img src={logo} />}
        <div className="content_wrapper__header_icon">
          <Dropdown
            trigger={['click']}
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar src={`https://i.pravatar.cc/300`} size="large"></Avatar>
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
      <div className="content_wrapper">
        <aside className="content_wrapper__sidebar">
          <Sidebar open={isSideMenuOpen} onClickMenu={onToggleSideMenu} />
        </aside>
        <main className="content_wrapper__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
