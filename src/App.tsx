import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { initializeIcons } from '@fluentui/react';
import { lazily } from 'react-lazily';

initializeIcons();

const { DashboardIndexPage } = lazily(() => import('./pages/dashboard/dashboard-index-page'));
const { EmployeesIndexPage } = lazily(() => import('./pages/employees/employees-index-page'));
const { MainLayout } = lazily(() => import('./ui/layouts/main-layout'));

export const App: FC = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Router>
      <Switch>
        <Route path="/auth">
          Auth Page
        </Route>
        <Route path="/">
          <MainLayout>
            <Suspense fallback={<div>Loading</div>}>
              <Switch>
                <Route path="/employees" component={EmployeesIndexPage} exact />
                <Route path="/" component={DashboardIndexPage} exact />
              </Switch>
            </Suspense>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  </Suspense>
);
