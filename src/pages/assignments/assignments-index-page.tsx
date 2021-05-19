import { FC } from 'react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { AssignmentDetailsList } from 'src/ui/modules/assignment/assignment-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const AssignmentsIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'assignments', text: 'Assignments', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <AssignmentDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
