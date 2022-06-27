import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { RightMostNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';

const SettingsElement = () => {
  return (
    <RightMostNavElement>
      <NavFontIcon icon={faGear} />
      <ElementTag>Settings</ElementTag>
    </RightMostNavElement>
  );
};
export default SettingsElement;
