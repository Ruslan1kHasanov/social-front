import { MenuOutlined } from '@ant-design/icons';
import { Button, Grid } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/soc_logo.svg';
import Sidebar from './Sidebar';
import './styles.scss';

function Layout() {
  const [isSideMenuOpen, toggleSideMenu] = useState(false);
  const breakpoint = Grid.useBreakpoint();
  const onToggleSideMenu = () => toggleSideMenu((prev) => !prev);

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
