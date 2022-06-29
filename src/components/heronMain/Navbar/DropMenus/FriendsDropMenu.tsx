import { AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { StyledDropContainer } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import { AddFriendsElement } from './DropContent';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const FriendsDropContainer = () => {
  const userEmail = useAppSelector(state => state.user.userEmail);
  const dispatch = useAppDispatch();
  const clearDisplay = () => dispatch(showFriendsElement());
  const q = query(
    collection(db, `users`),
    where('__name__', '==', `${userEmail}`)
  );
  const [friendRequests] = useCollectionData(q);
  console.log(friendRequests);

  return (
    <StyledDropContainer onMouseLeave={clearDisplay}>
      <AddFriendsElement />
      {friendRequests &&
        friendRequests[0].friends?.map(request => {
          return <div>{request.name}</div>;
        })}
    </StyledDropContainer>
  );
};
