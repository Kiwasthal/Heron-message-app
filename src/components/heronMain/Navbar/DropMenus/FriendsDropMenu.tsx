import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { StyledDropContainer } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import { AddFriendsElement } from './DropContent';
import AddFriendCard from './AddFriendCard';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const FriendsDropContainer = () => {
  const acceptedFriendList = useAppSelector(
    state => state.private.acceptedUserFriends
  );
  const friendList = useAppSelector(state => state.private.userFriends);
  const dispatch = useAppDispatch();
  const clearDisplay = () => dispatch(showFriendsElement());

  const controls = useAnimation();
  useEffect(() => {
    controls.set({
      opacity: 0,
      x: '30vh',
    });
  }, [controls]);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: '0vh',
      transition: {
        duration: 0.25,
        type: 'spring',
        damping: 20,
        stiffness: 400,
        delay: i * 0.1,
      },
    }));
  }, [controls]);

  return (
    <StyledDropContainer onMouseLeave={clearDisplay}>
      <AddFriendsElement />
      {friendList &&
        friendList.length > 0 &&
        friendList.map((friendRequest, index) => {
          let condition = true;
          if (!friendRequest.name) return;
          acceptedFriendList &&
            acceptedFriendList.filter(friend => {
              if (friend.email === friendRequest.email) condition = false;
            });
          if (condition)
            return (
              <AddFriendCard
                key={friendRequest.name}
                data={friendRequest}
                value={controls}
                custom={index}
              />
            );
        })}
    </StyledDropContainer>
  );
};
