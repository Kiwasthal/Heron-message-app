import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useAppSelector, useMessageHandler } from '../../../app/hooks';
import { StyledPrivateTextarea } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type TextAreaProps = {
  messageText: string;
  setMessageText: Dispatch<SetStateAction<string>>;
};

const MessageTextarea = ({ messageText, setMessageText }: TextAreaProps) => {
  const { data, sendMessage } = useMessageHandler(messageText);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') sendMessage();
  };

  const loading = useAppSelector(state => state.private.loading);
  const chatroom = useAppSelector(state => state.private.currentChatroom);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.currentTarget.value);
  };

  useEffect(() => {
    if (loading || data.status === 'fulfilled') setMessageText('');
  }, [loading, data.status]);

  return (
    <StyledPrivateTextarea
      value={messageText}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={chatroom ? false : true}
    />
  );
};

export default MessageTextarea;
