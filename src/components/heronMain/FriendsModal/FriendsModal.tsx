import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useFriendRequests,
} from '../../../app/hooks';
import { closeFriendsModal } from '../../../features/nav/navSlice';
import { useSendFriendRequestMutation } from '../../../features/api/firebaseApi';
import {
  StyledFriendsModal,
  StyledAddFriendInput,
  dropFmodal,
} from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';
import { CloseFriendsModal } from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';

const FriendsModal = () => {
  const [inputValue, setInputValue] = useState('');
  const userName = useAppSelector(state => state.user.userName);
  const userEmail = useAppSelector(state => state.user.userEmail);
  const userFriends = useAppSelector(state => state.private.userFriends);
  const userAcceptedFriends = useAppSelector(
    state => state.private.acceptedUserFriends
  );
  console.log(userAcceptedFriends);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const isShowing = useAppSelector(state => state.nav.friendsModal);
  const dispatch = useAppDispatch();
  const closeModal = () => dispatch(closeFriendsModal());
  const [sendFriendRequest, data] = useSendFriendRequestMutation();

  const sendRequest = () => {
    const requestData = {
      userName,
      userEmail,
      friendEmail: inputValue,
    };
    if (userEmail === inputValue) {
      console.log('bug');
      console.log(userFriends);
      return;
    }
    sendFriendRequest(requestData);
    if (data.error === 'failed') {
      console.log('here');
    }
    if (data.data === 'resolved') {
      console.log('we did it');
    }
  };

  return (
    <AnimatePresence>
      {isShowing && (
        <StyledFriendsModal
          variants={dropFmodal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CloseFriendsModal onClick={closeModal}>+</CloseFriendsModal>
          <p>Search by email</p>
          <StyledAddFriendInput value={inputValue} onChange={handleChange} />
          <button onClick={sendRequest}>Add</button>
        </StyledFriendsModal>
      )}
    </AnimatePresence>
  );
};

export default FriendsModal;
