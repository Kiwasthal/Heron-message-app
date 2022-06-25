import {
  dropInPass,
  StyledInput,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getPasswordInput } from '../../../features/user/manualSlice';

export const SignUpPasswordInput = () => {
  const [userPassword, setUserPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserPassword(e.currentTarget.value);
  const pushPasswordToStore = () => dispatch(getPasswordInput(userPassword));
  return (
    <StyledInput
      type="password"
      placeholder="User Password"
      variants={dropInPass}
      initial="hidden"
      animate="visible"
      exit="exit"
      value={userPassword}
      onChange={handleChange}
      onBlur={pushPasswordToStore}
    />
  );
};
