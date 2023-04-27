import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../app/shared/contexts';
import useToken from '../app/shared/hooks/useToken';

interface ProtectedRouteProps {
  children: React.ReactNode,
  route: 'auth' | 'dashboard'
};

export const ProtectedRouteGuard: React.FC<ProtectedRouteProps> = ({ children, route }) => {
  const token = useToken();
  const contextToken = useContext(UserContext).userData.token;

  if (!token && !contextToken && route === 'dashboard') {
    return <Navigate to="/sign-in" />;
  }
  if ((token || contextToken) && route === 'auth') {
    return <Navigate to="/dashboard" />;
  }

  return <>
    {children}
  </>;
};
