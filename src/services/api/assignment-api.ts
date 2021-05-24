import { axiosApiClient } from 'src/lib/axios/axios-api-client';
import { IAssignment } from 'src/typings';
import { IFetchParams, IFetchResponse } from 'src/typings/api';

export type IAssignmentFetchRequest = IFetchParams;
export type IAssignmentFetchResponse = IFetchResponse<IAssignment>;

export type IAssignmentAddRequest = Record<string, unknown>;
export type IAssignmentAddResponse = { data: any };

export const fetch = (params: IAssignmentFetchRequest) => (
  axiosApiClient.get<IAssignmentFetchResponse>('assignments', { params })
);

export const add = (data: IAssignmentAddRequest) => (
  axiosApiClient.post<IAssignmentAddResponse>('assignments', data)
);
