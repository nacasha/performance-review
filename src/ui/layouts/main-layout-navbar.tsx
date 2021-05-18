import { FC } from 'react';
import { Navbar, NavbarItem, NavbarUserMenu } from '@nacasha/fluentui-kit.ui.navbar';

export const MainLayoutNavbar: FC = () => (
  <Navbar>
    <NavbarItem iconProps={{ iconName: 'Help' }} />
    <NavbarItem>Help</NavbarItem>
    <NavbarUserMenu
      personaText="Izal Fathoni"
      personaSecondaryText="Programmer"
    />
  </Navbar>
);
