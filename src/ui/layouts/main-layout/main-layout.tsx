import { FC, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Routes } from 'src/constants';
import { useAuthStore } from 'src/store/auth-store';

import { MainLayoutNavbar } from './main-layout-navbar';
import { MainLayoutSidebar } from './main-layout-sidebar';

export const MainLayout: FC = ({ children }) => {
  const history = useHistory();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(
    () => {
      if (!isLoggedIn()) {
        history.push(Routes.AUTH_LOGIN_PAGE);
      }
    },
    [],
  );

  if (!isLoggedIn()) return null;

  return (
    <>
      <MainLayoutNavbar />
      <MainLayoutSidebar />
      {children}
    </>
  );
};
