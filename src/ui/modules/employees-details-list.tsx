import { IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { FC } from 'react';

import { BaseDetailsList } from 'src/ui/elements/base-details-list';

const columns: IDetailsListProps['columns'] = [
  {
    key: 'id',
    fieldName: 'id',
    name: 'ID',
    minWidth: 130,
    isResizable: true,
    filterType: 'text',
  },
];

export type IEmployeesDetailsListProps = Omit<IDetailsListProps, 'uniqueKey' | 'columns'>;

export const EmployeesDetailsList: FC<IEmployeesDetailsListProps> = (props) => (
  <BaseDetailsList
    {...props}
    uniqueKey="employess-details-list"
    columns={columns}
  />
);
