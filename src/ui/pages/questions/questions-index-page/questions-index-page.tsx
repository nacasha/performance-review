import { FC } from 'react';

import { IndexPageTemplate } from 'src/ui/templates/index-page-template';
import { QueryKeys } from 'src/constants';
import { questionApi } from 'src/services/api';
import { QuestionDetailsList } from 'src/ui/modules/question/question-details-list';
import { useDetailsListQuery } from 'src/hooks/query-hooks';

export const QuestionsIndexPage: FC = () => {
  const { data, isFetching } = useDetailsListQuery(QueryKeys.FETCH_QUESTION, questionApi.fetch);

  return (
    <IndexPageTemplate title="Questions">
      <QuestionDetailsList
        items={data?.data?.data ?? []}
        totalItems={data?.data?.meta?.total ?? 0}
        loading={isFetching}
      />
    </IndexPageTemplate>
  );
};
