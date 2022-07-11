import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import {
  setThemeDark,
  setThemeDefault,
  setThemeLight,
  setThemeSea,
} from '../../../../features/nav/navSlice';
import { StyledThemeDropmenu } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import ThemeSelection from './ThemeSelection';

const ThemeDropMenu = () => {
  const controls = useAnimation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    controls.set({
      opacity: 0,
      x: '40vh',
    });
  }, [controls]);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: '0vh',
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);
  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    dispatch(setThemeDark());
  };

  const setDefaultTheme = () => {
    localStorage.setItem('theme', 'default');
    dispatch(setThemeDefault());
  };

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light');
    dispatch(setThemeLight());
  };

  const setSeaTheme = () => {
    localStorage.setItem('theme', 'sea');
    dispatch(setThemeSea());
  };

  return (
    <StyledThemeDropmenu>
      <ThemeSelection
        value={controls}
        text="Dark"
        starting={0}
        action={setDarkTheme}
      />
      <ThemeSelection
        value={controls}
        text="Light"
        starting={1}
        action={setLightTheme}
      />
      <ThemeSelection
        value={controls}
        text="Default"
        starting={2}
        action={setDefaultTheme}
      />
      <ThemeSelection
        value={controls}
        text="Sea"
        starting={3}
        action={setSeaTheme}
      />
    </StyledThemeDropmenu>
  );
};

export default ThemeDropMenu;
