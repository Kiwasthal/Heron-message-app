import { Dispatch, SetStateAction, useEffect } from 'react';
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
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const SendMessageButton = (props: ButtonProps) => {
  const { data, sendMessage } = useMessageHandler(props.value);
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
