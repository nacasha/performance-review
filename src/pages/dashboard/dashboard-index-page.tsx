import { FC, useEffect } from 'react';
import { Stack, Text } from '@fluentui/react';
import { navbarActions } from '@nacasha/fluentui-kit.ui.navbar';

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
      <Text variant="large">Welcome, Izal Fathoni</Text>
    </Stack>
  );
};
