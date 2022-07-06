import {
  StyledInput,
  StyledInputWrapper,
  StyledErrorText,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getNameInput } from '../../../features/user/manualSlice';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export const SignUpNameInput = () => {
  const [userName, setUserName] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.currentTarget.value);
  const pushUserNameToStore = () => dispatch(getNameInput(userName));
  return (
    <StyledInputWrapper>
      <StyledInput
        custom={1.2}
        variants={landingElementVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        type="text"
        placeholder="User Name"
        onChange={handleChange}
        onBlur={pushUserNameToStore}
      />
      <StyledErrorText />
    </StyledInputWrapper>
  );
};
