import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { StyledGlobalMessageButton } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useAddGlobalMessageMutation } from '../../../features/api/firebaseApi';
import { RefObject, useEffect } from 'react';
import {
  setGlobalLoadingEnd,
  setGlobalLoadingStart,
} from '../../../features/messanger/globalSlice';

type ButtonProps = {
  scroll?: RefObject<HTMLDivElement>;
};

const GlobalMessageButton = (props: ButtonProps) => {
  const messageText = useAppSelector(state => state.global.globalChatInput);
  const userName = useAppSelector(state => state.user.userName);
  const userImage = useAppSelector(state => state.user.userImage);
  const dispatch = useAppDispatch();
  const [addMessage, data] = useAddGlobalMessageMutation();

  const messageData = {
    text: messageText,
    name: userName,
    profilePicUrl: userImage,
  };

  useEffect(() => {
    if (data.status === 'pending') dispatch(setGlobalLoadingStart());
    if (data.status === 'fulfilled') dispatch(setGlobalLoadingEnd());
  }, [data.status, dispatch]);

  useEffect(() => {
    if (props.scroll != null)
      props.scroll.current?.scrollIntoView({ behavior: 'smooth' });
  });

  const handleSubmit = async () => {
    if (messageText === '' || !messageText) return;
    await addMessage(messageData);
  };

  return (
    <StyledGlobalMessageButton onClick={handleSubmit}>
      Send
    </StyledGlobalMessageButton>
  );
};

export default GlobalMessageButton;
