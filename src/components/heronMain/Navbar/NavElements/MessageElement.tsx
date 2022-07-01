import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { AnimationControls } from 'framer-motion';
import { useAppDispatch } from '../../../../app/hooks';
import { showChatbar } from '../../../../features/nav/navSlice';

type ElementProps = {
  value: AnimationControls;
};

const MessageElement = (props: ElementProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(showChatbar());
  return (
    <StyledNavElement custom={1} animate={props.value} onClick={handleClick}>
      <NavFontIcon icon={faMessage} />
      <ElementTag>Message</ElementTag>
    </StyledNavElement>
  );
};
export default MessageElement;
