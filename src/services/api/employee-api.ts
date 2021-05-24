import { axiosApiClient } from 'src/lib/axios/axios-api-client';
import { IEmployee } from 'src/typings';
import { IFetchParams, IFetchResponse } from 'src/typings/api';

export type IEmployeeFetchRequest = IFetchParams;
export type IEmployeeFetchResponse = IFetchResponse<IEmployee>;

export type IEmployeeAddRequest = Record<string, unknown>;
export type IEmployeeAddResponse = { data: any };

export const fetch = (params: IEmployeeFetchRequest) => (
  axiosApiClient.get<IEmployeeFetchResponse>('employees', { params })
);

export const get = (id: any) => (
  axiosApiClient.get<IEmployee>(`employees/${id}`)
);

export const add = (data: IEmployeeAddRequest) => (
  axiosApiClient.post<IEmployeeAddResponse>('employees', data)
);
