import {
  BrowserRouter as Router,
  Routes as Paths,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignIn } from '../pages/Sign-in';
import SignUp from '../pages/Sign-up';
import { UserProvider } from '../shared/contexts';

export const Routes = () => {
  return (
    <Router>
      <ToastContainer />
      <UserProvider>
        <Paths>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Paths>
      </UserProvider>
    </Router>
  );
};

