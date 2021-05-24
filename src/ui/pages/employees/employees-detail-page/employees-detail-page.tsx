import { Card } from '@nacasha/fluentui-kit.ui.card';
import { FC } from 'react';

import { DetailPageTemplate } from 'src/ui/templates/detail-page-template';
import { employeeApi } from 'src/services/api';
import { QueryKeys } from 'src/constants';
import { useQueryGetByID } from 'src/hooks/query-hooks';

export const EmployeesDetailPage: FC = () => {
  const { error, isFetching } = useQueryGetByID(QueryKeys.GET_EMPLOYEE, employeeApi.get);

  return (
    <DetailPageTemplate
      title="Detail Employee"
      breadcrumb={['Employees', 'Detail', 'Izal Fathoni']}
      error={error}
      loading={isFetching}
    >
      <Card cardTitle="Details">
        Employee Detail
      </Card>
    </DetailPageTemplate>
  );
};
