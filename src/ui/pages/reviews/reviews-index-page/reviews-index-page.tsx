import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { ReviewDetailsList } from 'src/ui/modules/review/review-details-list';
import { PageContainer } from 'src/ui/elements/page-container';

export const ReviewsIndexPage: FC = () => {
  useBreadcrumb([
    { key: 'reviews', text: 'Reviews', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <Helmet>
        <title>Review</title>
      </Helmet>

      <ReviewDetailsList
        items={[]}
        totalItems={0}
      />
    </PageContainer>
  );
};
