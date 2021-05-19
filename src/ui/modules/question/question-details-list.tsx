import { FC, useMemo } from 'react';
import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { useHistory } from 'react-router';

import { BaseDetailsList } from 'src/ui/elements/base-details-list';
import { Routes } from 'src/lib/constants';

export type IQuestionDetailsListProps = Omit<IDetailsListProps, 'uniqueKey' | 'columns'>;

export const QuestionDetailsList: FC<IQuestionDetailsListProps> = (props) => {
  const history = useHistory();

  const handleAddQuestion = () => {
    history.push(Routes.QUESTIONS_ADD_PAGE);
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
        key: 'description',
        fieldName: 'description',
        name: 'Description',
        minWidth: 250,
        isResizable: true,
        filterType: 'text',
      },
    ],
    [],
  );

  const commandbarLeftItems = useMemo<IDetailsListProps['commandbarLeftItems']>(
    () => [
      {
        text: 'Add Question',
        icon: 'Add',
        showOnMobile: true,
        onClick: handleAddQuestion,
      },
    ],
    [],
  );

  return (
    <BaseDetailsList
      {...props}
      uniqueKey="question-details-list"
      columns={columns}
      commandbarLeftItems={commandbarLeftItems}
    />
  );
};
