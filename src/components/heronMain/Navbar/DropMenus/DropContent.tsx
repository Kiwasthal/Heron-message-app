import { dropFriends } from '../../../../styledComponents/heronMain/nav/dropmenus/Variants/dropFriendsVariants';
import { StyledAddFriends } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';

export const AddFriendsElement = () => {
  return (
    <StyledAddFriends
      variants={dropFriends}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
    >
      Add Friends
    </StyledAddFriends>
  );
};
