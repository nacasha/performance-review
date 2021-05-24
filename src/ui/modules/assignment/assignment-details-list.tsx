import { FC, useMemo } from 'react';
import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { useHistory } from 'react-router';

import { BaseDetailsList } from 'src/ui/elements/base-details-list';
import { Routes } from 'src/constants';
import { IAssignment } from 'src/typings';

export type IAssignmentsDetailsListProps = Omit<IDetailsListProps, 'uniqueKey' | 'columns'>;

export const AssignmentDetailsList: FC<IAssignmentsDetailsListProps> = (props) => {
  const history = useHistory();

  const handleAddAssignment = () => {
    history.push(Routes.ASSIGNMENTS_ADD_PAGE);
  };

  const columns = useMemo<IDetailsListProps['columns']>(
    () => [
      {
        key: 'reviewer',
        fieldName: 'reviewer',
        name: 'Reviewer',
        minWidth: 200,
        isResizable: true,
        onRender: (item: IAssignment) => item.reviewer.fullName,
      },
      {
        key: 'reviewee',
        fieldName: 'reviewee',
        name: 'Reviewee',
        minWidth: 200,
        isResizable: true,
        onRender: (item: IAssignment) => item.reviewee.fullName,
      },
      {
        key: 'createdAt',
        fieldName: 'createdAt',
        name: 'Created At',
        minWidth: 170,
        isResizable: true,
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
      columnFiltering={false}
    />
  );
};
