import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useMessageHandler,
} from '../../../app/hooks';
import {
  setPrivateLoadinEnd,
  setPrivateLoadingStart,
} from '../../../features/messanger/privateSlice';
import { StyledSendPrivateMessageButton } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type ButtonProps = {
  messageText: string;
};

const SendMessageButton = ({ messageText }: ButtonProps) => {
  const { data, sendMessage } = useMessageHandler(messageText);
  const chatId = useAppSelector(state => state.private.currentChatroom);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data.status === 'pending') dispatch(setPrivateLoadingStart());
    if (data.status === 'fulfilled') dispatch(setPrivateLoadinEnd());
  }, [data.status]);

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
