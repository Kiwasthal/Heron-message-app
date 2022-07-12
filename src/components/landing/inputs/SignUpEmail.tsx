import {
  StyledInput,
  StyledErrorText,
  StyledSignUpInputWrapper,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getEmailInput } from '../../../features/user/manualSlice';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export const SignUpEmailInput = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const errors = useAppSelector(state => state.user.errors);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.currentTarget.value);
  const pushUserNameToStore = () => dispatch(getEmailInput(userEmail));
  console.log(errors);
  return (
    <StyledSignUpInputWrapper>
      <StyledInput
        custom={1.4}
        variants={landingElementVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        type="text"
        placeholder="User Email"
        value={userEmail}
        onChange={handleChange}
        onBlur={pushUserNameToStore}
      />
      <StyledErrorText>
        {errors === 'email-missing'
          ? 'Please input your email'
          : errors === 'auth/invalid-email'
          ? 'Please input a valid email address'
          : errors === 'auth/email-already-in-use'
          ? 'This email is already in use'
          : null}
      </StyledErrorText>
    </StyledSignUpInputWrapper>
  );
};
