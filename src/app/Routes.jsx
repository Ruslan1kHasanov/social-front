import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GroupInfoPage, GroupsPage, MyGroupsPage } from '../pages/groups';
import { StudentPage } from '../pages/student/ui/StudentPage';
import { UserPage } from '../pages/user/ui/UserPage';
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
        path: 'my-groups/:id',
        element: <GroupInfoPage />,
      },
      {
        path: 'my-groups/:id/:id_student',
        element: <StudentPage />,
      },
      {
        path: 'profile',
        element: <UserPage />,
      },
      {
        path: 'settings',
        element: <div>settings</div>,
      },
    ],
  },
]);
