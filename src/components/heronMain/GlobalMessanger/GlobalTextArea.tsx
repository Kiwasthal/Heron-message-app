import { useState } from 'react';
import { StyledMessageTextArea } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useAppDispatch } from '../../../app/hooks';
import { getGlobalMessage } from '../../../features/messanger/globalSlice';

const GlobalTextArea = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.currentTarget.value);
  const pushMessageToStore = () => dispatch(getGlobalMessage(text));

  return (
    <StyledMessageTextArea
      value={text}
      onChange={handleChange}
      onBlur={pushMessageToStore}
    />
  );
};

export default GlobalTextArea;
