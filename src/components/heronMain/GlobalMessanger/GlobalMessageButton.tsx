import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { StyledGlobalMessageButton } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { saveGlobalMessage } from '../../../features/messanger/globalSlice';

const GlobalMessageButton = () => {
  const messageText = useAppSelector(state => state.global.globalChatInput);
  const userName = useAppSelector(state => state.user.userName);
  const userImage = useAppSelector(state => state.user.userImage);
  const dispatch = useAppDispatch();

  const messageInfo = {
    text: messageText,
    name: userName,
    profilePicUrl: userImage,
  };

  const handleClick = () => {
    if (!messageText) return;
    dispatch(saveGlobalMessage(messageInfo));
  };

  return (
    <StyledGlobalMessageButton onClick={handleClick}>
      Send
    </StyledGlobalMessageButton>
  );
};

export default GlobalMessageButton;
