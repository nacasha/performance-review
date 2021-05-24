import { FC } from 'react';

import { IndexPageTemplate } from 'src/ui/templates/index-page-template';
import { QueryKeys } from 'src/constants';
import { reviewApi } from 'src/services/api';
import { ReviewDetailsList } from 'src/ui/modules/review/review-details-list';
import { useDetailsListQuery } from 'src/hooks/query-hooks';

export const ReviewsIndexPage: FC = () => {
  const { data, isFetching } = useDetailsListQuery(QueryKeys.FETCH_REVIEW, reviewApi.fetch);

  return (
    <IndexPageTemplate title="Questions">
      <ReviewDetailsList
        items={data?.data?.data ?? []}
        totalItems={data?.data?.meta?.total ?? 0}
        loading={isFetching}
      />
    </IndexPageTemplate>
  );
};
