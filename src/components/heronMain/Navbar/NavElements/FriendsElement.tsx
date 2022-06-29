import { LeftMostNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { FriendsDropContainer } from '../DropMenus/FriendsDropMenu';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { AnimationControls } from 'framer-motion';

type ElementProps = {
  value: AnimationControls;
};

const FriendsElement = (props: ElementProps) => {
  const isActive = useAppSelector(state => state.nav.friendsElement);
  const dispatch = useAppDispatch();
  const showFriends = () => dispatch(showFriendsElement());

  return (
    <LeftMostNavElement onClick={showFriends} custom={2} animate={props.value}>
      <NavFontIcon icon={faUserFriends} />
      <ElementTag>Friends</ElementTag>
      {isActive && <FriendsDropContainer />}
    </LeftMostNavElement>
  );
};
export default FriendsElement;
