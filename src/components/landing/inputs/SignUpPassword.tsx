import {
  StyledErrorText,
  StyledInput,
  StyledInputWrapper,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getPasswordInput } from '../../../features/user/manualSlice';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export const SignUpPasswordInput = () => {
  const [userPassword, setUserPassword] = useState<string>('');
  const errors = useAppSelector(state => state.user.errors);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserPassword(e.currentTarget.value);
  const pushPasswordToStore = () => dispatch(getPasswordInput(userPassword));
  return (
    <StyledInputWrapper>
      <StyledInput
        type="password"
        placeholder="User Password"
        custom={1.6}
        variants={landingElementVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        value={userPassword}
        onChange={handleChange}
        onBlur={pushPasswordToStore}
      />
      <StyledErrorText>
        {errors === 'pass-missing'
          ? 'Please input a password'
          : errors === 'auth/weak-password'
          ? 'Password is too weak'
          : null}
      </StyledErrorText>
    </StyledInputWrapper>
  );
};
