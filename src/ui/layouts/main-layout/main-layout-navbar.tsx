import { FC, useMemo } from 'react';
import { INavbarUserMenuProps, Navbar, NavbarUserMenu } from '@nacasha/fluentui-kit.ui.navbar';
import { useHistory } from 'react-router';

import { Routes } from 'src/constants';
import { useAuthStore } from 'src/store/auth-store';

export const MainLayoutNavbar: FC = () => {
  const clearData = useAuthStore((state) => state.clearData);
  const history = useHistory();

  const handleLogout = () => {
    clearData();
    history.push(Routes.AUTH_LOGIN_PAGE);
  };

  const menu = useMemo<INavbarUserMenuProps['menu']>(
    () => ({
      items: [
        { key: 'logout', text: 'Logout', iconProps: { iconName: 'SignOut' }, onClick: handleLogout },
      ],
    }),
    [],
  );

  return (
    <Navbar>
      <NavbarUserMenu
        personaText="Izal Fathoni"
        personaSecondaryText="Programmer"
        menu={menu}
      />
    </Navbar>
  );
};
