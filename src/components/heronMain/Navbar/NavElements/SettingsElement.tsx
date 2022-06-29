import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { RightMostNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { AnimationControls } from 'framer-motion';

type ElementProps = {
  value: AnimationControls;
};

const SettingsElement = (props: ElementProps) => {
  return (
    <RightMostNavElement custom={3} animate={props.value}>
      <NavFontIcon icon={faGear} />
      <ElementTag>Settings</ElementTag>
    </RightMostNavElement>
  );
};
export default SettingsElement;
