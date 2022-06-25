import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingView from '../../views/landingView/landingView';
import HeronMainView from '../../views/heronMain/heronMainView';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';

const AnimatedRoutes = () => {
  const navigate = useNavigate();
  const user = useAppSelector(state => state.user.userName);
  useEffect(() => {
    if (user) navigate('/heron');
  }, [user]);
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingView />} />
        <Route path="/heron" element={<HeronMainView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
