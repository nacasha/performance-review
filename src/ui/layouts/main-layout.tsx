import { FC } from 'react';

import { MainLayoutNavbar } from './main-layout-navbar';
import { MainLayoutSidebar } from './main-layout-sidebar';

export const MainLayout: FC = ({ children }) => (
  <>
    <MainLayoutNavbar />
    <MainLayoutSidebar />
    {children}
  </>
);
