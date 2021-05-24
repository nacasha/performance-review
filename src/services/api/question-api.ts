import { axiosApiClient } from 'src/lib/axios/axios-api-client';
import { IQuestion } from 'src/typings';
import { IFetchParams, IFetchResponse } from 'src/typings/api';

export type IQuestionFetchRequest = IFetchParams;
export type IQuestionFetchResponse = IFetchResponse<IQuestion>;

export type IQuestionAddRequest = Record<string, unknown>;
export type IQuestionAddResponse = { data: any };

export const fetch = (params: IQuestionFetchRequest) => (
  axiosApiClient.get<IQuestionFetchResponse>('questions', { params })
);

export const add = (data: IQuestionAddRequest) => (
  axiosApiClient.post<IQuestionAddResponse>('questions', data)
);
