import { useQuery } from 'react-query';
import { useQueryParams, NumberParam, ObjectParam, withDefault } from 'use-query-params';
import { useRouteMatch } from 'react-router';

type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;

export function useDetailsListQueryParams() {
  return useQueryParams({
    filters: withDefault(ObjectParam, {}),
    limit: withDefault(NumberParam, 20),
    offset: withDefault(NumberParam, 0),
  });
}

export function useDetailsListQuery<T extends (params: any) => any>(key: string, fn: T) {
  const [params] = useDetailsListQueryParams();
  return useQuery<AsyncReturnType<T>>([key, params], () => fn(params), { keepPreviousData: true });
}

export function useQueryGetByID<T extends (params: any) => any>(key: string, fn: T) {
  const { params: { id } } = useRouteMatch<{ id: string }>();
  return useQuery<AsyncReturnType<T>>(key, () => fn(id));
}
