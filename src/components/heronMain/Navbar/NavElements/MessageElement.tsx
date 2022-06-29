import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { AnimationControls } from 'framer-motion';

type ElementProps = {
  value: AnimationControls;
};

const MessageElement = (props: ElementProps) => {
  return (
    <StyledNavElement custom={1} animate={props.value}>
      <NavFontIcon icon={faMessage} />
      <ElementTag>Message</ElementTag>
    </StyledNavElement>
  );
};
export default MessageElement;
