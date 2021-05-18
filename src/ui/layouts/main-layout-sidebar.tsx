import { FC } from 'react';
import { INavProps, Nav } from '@fluentui/react';
import { Sidebar } from '@nacasha/fluentui-kit.ui.sidebar';
import { useHistory } from 'react-router';

import { Routes } from 'src/lib/constants';

export const MainLayoutSidebar: FC = () => {
  const history = useHistory();

  const menu: INavProps['groups'] = [
    {
      name: 'Menu',
      links: [
        {
          key: Routes.DASHBOARD_INDEX_PAGE,
          url: Routes.DASHBOARD_INDEX_PAGE,
          name: 'Dashboard',
          icon: 'HomeSolid',
        },
        {
          key: Routes.EMPLOYEES_INDEX_PAGE,
          url: Routes.EMPLOYEES_INDEX_PAGE,
          name: 'Employees',
          icon: 'People',
        },
        {
          key: '/assignments',
          url: '/assignments',
          name: 'Assignments',
          icon: 'DocLibrary',
        },
        {
          key: '/reviews',
          url: '/reviews',
          name: 'Reviews',
          icon: 'CannedChat',
        },
        {
          key: '/questions',
          url: '/questions',
          name: 'Questions',
          icon: 'Feedback',
        },
      ],
    },
  ];

  const handleLinkClick: INavProps['onLinkClick'] = (ev, item) => {
    ev?.preventDefault();

    if (item) {
      history.push(item.url);
    }
  };

  return (
    <Sidebar headerText="Performance Review">
      <Nav groups={menu} onLinkClick={handleLinkClick} />
    </Sidebar>
  );
};
