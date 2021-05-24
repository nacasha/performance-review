import { useQuery } from 'react-query';
import { useQueryParams, NumberParam, ObjectParam, withDefault } from 'use-query-params';

import { IFetchParams } from 'src/typings/api';

export function useDetailsListQueryParams() {
  return useQueryParams({
    filters: withDefault(ObjectParam, {}),
    limit: withDefault(NumberParam, 20),
    offset: withDefault(NumberParam, 0),
  });
}

export function useDetailsListQuery(key: string, fn: (params: IFetchParams) => any) {
  const [params] = useDetailsListQueryParams();
  return useQuery([key, params], () => fn(params), { keepPreviousData: true });
}
