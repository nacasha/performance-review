import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { navbarActions } from '@nacasha/fluentui-kit.ui.navbar';
import { Stack, Text } from '@fluentui/react';

export const DashboardIndexPage: FC = () => {
  useEffect(
    () => {
      navbarActions.setBreadcrumbItems([
        { key: 'dashboard', text: 'Dashboard', isCurrentItem: true },
      ]);
    },
    [],
  );

  return (
    <Stack tokens={{ padding: 18 }}>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Text variant="large">Welcome, Izal Fathoni</Text>
    </Stack>
  );
};
