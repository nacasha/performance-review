import { FC, useMemo } from 'react';
import { INavbarUserMenuProps, Navbar, NavbarUserMenu } from '@nacasha/fluentui-kit.ui.navbar';

export const MainLayoutNavbar: FC = () => {
  const menu = useMemo<INavbarUserMenuProps['menu']>(
    () => ({
      items: [
        { key: 'logout', text: 'Logout', iconProps: { iconName: 'SignOut' } },
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
