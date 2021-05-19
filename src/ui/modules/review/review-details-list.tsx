import { FC, useMemo } from 'react';
import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { useHistory } from 'react-router';

import { BaseDetailsList } from 'src/ui/elements/base-details-list';
import { Routes } from 'src/lib/constants';

export type IReviewDetailsListProps = Omit<IDetailsListProps, 'uniqueKey' | 'columns'>;

export const ReviewDetailsList: FC<IReviewDetailsListProps> = (props) => {
  const history = useHistory();

  const handleAddReview = () => {
    history.push(Routes.REVIEWS_ADD_PAGE);
  };

  const columns = useMemo<IDetailsListProps['columns']>(
    () => [
      {
        key: 'id',
        fieldName: 'id',
        name: 'ID',
        minWidth: 130,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'assignment',
        fieldName: 'assignment',
        name: 'Assignment',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'question',
        fieldName: 'question',
        name: 'Question',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'text',
        fieldName: 'text',
        name: 'Text',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
    ],
    [],
  );

  const commandbarLeftItems = useMemo<IDetailsListProps['commandbarLeftItems']>(
    () => [
      {
        text: 'Add Review',
        icon: 'Add',
        showOnMobile: true,
        onClick: handleAddReview,
      },
    ],
    [],
  );

  return (
    <BaseDetailsList
      {...props}
      uniqueKey="review-details-list"
      columns={columns}
      commandbarLeftItems={commandbarLeftItems}
    />
  );
};
