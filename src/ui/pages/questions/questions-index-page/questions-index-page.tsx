import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { QuestionDetailsList } from 'src/ui/modules/question/question-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const QuestionsIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'questions', text: 'Questions', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <Helmet>
        <title>Question</title>
      </Helmet>

      <QuestionDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
