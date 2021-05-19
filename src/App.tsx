import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { initializeIcons } from '@fluentui/react';
import { lazily } from 'react-lazily';

import { PageSpinner } from './ui/elements/page-spinner';
import { Routes } from './lib/constants';

initializeIcons();

const { MainLayout } = lazily(() => import('./ui/layouts/main-layout'));

const { AssignmentsAddPage } = lazily(() => import('./pages/assignments/assignments-add-page'));
const { AssignmentsIndexPage } = lazily(() => import('./pages/assignments/assignments-index-page'));
const { DashboardIndexPage } = lazily(() => import('./pages/dashboard/dashboard-index-page'));
const { EmployeesAddPage } = lazily(() => import('./pages/employees/employees-add-page'));
const { EmployeesIndexPage } = lazily(() => import('./pages/employees/employees-index-page'));
const { QuestionsAddPage } = lazily(() => import('./pages/questions/questions-add-page'));
const { QuestionsIndexPage } = lazily(() => import('./pages/questions/questions-index-page'));
const { ReviewsAddPage } = lazily(() => import('./pages/reviews/reviews-add-page'));
const { ReviewsIndexPage } = lazily(() => import('./pages/reviews/reviews-index-page'));

export const App: FC = () => (
  <Suspense fallback={<PageSpinner />}>
    <Router>
      <Switch>
        <Route path="/auth">
          Auth Page
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
    </Router>
  </Suspense>
);
