import { DetailsList, IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { FC } from 'react';

export const BaseDetailsList: FC<IDetailsListProps> = (props) => (
  <DetailsList
    columnFiltering
    {...props}
  />
);
