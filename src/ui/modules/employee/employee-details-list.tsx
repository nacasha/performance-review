import { FC, useMemo } from 'react';
import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { useHistory } from 'react-router';

import { BaseDetailsList } from 'src/ui/elements/base-details-list';
import { Routes } from 'src/lib/constants';

export type IEmployeeDetailsListProps = Omit<IDetailsListProps, 'uniqueKey' | 'columns'>;

export const EmployeeDetailsList: FC<IEmployeeDetailsListProps> = (props) => {
  const history = useHistory();

  const handleAddEmployee = () => {
    history.push(Routes.EMPLOYEES_ADD_PAGE);
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
        key: 'fullName',
        fieldName: 'fullName',
        name: 'Full Name',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'email',
        fieldName: 'email',
        name: 'Email',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'gender',
        fieldName: 'gender',
        name: 'Gender',
        minWidth: 100,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'department',
        fieldName: 'department',
        name: 'Department',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'phoneNumber',
        fieldName: 'phoneNumber',
        name: 'Phone Number',
        minWidth: 200,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'address',
        fieldName: 'address',
        name: 'Address',
        minWidth: 250,
        isResizable: true,
        filterType: 'text',
      },
      {
        key: 'isAdmin',
        fieldName: 'isAdmin',
        name: 'Admin',
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
        text: 'Add Employee',
        icon: 'Add',
        showOnMobile: true,
        onClick: handleAddEmployee,
      },
    ],
    [],
  );

  return (
    <BaseDetailsList
      {...props}
      uniqueKey="employee-details-list"
      columns={columns}
      commandbarLeftItems={commandbarLeftItems}
    />
  );
};
