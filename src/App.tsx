import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/animatedRoutes/animatedRoutes';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { retrieveLStheme } from './features/nav/navSlice';
import './App.css';

function App() {
  const theme = useAppSelector(state => state.nav.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const lsTheme = localStorage.getItem('theme');
    if (lsTheme != null) dispatch(retrieveLStheme(lsTheme));
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
