import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faEyedropper } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { AnimationControls } from 'framer-motion';
import { StyledDropContainer } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import ThemeDropMenu from '../DropMenus/ThemeDropMenu';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  hideThemeDropmenu,
  showThemeDropmenu,
} from '../../../../features/nav/navSlice';

type ElementProps = {
  value: AnimationControls;
};

const ThemeElement = (props: ElementProps) => {
  const themeActive = useAppSelector(state => state.nav.themeElement);
  const dispatch = useAppDispatch();

  const themeStarHover = () => dispatch(showThemeDropmenu());
  const themeStopHover = () => dispatch(hideThemeDropmenu());
  return (
    <StyledNavElement
      custom={5}
      animate={props.value}
      onMouseEnter={themeStarHover}
      onMouseLeave={themeStopHover}
    >
      <NavFontIcon icon={faEyedropper} />
      <ElementTag>Theme</ElementTag>
      {themeActive && <ThemeDropMenu />}
    </StyledNavElement>
  );
};
export default ThemeElement;
