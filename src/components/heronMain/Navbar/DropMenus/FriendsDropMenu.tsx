import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { StyledDropContainer } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import { AddFriendsElement } from './DropContent';
import AddFriendCard from './AddFriendCard';

export const FriendsDropContainer = () => {
  const userEmail = useAppSelector(state => state.user.userEmail);
  const friendList = useAppSelector(state => state.private.userFriends);
  const dispatch = useAppDispatch();
  const clearDisplay = () => dispatch(showFriendsElement());
  return (
    <StyledDropContainer onMouseLeave={clearDisplay}>
      <AddFriendsElement />
      {friendList &&
        friendList.length > 0 &&
        friendList.map(friendRequest => {
          if (!friendRequest.name) return;
          return (
            <AddFriendCard key={friendRequest.name} data={friendRequest} />
          );
        })}
    </StyledDropContainer>
  );
};
