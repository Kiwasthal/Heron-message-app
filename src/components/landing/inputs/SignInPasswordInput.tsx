import {
  StyledInput,
  dropInName,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useAppDispatch } from '../../../app/hooks';
import { useState } from 'react';
import { getPasswordInput } from '../../../features/user/manualSlice';

export const SignInPasswordInput = () => {
  const [userPassword, setUserPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserPassword(e.currentTarget.value);
  const pushUserNameToStore = () => dispatch(getPasswordInput(userPassword));
  return (
    <StyledInput
      variants={dropInName}
      initial="hidden"
      animate="visible"
      exit="exit"
      type="password"
      placeholder="Enter you Password"
      value={userPassword}
      onChange={handleChange}
      onBlur={pushUserNameToStore}
    />
  );
};
