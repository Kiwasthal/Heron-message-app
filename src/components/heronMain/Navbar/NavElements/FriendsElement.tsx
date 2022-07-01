import { LeftMostNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { NavFontIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { FriendsDropContainer } from '../DropMenus/FriendsDropMenu';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { StyledBadge } from '../../../../styledComponents/heronMain/badges/badges';
import { AnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

type ElementProps = {
  value: AnimationControls;
};

const FriendsElement = (props: ElementProps) => {
  const isActive = useAppSelector(state => state.nav.friendsElement);
  const friendList = useAppSelector(state => state.private.userFriends);
  const acceptedFriendList = useAppSelector(
    state => state.private.acceptedUserFriends
  );
  const [pendingCount, setPendingCount] = useState<number>(0);

  useEffect(() => {
    let reduce = 0;
    if (friendList)
      setPendingCount(
        friendList.filter(friendRequest => {
          if (friendRequest.status === false) {
            if (acceptedFriendList && acceptedFriendList.length > 0) {
              acceptedFriendList.filter(friend => {
                if (friend.email === friendRequest.email) reduce++;
              });
            }
          }
          return friendRequest;
        }).length - reduce
      );
  }, [friendList]);
  const dispatch = useAppDispatch();
  const showFriends = () => dispatch(showFriendsElement());
  return (
    <LeftMostNavElement onClick={showFriends} custom={2} animate={props.value}>
      {pendingCount > 0 ? <StyledBadge>{pendingCount}</StyledBadge> : null}
      <NavFontIcon icon={faUserFriends} />
      <ElementTag>Friends</ElementTag>
      {isActive && <FriendsDropContainer />}
    </LeftMostNavElement>
  );
};
export default FriendsElement;
