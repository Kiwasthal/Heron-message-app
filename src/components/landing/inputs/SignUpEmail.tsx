import {
  StyledInput,
  StyledInputWrapper,
  StyledErrorText,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getEmailInput } from '../../../features/user/manualSlice';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export const SignUpEmailInput = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.currentTarget.value);
  const pushUserNameToStore = () => dispatch(getEmailInput(userEmail));
  return (
    <StyledInputWrapper>
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
      <StyledErrorText />
    </StyledInputWrapper>
  );
};
