import { useAppSelector } from '../../../app/hooks';
import { StyledGlobalMessageButton } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useAddGlobalMessageMutation } from '../../../features/api/firebaseApi';

const GlobalMessageButton = () => {
  const messageText = useAppSelector(state => state.global.globalChatInput);
  const userName = useAppSelector(state => state.user.userName);
  const userImage = useAppSelector(state => state.user.userImage);
  const [addMessage] = useAddGlobalMessageMutation();

  const messageData = {
    text: messageText,
    name: userName,
    profilePicUrl: userImage,
  };

  const handleSubmit = async () => {
    if (!messageText) return;
    await addMessage(messageData);
  };

  return (
    <StyledGlobalMessageButton onClick={handleSubmit}>
      Send
    </StyledGlobalMessageButton>
  );
};

export default GlobalMessageButton;
