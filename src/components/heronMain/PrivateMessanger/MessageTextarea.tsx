import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { storeCurrentTextValue } from '../../../features/messanger/privateSlice';
import { StyledPrivateTextarea } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

const MessageTextarea = () => {
  const [messageValue, setMessageValue] = useState<string>('');
  const chatroom = useAppSelector(state => state.private.currentChatroom);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessageValue(e.currentTarget.value);
  const pushMessageToStore = () =>
    dispatch(storeCurrentTextValue(messageValue));

  return (
    <StyledPrivateTextarea
      value={messageValue}
      onChange={handleChange}
      onBlur={pushMessageToStore}
      disabled={chatroom ? false : true}
    />
  );
};

export default MessageTextarea;
