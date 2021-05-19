import { FC } from 'react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { EmployeeDetailsList } from 'src/ui/modules/employee/employee-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const EmployeesIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'employees', text: 'Employees', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <EmployeeDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
