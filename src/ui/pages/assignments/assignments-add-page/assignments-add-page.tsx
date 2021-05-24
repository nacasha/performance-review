import { FC, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Text } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';
import { AssignmentForm, IAssignmentFormProps } from 'src/ui/modules/assignment/assignment-form';

export const AssignmentsAddPage: FC = () => {
  const handleSubmit = useCallback<IAssignmentFormProps['onSubmit']>(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(null), 5000);
    }),
    [],
  );

  useBreadcrumb([
    { key: 'assignments', text: 'Assignments' },
    { key: 'add', text: 'Add', isCurrentItem: true },
  ]);

  return (
    <PageContainer centered>
      <Helmet>
        <title>Add Assignment</title>
      </Helmet>

      <Text variant="xxLarge" style={{ marginBottom: 15 }}>
        Add Assignment
      </Text>

      <AssignmentForm onSubmit={handleSubmit} />
    </PageContainer>
  );
};
