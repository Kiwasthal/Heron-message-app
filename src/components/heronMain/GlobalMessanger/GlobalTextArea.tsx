import { useEffect, useState } from 'react';
import { StyledMessageTextArea } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getGlobalMessage } from '../../../features/messanger/globalSlice';

const GlobalTextArea = () => {
  const [text, setText] = useState<string>('');
  const loading = useAppSelector(state => state.global.loading);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.currentTarget.value);
  const pushMessageToStore = () => dispatch(getGlobalMessage(text));

  useEffect(() => {
    if (loading) {
      setText('');
      dispatch(getGlobalMessage(''));
    }
  }, [loading, dispatch]);

  return (
    <StyledMessageTextArea
      value={text}
      onChange={handleChange}
      onBlur={pushMessageToStore}
      maxLength={100}
    />
  );
};

export default GlobalTextArea;
