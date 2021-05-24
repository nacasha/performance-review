import { FC, useCallback } from 'react';

import { AssignmentForm, IAssignmentFormProps } from 'src/ui/modules/assignment/assignment-form';
import { FormPageTemplate } from 'src/ui/templates/form-page-template';

export const AssignmentsAddPage: FC = () => {
  const handleSubmit = useCallback<IAssignmentFormProps['onSubmit']>(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(null), 5000);
    }),
    [],
  );

  return (
    <FormPageTemplate
      title="Add Assignment"
      breadcrumb={['Assignments', 'Add']}
    >
      <AssignmentForm onSubmit={handleSubmit} />
    </FormPageTemplate>
  );
};
