import {
  StyledInput,
  StyledInputWrapper,
  StyledErrorText,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getConfirmationPasswordInput } from '../../../features/user/manualSlice';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export const SignUpConfirmPasswordInput = () => {
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserConfirmPassword(e.currentTarget.value);
  const pushUserNameToStore = () =>
    dispatch(getConfirmationPasswordInput(userConfirmPassword));
  return (
    <StyledInputWrapper>
      <StyledInput
        custom={1.8}
        type="password"
        placeholder="Confirm Password"
        variants={landingElementVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        value={userConfirmPassword}
        onChange={handleChange}
        onBlur={pushUserNameToStore}
      />
      <StyledErrorText />
    </StyledInputWrapper>
  );
};
