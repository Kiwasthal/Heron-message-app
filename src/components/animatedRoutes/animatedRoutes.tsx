import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingView from '../../views/landingView/landingView';
import HeronMain from '../../views/heronMain/heronMain';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingView></LandingView>} />
        <Route path="/heron" element={<HeronMain />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
