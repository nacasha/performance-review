import { FC, useCallback } from 'react';
import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { RouteComponentProps } from 'react-router';

import { employeeApi } from 'src/services/api';
import { EmployeeDetailsList } from 'src/ui/modules/employee/employee-details-list';
import { IEmployee } from 'src/typings';
import { IndexPageTemplate } from 'src/ui/templates/index-page-template';
import { QueryKeys, Routes } from 'src/constants';
import { useDetailsListQuery } from 'src/hooks/query-hooks';

export const EmployeesIndexPage: FC<RouteComponentProps> = ({ history }) => {
  const { data, isFetching } = useDetailsListQuery(QueryKeys.FETCH_EMPLOYEE, employeeApi.fetch);

  const handleItemInvoked = useCallback<Required<IDetailsListProps>['onItemInvoked']>(
    (item: IEmployee) => {
      history.push(Routes.EMPLOYEES_DETAIL_PAGE(item.id));
    },
    [],
  );

  return (
    <IndexPageTemplate title="Employees">
      <EmployeeDetailsList
        items={data?.data?.data ?? []}
        totalItems={data?.data?.meta?.total ?? 0}
        onItemInvoked={handleItemInvoked}
        loading={isFetching}
      />
    </IndexPageTemplate>
  );
};
