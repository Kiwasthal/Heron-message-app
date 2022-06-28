import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { StyledNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { useAppDispatch } from '../../../../app/hooks';
import { showGlobalChat } from '../../../../features/nav/navSlice';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';

const GlobalElement = () => {
  const dispatch = useAppDispatch();
  const handleGlobalChat = () => dispatch(showGlobalChat());
  return (
    <StyledNavElement onClick={handleGlobalChat}>
      <NavFontIcon icon={faGlobe} />
      <ElementTag>Global</ElementTag>
    </StyledNavElement>
  );
};
export default GlobalElement;
