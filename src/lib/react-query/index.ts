import { QueryClient } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError(error) {
        if (!axios.isAxiosError(error)) {
          toast.error('Unexpected API Error');
        }
      },
    },
  },
});
