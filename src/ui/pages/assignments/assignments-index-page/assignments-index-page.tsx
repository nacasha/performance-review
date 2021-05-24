import { FC } from 'react';

import { assignmentApi } from 'src/services/api';
import { AssignmentDetailsList } from 'src/ui/modules/assignment/assignment-details-list';
import { IndexPageTemplate } from 'src/ui/templates/index-page-template';
import { QueryKeys } from 'src/constants';
import { useDetailsListQuery } from 'src/hooks/query-hooks';

export const AssignmentsIndexPage: FC = () => {
  const { data, isFetching } = useDetailsListQuery(QueryKeys.FETCH_ASSIGNMENT, assignmentApi.fetch);

  return (
    <IndexPageTemplate title="Assignments">
      <AssignmentDetailsList
        items={data?.data?.data ?? []}
        totalItems={data?.data?.meta?.total ?? 0}
        loading={isFetching}
      />
    </IndexPageTemplate>
  );
};
