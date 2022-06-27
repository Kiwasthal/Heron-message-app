import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';

const GlobalElement = () => {
  return (
    <StyledNavElement>
      <NavFontIcon icon={faGlobe} />
      <ElementTag>Global</ElementTag>
    </StyledNavElement>
  );
};
export default GlobalElement;
