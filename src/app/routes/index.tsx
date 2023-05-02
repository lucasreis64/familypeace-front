import {
  BrowserRouter as Router,
  Routes as Paths,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRouteGuard } from '../../helpers/protectedRouteGuard';
import { Dashboard } from '../pages/Dashboad';
import { Account } from '../pages/Dashboad/Account';
import { Agenda } from '../pages/Dashboad/Agenda';
import { Family } from '../pages/Dashboad/Family';
import { Tasks } from '../pages/Dashboad/Tasks';
import { SignIn } from '../pages/Sign-in';
import SignUp from '../pages/Sign-up';
import { UserProvider } from '../shared/contexts';
import { DashboardProvider } from '../shared/contexts/DashboardContext';

export const Routes = () => {
  return (
    <Router>
      <ToastContainer />
      <UserProvider>
        <DashboardProvider>
          <Paths>
            <Route path="/sign-in" element={<ProtectedRouteGuard route = 'auth'><SignIn /></ProtectedRouteGuard>} />
            <Route path="/sign-up" element={<ProtectedRouteGuard route = 'auth'><SignUp /></ProtectedRouteGuard>} />
            <Route path="/dashboard" element={<ProtectedRouteGuard route = 'dashboard'><Dashboard /></ProtectedRouteGuard>}>
              <Route path="account" element={<Account />} />
              <Route path="family" element={<Family />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="agenda" element={<Agenda />} />
              <Route index path="*" element={<Navigate to="/dashboard/account" />} />
            </Route>
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </Paths>
        </DashboardProvider>
      </UserProvider>
    </Router>
  );
};
