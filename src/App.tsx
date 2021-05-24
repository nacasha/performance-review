import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { initializeIcons } from '@fluentui/react';
import { lazily } from 'react-lazily';
import { QueryClientProvider } from 'react-query';
import { QueryParamProvider } from 'use-query-params';
import { Toaster } from 'react-hot-toast';

import { PageSpinner } from './ui/elements/page-spinner';
import { queryClient } from './lib/react-query';
import { Routes } from './constants';

initializeIcons();

const { MainLayout } = lazily(() => import('./ui/layouts/main-layout'));

const { AssignmentsAddPage } = lazily(() => import('./ui/pages/assignments/assignments-add-page'));
const { AssignmentsIndexPage } = lazily(() => import('./ui/pages/assignments/assignments-index-page'));
const { AuthLoginPage } = lazily(() => import('./ui/pages/auth/auth-login-page'));
const { DashboardIndexPage } = lazily(() => import('./ui/pages/dashboard/dashboard-index-page'));
const { EmployeesAddPage } = lazily(() => import('./ui/pages/employees/employees-add-page'));
const { EmployeesIndexPage } = lazily(() => import('./ui/pages/employees/employees-index-page'));
const { QuestionsAddPage } = lazily(() => import('./ui/pages/questions/questions-add-page'));
const { QuestionsIndexPage } = lazily(() => import('./ui/pages/questions/questions-index-page'));
const { ReviewsAddPage } = lazily(() => import('./ui/pages/reviews/reviews-add-page'));
const { ReviewsIndexPage } = lazily(() => import('./ui/pages/reviews/reviews-index-page'));

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<PageSpinner />}>
      <HelmetProvider>
        <Toaster />

        <Router>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Switch>
              <Route path={Routes.AUTH_INDEX_PAGE}>
                <Switch>
                  <Redirect
                    path={Routes.AUTH_INDEX_PAGE}
                    to={Routes.AUTH_LOGIN_PAGE}
                    exact
                  />
                  <Route
                    path={Routes.AUTH_LOGIN_PAGE}
                    component={AuthLoginPage}
                    exact
                  />
                </Switch>
              </Route>
              <Route path="/">
                <MainLayout>
                  <Suspense fallback={<PageSpinner />}>
                    <Switch>
                      <Route
                        path={Routes.EMPLOYEES_INDEX_PAGE}
                        component={EmployeesIndexPage}
                        exact
                      />
                      <Route
                        path={Routes.EMPLOYEES_ADD_PAGE}
                        component={EmployeesAddPage}
                        exact
                      />

                      <Route
                        path={Routes.ASSIGNMENTS_INDEX_PAGE}
                        component={AssignmentsIndexPage}
                        exact
                      />
                      <Route
                        path={Routes.ASSIGNMENTS_ADD_PAGE}
                        component={AssignmentsAddPage}
                        exact
                      />

                      <Route
                        path={Routes.REVIEWS_INDEX_PAGE}
                        component={ReviewsIndexPage}
                        exact
                      />
                      <Route
                        path={Routes.REVIEWS_ADD_PAGE}
                        component={ReviewsAddPage}
                        exact
                      />

                      <Route
                        path={Routes.QUESTIONS_INDEX_PAGE}
                        component={QuestionsIndexPage}
                        exact
                      />
                      <Route
                        path={Routes.QUESTIONS_ADD_PAGE}
                        component={QuestionsAddPage}
                        exact
                      />

                      <Route
                        path={Routes.DASHBOARD_INDEX_PAGE}
                        component={DashboardIndexPage}
                        exact
                      />
                    </Switch>
                  </Suspense>
                </MainLayout>
              </Route>
            </Switch>
          </QueryParamProvider>
        </Router>
      </HelmetProvider>
    </Suspense>
  </QueryClientProvider>
);
