import { axiosApiClient } from 'src/lib/axios/axios-api-client';
import { IFetchParams, IFetchResponse } from 'src/typings/api';

export const fetch = (params: IFetchParams) => axiosApiClient.get<IFetchResponse>('employees', { params });
