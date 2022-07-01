import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { StyledDropContainer } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import { AddFriendsElement } from './DropContent';
import AddFriendCard from './AddFriendCard';

export const FriendsDropContainer = () => {
  const acceptedFriendList = useAppSelector(
    state => state.private.acceptedUserFriends
  );
  const friendList = useAppSelector(state => state.private.userFriends);
  const dispatch = useAppDispatch();
  const clearDisplay = () => dispatch(showFriendsElement());

  return (
    <StyledDropContainer onMouseLeave={clearDisplay}>
      <AddFriendsElement />
      {friendList &&
        friendList.length > 0 &&
        friendList.map(friendRequest => {
          let condition = true;
          if (!friendRequest.name) return;
          acceptedFriendList &&
            acceptedFriendList.filter(friend => {
              if (friend.email === friendRequest.email) condition = false;
            });
          if (condition)
            return (
              <AddFriendCard key={friendRequest.name} data={friendRequest} />
            );
        })}
    </StyledDropContainer>
  );
};
