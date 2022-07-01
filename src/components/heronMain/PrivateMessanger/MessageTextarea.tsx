import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { storeCurrentTextValue } from '../../../features/messanger/privateSlice';
import { StyledPrivateTextarea } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

const MessageTextarea = () => {
  const [messageValue, setMessageValue] = useState<string>('');
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
    />
  );
};

export default MessageTextarea;
