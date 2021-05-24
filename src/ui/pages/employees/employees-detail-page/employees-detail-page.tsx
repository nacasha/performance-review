import { Card } from '@nacasha/fluentui-kit.ui.card';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

import { employeeApi } from 'src/services/api';
import { NotFoundPageTemplate } from 'src/ui/templates/not-found-page-template';
import { PageContainer } from 'src/ui/elements/page-container';
import { PageSpinner } from 'src/ui/elements/page-spinner';
import { QueryKeys } from 'src/constants';
import { useQueryGetByID } from 'src/hooks/query-hooks';

export const EmployeesDetailPage: FC = () => {
  const { error, isFetching } = useQueryGetByID(QueryKeys.GET_EMPLOYEE, employeeApi.get);

  if (isFetching) {
    return <PageSpinner />;
  }

  if (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return <NotFoundPageTemplate />;
      }
    }
  }

  return (
    <PageContainer centered>
      <Helmet>
        <title>Izal Fathoni | Employees</title>
      </Helmet>

      <Card cardTitle="Details">
        Employee Detail
      </Card>
    </PageContainer>
  );
};
