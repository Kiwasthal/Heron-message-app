import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { RightMostNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { AnimationControls } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {
  hideSettingsDropmenu,
  showSettingsDropmenu,
} from '../../../../features/nav/navSlice';
import SettingsDropMenu from '../DropMenus/SettingsDropMenu';

type ElementProps = {
  value: AnimationControls;
};

const SettingsElement = (props: ElementProps) => {
  const settingsActive = useAppSelector(state => state.nav.settingsElement);
  const dispatch = useAppDispatch();

  const showSettings = () => dispatch(showSettingsDropmenu());
  const hideSettings = () => dispatch(hideSettingsDropmenu());
  return (
    <RightMostNavElement
      custom={3}
      animate={props.value}
      onClick={settingsActive ? hideSettings : showSettings}
    >
      <NavFontIcon icon={faGear} />
      <ElementTag>Settings</ElementTag>
      {settingsActive && <SettingsDropMenu />}
    </RightMostNavElement>
  );
};
export default SettingsElement;
