import { FC, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router';
import { useMutation } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

import { authApi } from 'src/services/api';
import { ILoginFormProps, LoginForm } from 'src/ui/modules/auth/login-form';
import { Routes } from 'src/constants';
import { useAuthStore } from 'src/store/auth-store';

import * as Classes from './auth-login-page.classes';
import './auth-login-page.scss';

export const AuthLoginPage: FC<RouteComponentProps> = ({ history }) => {
  const mutation = useMutation(authApi.login);
  const saveLogin = useAuthStore((state) => state.saveLogin);

  const handleSubmit = useCallback<ILoginFormProps['onSubmit']>(
    (values) => mutation.mutateAsync(values, {
      onSuccess(response) {
        if (response.data.meta.token) {
          saveLogin(response.data);
          history.push(Routes.DASHBOARD_INDEX_PAGE);
        }
      },
      onError(error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            toast.error('Username or password is incorrect');
          } else {
            toast.error('Unexpected Error');
          }
        }
      },
    }),
    [],
  );

  return (
    <div className={Classes.CONTAINER}>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className={Classes.CONTENT}>
        <div className={Classes.LOGO}>
          <img src="/logo.svg" alt="Logo" className={Classes.IMAGE} />
          <div className={Classes.TEXT}>Performance Review</div>
        </div>
        <div className={Classes.FORM}>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
