export type IFetchParams = any;

export type IFetchResponse<T = Record<string, unknown>> = {
  data: T[],
  meta: {
    offset: number;
    limit: number;
    total: number;
  }
};

export type ILoginRequest = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  data: any;
  meta: {
    token: string;
  }
};
