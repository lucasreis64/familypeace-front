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
import { SignIn } from '../pages/Sign-in';
import SignUp from '../pages/Sign-up';
import { UserProvider } from '../shared/contexts';

export const Routes = () => {
  return (
    <Router>
      <ToastContainer />
      <UserProvider>
        <Paths>
          <Route path="/sign-in" element={<ProtectedRouteGuard route = 'auth'><SignIn /></ProtectedRouteGuard>} />
          <Route path="/sign-up" element={<ProtectedRouteGuard route = 'auth'><SignUp /></ProtectedRouteGuard>} />
          <Route path="/dashboard" element={<ProtectedRouteGuard route = 'dashboard'><Dashboard /></ProtectedRouteGuard>}>
            
          </Route>
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Paths>
      </UserProvider>
    </Router>
  );
};
