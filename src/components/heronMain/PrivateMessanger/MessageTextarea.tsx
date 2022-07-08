import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { StyledPrivateTextarea } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type TextAreaProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const MessageTextarea = (props: TextAreaProps) => {
  const loading = useAppSelector(state => state.private.loading);
  const chatroom = useAppSelector(state => state.private.currentChatroom);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (loading) props.setValue('');
  }, [loading]);

  return (
    <StyledPrivateTextarea
      value={props.value}
      onChange={handleChange}
      disabled={chatroom ? false : true}
    />
  );
};

export default MessageTextarea;
