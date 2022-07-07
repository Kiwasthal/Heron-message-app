import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useAddPrivateMessageMutation } from '../../../features/api/firebaseApi';
import {
  setPrivateLoadinEnd,
  setPrivateLoadingStart,
} from '../../../features/messanger/privateSlice';
import { StyledSendPrivateMessageButton } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

const SendMessageButton = () => {
  const message = useAppSelector(state => state.private.currentMessageText);
  const userName = useAppSelector(state => state.user.userName);
  const userEmail = useAppSelector(state => state.user.userEmail);
  const userImage = useAppSelector(state => state.user.userImage);
  const chatId = useAppSelector(state => state.private.currentChatroom);
  const dispatch = useAppDispatch();
  const [addMessage, data] = useAddPrivateMessageMutation();

  useEffect(() => {
    if (data.status === 'pending') dispatch(setPrivateLoadingStart());
    if (data.status === 'fulfilled') dispatch(setPrivateLoadinEnd());
  }, [data.status]);
  console.log(chatId);

  const messageData = {
    chatId: chatId,
    text: message,
    name: userName,
    email: userEmail,
    profilePicUrl: userImage,
  };

  const sendMessage = async () => {
    if (!message) return;
    await addMessage(messageData);
  };
  return (
    <StyledSendPrivateMessageButton
      onClick={sendMessage}
      disabled={chatId ? false : true}
    >
      Send
    </StyledSendPrivateMessageButton>
  );
};

export default SendMessageButton;
