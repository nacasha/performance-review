import { FC, useCallback } from 'react';

import { EmployeeForm, IEmployeeFormProps } from 'src/ui/modules/employee/employee-form';
import { FormPageTemplate } from 'src/ui/templates/form-page-template';

export const EmployeesAddPage: FC = () => {
  const handleSubmit = useCallback<IEmployeeFormProps['onSubmit']>(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(null), 5000);
    }),
    [],
  );

  return (
    <FormPageTemplate title="Add Employee" breadcrumb={['Employees', 'Add']}>
      <EmployeeForm onSubmit={handleSubmit} />
    </FormPageTemplate>
  );
};
