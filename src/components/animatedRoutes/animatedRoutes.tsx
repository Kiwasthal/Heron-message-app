import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import ProtectedRoute from '../privateRoute/privateRoute';
import LandingView from '../../views/landingView/landingView';
import HeronMainView from '../../views/heronMain/heronMainView';

const AnimatedRoutes = () => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.user.userName);
  const location = useLocation();
  useEffect(() => {
    if (user) navigate('/heron');
  }, [user, navigate]);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingView />} />
        <Route
          path="/heron"
          element={
            <ProtectedRoute user={user}>
              <HeronMainView />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
