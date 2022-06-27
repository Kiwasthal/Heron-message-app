import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';

const MessageElement = () => {
  return (
    <StyledNavElement>
      <NavFontIcon icon={faMessage} />
      <ElementTag>Message</ElementTag>
    </StyledNavElement>
  );
};
export default MessageElement;
