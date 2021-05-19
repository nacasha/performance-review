import { FC, useCallback } from 'react';
import { Text } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';
import { ReviewForm, IReviewFormProps } from 'src/ui/modules/review/review-form';

export const ReviewsAddPage: FC = () => {
  const handleSubmit = useCallback<IReviewFormProps['onSubmit']>(
    () => new Promise((resolve) => {
      setTimeout(() => resolve(), 5000);
    }),
    [],
  );

  useBreadcrumb([
    { key: 'reviews', text: 'Reviews' },
    { key: 'add', text: 'Add', isCurrentItem: true },
  ]);

  return (
    <PageContainer centered>
      <Text variant="xxLarge" style={{ marginBottom: 15 }}>
        Add Review
      </Text>

      <ReviewForm onSubmit={handleSubmit} />
    </PageContainer>
  );
};
