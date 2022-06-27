import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  user: null | undefined | string;
  children: ReactElement;
};

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
