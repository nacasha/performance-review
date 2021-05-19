import { FC, useCallback } from 'react';
import { Text } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';
import { EmployeeForm, IEmployeeFormProps } from 'src/ui/modules/employee/employee-form';

export const EmployeesAddPage: FC = () => {
  const handleSubmit = useCallback<IEmployeeFormProps['onSubmit']>(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(), 5000);
    }),
    [],
  );

  useBreadcrumb([
    { key: 'employees', text: 'Employees' },
    { key: 'add', text: 'Add', isCurrentItem: true },
  ]);

  return (
    <PageContainer centered>
      <Text variant="xxLarge" style={{ marginBottom: 15 }}>
        Add Employee
      </Text>

      <EmployeeForm onSubmit={handleSubmit} />
    </PageContainer>
  );
};
