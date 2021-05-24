import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import queryString from 'query-string';
import snakecaseKeys from 'snakecase-keys';

import { authStore } from 'src/store/auth-store';

const axiosApiClient = axios.create({
  baseURL: 'http://25.86.34.78:8000',
});

axiosApiClient.defaults.paramsSerializer = (params) => {
  if (params) params = snakecaseKeys(params, { deep: true });
  if (params.filters) {
    const { filters, ...restParams } = params;
    const flattedParams = { ...restParams, ...filters };

    return queryString.stringify(flattedParams, { encode: true, arrayFormat: 'bracket' });
  }

  return queryString.stringify(params, { encode: false, arrayFormat: 'bracket' });
};

axiosApiClient.interceptors.request.use((
  (config) => {
    if (authStore.getState().isLoggedIn()) {
      config.headers.Authorization = `Bearer ${authStore.getState().token}`;
    }

    return config;
  }
));

axiosApiClient.interceptors.response.use((response) => {
  try {
    response.data = camelcaseKeys(response.data, { deep: true });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
});

export { axiosApiClient };
