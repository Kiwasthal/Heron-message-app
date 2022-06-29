import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faEyedropper } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { AnimationControls } from 'framer-motion';

type ElementProps = {
  value: AnimationControls;
};

const ThemeElement = (props: ElementProps) => {
  return (
    <StyledNavElement custom={5} animate={props.value}>
      <NavFontIcon icon={faEyedropper} />
      <ElementTag>Theme</ElementTag>
    </StyledNavElement>
  );
};
export default ThemeElement;
