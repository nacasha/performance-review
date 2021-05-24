import { FC } from 'react';

import { employeeApi } from 'src/services/api';
import { EmployeeDetailsList } from 'src/ui/modules/employee/employee-details-list';
import { IndexPageTemplate } from 'src/ui/templates/index-page-template';
import { QueryKeys } from 'src/constants';
import { useDetailsListQuery } from 'src/hooks/query-hooks';

export const EmployeesIndexPage: FC = () => {
  const { data, isFetching } = useDetailsListQuery(QueryKeys.FETCH_EMPLOYEE, employeeApi.fetch);

  return (
    <IndexPageTemplate title="Employees">
      <EmployeeDetailsList
        items={data?.data?.data ?? []}
        totalItems={data?.data?.meta?.total ?? 0}
        loading={isFetching}
      />
    </IndexPageTemplate>
  );
};
