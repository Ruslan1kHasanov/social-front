import { createBrowserRouter, Navigate } from 'react-router-dom';
import GroupsPage from '../pages/groups';
import Layout from '../shared/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={'/groups'} />,
      },
      {
        path: 'groups',
        element: <GroupsPage />,
      },
      {
        path: 'my-groups',
        element: <div>my-groups</div>,
      },
      {
        path: 'profile',
        element: <div>profile</div>,
      },
      {
        path: 'settings',
        element: <div>settings</div>,
      },
    ],
  },
]);
