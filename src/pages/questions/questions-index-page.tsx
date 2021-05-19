import { FC } from 'react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { QuestionDetailsList } from 'src/ui/modules/question/question-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const QuestionsIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'questions', text: 'Questions', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <QuestionDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
