import { FC } from 'react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { ReviewDetailsList } from 'src/ui/modules/review/review-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const ReviewsIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'reviews', text: 'Reviews', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <ReviewDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
