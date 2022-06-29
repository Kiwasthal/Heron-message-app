import { dropFriends } from '../../../../styledComponents/heronMain/nav/dropmenus/Variants/dropFriendsVariants';
import { StyledAddFriends } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import { useAppDispatch } from '../../../../app/hooks';
import { openFriendsModal } from '../../../../features/nav/navSlice';

export const AddFriendsElement = () => {
  const dispatch = useAppDispatch();
  const showFriendsModal = () => dispatch(openFriendsModal());
  return (
    <StyledAddFriends
      variants={dropFriends}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      onClick={showFriendsModal}
    >
      Add Friends
    </StyledAddFriends>
  );
};
