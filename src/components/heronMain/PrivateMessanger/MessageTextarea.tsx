import React, { Dispatch, SetStateAction, useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useMessageHandler,
} from '../../../app/hooks';
import { useAddPrivateMessageMutation } from '../../../features/api/firebaseApi';
import { StyledPrivateTextarea } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type TextAreaProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const MessageTextarea = (props: TextAreaProps) => {
  const { data, sendMessage } = useMessageHandler(props.value);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') sendMessage();
  };

  const loading = useAppSelector(state => state.private.loading);
  const chatroom = useAppSelector(state => state.private.currentChatroom);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (loading || data.status === 'fulfilled') props.setValue('');
  }, [loading, data.status]);

  return (
    <StyledPrivateTextarea
      value={props.value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={chatroom ? false : true}
    />
  );
};

export default MessageTextarea;
