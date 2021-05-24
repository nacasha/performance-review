import { FC, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Text } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';
import { QuestionForm, IQuestionFormProps } from 'src/ui/modules/question/question-form';

export const QuestionsAddPage: FC = () => {
  const handleSubmit = useCallback<IQuestionFormProps['onSubmit']>(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(null), 5000);
    }),
    [],
  );

  useBreadcrumb([
    { key: 'questions', text: 'Questions' },
    { key: 'add', text: 'Add', isCurrentItem: true },
  ]);

  return (
    <PageContainer centered>
      <Helmet>
        <title>Add Question</title>
      </Helmet>

      <Text variant="xxLarge" style={{ marginBottom: 15 }}>
        Add Question
      </Text>

      <QuestionForm onSubmit={handleSubmit} />
    </PageContainer>
  );
};
