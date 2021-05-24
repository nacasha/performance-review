import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { AssignmentDetailsList } from 'src/ui/modules/assignment/assignment-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const AssignmentsIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'assignments', text: 'Assignments', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <Helmet>
        <title>Assignment</title>
      </Helmet>

      <AssignmentDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
