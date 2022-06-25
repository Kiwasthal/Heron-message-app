import {
  StyledInput,
  dropInConfPass,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getConfirmationPasswordInput } from '../../../features/user/manualSlice';

export const SignUpConfirmPasswordInput = () => {
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserConfirmPassword(e.currentTarget.value);
  const pushUserNameToStore = () =>
    dispatch(getConfirmationPasswordInput(userConfirmPassword));
  return (
    <StyledInput
      type="password"
      placeholder="Confirm Password"
      variants={dropInConfPass}
      initial="hidden"
      animate="visible"
      exit="exit"
      value={userConfirmPassword}
      onChange={handleChange}
      onBlur={pushUserNameToStore}
    />
  );
};
