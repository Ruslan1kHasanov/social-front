import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GroupsPage, MyGroupsPage } from '../pages/groups';
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
        element: <MyGroupsPage />,
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
