import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/animatedRoutes/animatedRoutes';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useAppSelector } from './app/hooks';

function App() {
  const theme = useAppSelector(state => state.nav.theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
