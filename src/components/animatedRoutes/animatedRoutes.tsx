import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingView from '../../views/landingView/landingView';
import HeronMain from '../../views/heronMain/heronMain';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';

const AnimatedRoutes = () => {
  const user = useAppSelector(state => state.user.userName);
  useEffect(() => {
    user && <Navigate to="/heron" replace={true} />;
  }, [user]);
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingView></LandingView>} />
        <Route path="/heron" element={<HeronMain />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
