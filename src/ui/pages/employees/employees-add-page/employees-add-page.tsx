import { FC, useCallback } from 'react';
import { RouteComponentProps } from 'react-router';
import { useMutation } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

import { employeeApi } from 'src/services/api';
import { EmployeeForm, IEmployeeFormProps } from 'src/ui/modules/employee/employee-form';
import { FormPageTemplate } from 'src/ui/templates/form-page-template';
import { Routes } from 'src/constants';

export const EmployeesAddPage: FC<RouteComponentProps> = ({ history }) => {
  const mutation = useMutation(employeeApi.add);

  const handleSubmit = useCallback<IEmployeeFormProps['onSubmit']>(
    (values) => mutation.mutateAsync(values, {
      onSuccess() {
        toast.success('New employee successfully added');
        history.push(Routes.EMPLOYEES_INDEX_PAGE);
      },
      onError(error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 400) {
            toast.error(error.response?.data?.message);
          } else {
            toast.error('Unexpected Error');
          }
        }
      },
    }),
    [],
  );

  return (
    <FormPageTemplate
      title="Add Employee"
      breadcrumb={['Employees', 'Add']}
    >
      <EmployeeForm onSubmit={handleSubmit} />
    </FormPageTemplate>
  );
};
