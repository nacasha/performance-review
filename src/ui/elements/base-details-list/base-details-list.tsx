import { DetailsList, IDetailsListProps } from '@nacasha/fluentui-kit.ui.details-list';
import { FC, useCallback } from 'react';

import { useDetailsListQueryParams } from 'src/hooks/query-hooks';

export const BaseDetailsList: FC<IDetailsListProps> = (props) => {
  const [params, setParams] = useDetailsListQueryParams();

  const handleStateChange = useCallback<Required<IDetailsListProps>['onStateChange']>(
    (state) => {
      const { currentPage, limit, filters } = state;
      const offset = (currentPage - 1) * limit;

      setParams({ offset, limit, filters });
    },
    [setParams],
  );

  return (
    <DetailsList
      initialState={params}
      onStateChange={handleStateChange}
      columnFiltering
      {...props}
    />
  );
};
