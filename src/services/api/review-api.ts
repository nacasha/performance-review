import { axiosApiClient } from 'src/lib/axios/axios-api-client';
import { IFetchParams, IFetchResponse } from 'src/typings/api';
import { IReview } from 'src/typings';

export type IReviewFetchRequest = IFetchParams;
export type IReviewFetchResponse = IFetchResponse<IReview>;

export type IReviewAddRequest = Record<string, unknown>;
export type IReviewAddResponse = { data: any };

export const fetch = (params: IReviewFetchRequest) => (
  axiosApiClient.get<IReviewFetchResponse>('assignments/reviews', { params })
);

export const add = (data: IReviewAddRequest) => (
  axiosApiClient.post<IReviewAddResponse>('assignments/reviews', data)
);
