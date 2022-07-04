import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { StyledThemeDropmenu } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import ThemeSelection from './ThemeSelection';

const ThemeDropMenu = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.set({
      opacity: 0,
      x: '40vh',
    });
  }, []);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: '0vh',
      transition: { delay: i * 0.1 },
    }));
  }, []);
  return (
    <StyledThemeDropmenu>
      <ThemeSelection value={controls} text="Dark" starting={0} />
      <ThemeSelection value={controls} text="Light" starting={1} />
      <ThemeSelection value={controls} text="Default" starting={2} />
      <ThemeSelection value={controls} text="Sea" starting={3} />
    </StyledThemeDropmenu>
  );
};

export default ThemeDropMenu;
