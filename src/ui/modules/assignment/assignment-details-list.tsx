import { FC, useMemo } from 'react';
import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { useHistory } from 'react-router';

import { BaseDetailsList } from 'src/ui/elements/base-details-list';
import { Routes } from 'src/lib/constants';

export type IAssignmentsDetailsListProps = Omit<IDetailsListProps, 'uniqueKey' | 'columns'>;

export const AssignmentDetailsList: FC<IAssignmentsDetailsListProps> = (props) => {
  const history = useHistory();

  const handleAddAssignment = () => {
    history.push(Routes.ASSIGNMENTS_ADD_PAGE);
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
        key: 'reviewer',
        fieldName: 'reviewer',
        name: 'Reviewer',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'reviewee',
        fieldName: 'reviewee',
        name: 'Reviewee',
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
        text: 'Add Assignment',
        icon: 'Add',
        showOnMobile: true,
        onClick: handleAddAssignment,
      },
    ],
    [],
  );

  return (
    <BaseDetailsList
      {...props}
      uniqueKey="assignment-details-list"
      columns={columns}
      commandbarLeftItems={commandbarLeftItems}
    />
  );
};
