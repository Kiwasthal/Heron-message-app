import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faEyedropper } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';

const ThemeElement = () => {
  return (
    <StyledNavElement>
      <NavFontIcon icon={faEyedropper} />
      <ElementTag>Theme</ElementTag>
    </StyledNavElement>
  );
};
export default ThemeElement;
