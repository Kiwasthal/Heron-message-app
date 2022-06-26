import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/animatedRoutes/animatedRoutes';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { useState } from 'react';

function App() {
  const [theme, setDefaultTheme] = useState(defaultTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
