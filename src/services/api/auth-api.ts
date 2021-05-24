import { axiosApiClient } from 'src/lib/axios/axios-api-client';
import { ILoginRequest, ILoginResponse } from 'src/typings/api';

export const login = (data: ILoginRequest) => axiosApiClient.post<ILoginResponse>('authenticate', data);
