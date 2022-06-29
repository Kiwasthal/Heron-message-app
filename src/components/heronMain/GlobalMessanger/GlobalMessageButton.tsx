import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { StyledGlobalMessageButton } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useAddGlobalMessageMutation } from '../../../features/api/firebaseApi';
import { RefObject, useEffect, useRef } from 'react';

type ButtonProps = {
  scroll?: RefObject<HTMLDivElement>;
};

const GlobalMessageButton = (props: ButtonProps) => {
  const messageText = useAppSelector(state => state.global.globalChatInput);
  const userName = useAppSelector(state => state.user.userName);
  const userImage = useAppSelector(state => state.user.userImage);
  const [addMessage] = useAddGlobalMessageMutation();

  useEffect(() => {});

  const messageData = {
    text: messageText,
    name: userName,
    profilePicUrl: userImage,
  };

  useEffect(() => {
    if (props.scroll != null)
      props.scroll.current?.scrollIntoView({ behavior: 'smooth' });
  });

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
