import { useAppSelector } from '../../../app/hooks';
import { FriendChatBarCard } from './FriendChatBarCard';
import { StyledFriendsBar } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

const ChatBar = () => {
  const userFriends = useAppSelector(
    state => state.private.acceptedUserFriends
  );
  return (
    <StyledFriendsBar>
      {userFriends &&
        userFriends.length > 0 &&
        userFriends.map(friend => {
          return (
            <FriendChatBarCard
              key={friend.email}
              info={friend.email}
              chatId={friend.chatId}
            />
          );
        })}
    </StyledFriendsBar>
  );
};

export default ChatBar;
