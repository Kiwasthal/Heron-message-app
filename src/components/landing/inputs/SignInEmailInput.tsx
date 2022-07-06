import React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getEmailInput } from '../../../features/user/manualSlice';
import {
  StyledInput,
  StyledInputWrapper,
  StyledErrorText,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export const SignInEmailInput = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [emailMiss, setEmailMiss] = useState<boolean>(false);
  const errors = useAppSelector(state => state.user.errors);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.currentTarget.value);
  const pushEmailToStore = () => {
    if (userEmail === '') setEmailMiss(true);
    else {
      dispatch(getEmailInput(userEmail));
      setEmailMiss(false);
    }
  };
  console.log(errors);
  return (
    <StyledInputWrapper>
      <StyledInput
        custom={2}
        variants={landingElementVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        type="text"
        placeholder="User Email"
        value={userEmail}
        onChange={handleChange}
        onBlur={pushEmailToStore}
      />
      <StyledErrorText>
        {emailMiss
          ? 'Please input your email'
          : errors === 'auth/invalid-email'
          ? 'Invalid Email'
          : errors === 'auth/user-not-found'
          ? "Can't find Email."
          : null}
      </StyledErrorText>
    </StyledInputWrapper>
  );
};
