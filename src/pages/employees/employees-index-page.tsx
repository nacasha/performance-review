import { FC } from 'react';
import { Stack } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { EmployeesDetailsList } from 'src/ui/modules/employees-details-list';

export const EmployeesIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'employees', text: 'Employees', isCurrentItem: true },
  ]);

  return (
    <Stack tokens={{ padding: 20 }} style={{ height: '100%' }}>
      <EmployeesDetailsList
        items={[]}
        totalItems={0}
      />
    </Stack>
  );
};
