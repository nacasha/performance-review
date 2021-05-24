import { persist } from 'zustand/middleware';
import create from 'zustand';
import createVanilla from 'zustand/vanilla';

import { ILoginResponse } from 'src/typings/api';

type IAuthState = {
  user?: any;
  token?: string;
  clearData: () => void;
  isLoggedIn: () => boolean;
  saveLogin: (payload: ILoginResponse) => void;
};

export const authStore = createVanilla<IAuthState>(persist(
  (set, get) => ({
    user: undefined,
    token: undefined,
    isLoggedIn() {
      return !!get().token && !!get().user;
    },
    clearData() {
      set({ user: undefined, token: undefined });
    },
    saveLogin(payload) {
      const { data: user, meta: { token } } = payload;
      set({ user, token });
    },
  }),
  {
    name: 'auth-state',
  },
));

export const useAuthStore = create(authStore);
