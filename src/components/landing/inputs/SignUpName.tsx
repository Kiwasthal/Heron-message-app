import {
  StyledInput,
  dropInName,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getNameInput } from '../../../features/user/manualSlice';

export const SignUpNameInput = () => {
  const [userName, setUserName] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.currentTarget.value);
  const pushUserNameToStore = () => dispatch(getNameInput(userName));
  return (
    <StyledInput
      variants={dropInName}
      initial="hidden"
      animate="visible"
      exit="exit"
      type="text"
      placeholder="User Name"
      onChange={handleChange}
      onBlur={pushUserNameToStore}
    />
  );
};
