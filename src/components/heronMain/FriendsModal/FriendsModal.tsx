import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeFriendsModal } from '../../../features/nav/navSlice';
import {
  useAddUserValidationMutation,
  useSendFriendRequestMutation,
} from '../../../features/api/firebaseApi';
import {
  StyledFriendsModal,
  StyledAddFriendInput,
  dropFmodal,
  StyledModalHeader,
  StyledSearchFriendsButton,
  StyledSearchErrorOutput,
} from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';
import { CloseFriendsModal } from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';

const FriendsModal = () => {
  const [errMsg, setErrMsg] = useState('');
  const [inputValue, setInputValue] = useState('');
  const userName = useAppSelector(state => state.user.userName);
  const userEmail = useAppSelector(state => state.user.userEmail);
  const userFriends = useAppSelector(state => state.private.userFriends);
  const userAcceptedFriends = useAppSelector(
    state => state.private.acceptedUserFriends
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const isShowing = useAppSelector(state => state.nav.friendsModal);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(closeFriendsModal());
    setErrMsg('');
  };
  const [sendFriendRequest, data] = useSendFriendRequestMutation();
  const [validateRequest, validation] = useAddUserValidationMutation();

  const requestData = {
    userName,
    userEmail,
    friendEmail: inputValue,
  };

  useEffect(() => {
    if (validation.status === 'fulfilled' && !validation.data)
      setErrMsg('Could Not find User');
    if (validation.status === 'fulfilled' && validation.data) {
      sendFriendRequest(requestData);
    }
  }, [validation.status]);

  useEffect(() => {
    if (data.data === 'resolved') setErrMsg('User succesfully Added');
  }, [data]);

  const sendRequest = () => {
    if (inputValue === '') return;
    else if (userEmail === inputValue) setErrMsg('You can not add yourslef!');
    else if (
      userAcceptedFriends &&
      userAcceptedFriends.some(friend => friend.email === inputValue)
    )
      setErrMsg(`You are already friends with ${inputValue} `);
    else if (
      userFriends &&
      userFriends.some(friend => friend.email === inputValue)
    )
      setErrMsg(`You have already sent a request to ${inputValue} `);
    else validateRequest(inputValue);
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
          <StyledModalHeader>Search by email</StyledModalHeader>
          <StyledAddFriendInput value={inputValue} onChange={handleChange} />
          <StyledSearchErrorOutput>{errMsg}</StyledSearchErrorOutput>
          <StyledSearchFriendsButton
            onClick={sendRequest}
            disabled={validation.status === 'pending'}
          >
            ADD
          </StyledSearchFriendsButton>
        </StyledFriendsModal>
      )}
    </AnimatePresence>
  );
};

export default FriendsModal;
