import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getEmailInput } from '../../../features/user/userSlice';
import {
  StyledInput,
  dropInEmail,
} from '../../../styledComponents/landingPage/inputs/styledInputs';

export const SignInEmailInput = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.currentTarget.value);
  const pushEmailToStore = () => dispatch(getEmailInput(userEmail));
  return (
    <StyledInput
      variants={dropInEmail}
      initial="hidden"
      animate="visible"
      exit="exit"
      type="text"
      placeholder="User Email"
      value={userEmail}
      onChange={handleChange}
      onBlur={pushEmailToStore}
    />
  );
};
