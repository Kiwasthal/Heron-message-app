import {
  StyledInput,
  dropInName,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useAppDispatch } from '../../../app/hooks';
import { useState } from 'react';
import { getNameInput } from '../../../features/user/manualSlice';

export const SignInNameInput = () => {
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
      value={userName}
      onChange={handleChange}
      onBlur={pushUserNameToStore}
    />
  );
};
