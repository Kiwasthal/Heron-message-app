import {
  StyledInput,
  dropInName,
  StyledInputWrapper,
  StyledErrorText,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useState } from 'react';
import { getPasswordInput } from '../../../features/user/manualSlice';

export const SignInPasswordInput = () => {
  const errors = useAppSelector(state => state.user.errors);
  const [missingPass, setMissingPass] = useState<boolean>(false);
  const [userPassword, setUserPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserPassword(e.currentTarget.value);
  const pushUserNameToStore = () => {
    if (userPassword === '') {
      setMissingPass(true);
    } else dispatch(getPasswordInput(userPassword));
  };
  return (
    <StyledInputWrapper>
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
      <StyledErrorText>
        {missingPass
          ? 'Please input your password'
          : errors === 'auth/wrong-password'
          ? 'Wrong Password'
          : errors === 'auth/too-many-requests'
          ? 'Too many wrong attemtps, please try again later.'
          : null}
      </StyledErrorText>
    </StyledInputWrapper>
  );
};
