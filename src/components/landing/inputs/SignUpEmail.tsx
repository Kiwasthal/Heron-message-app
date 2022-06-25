import {
  StyledInput,
  dropInEmail,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getEmailInput } from '../../../features/user/manualSlice';

export const SignUpEmailInput = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.currentTarget.value);
  const pushUserNameToStore = () => dispatch(getEmailInput(userEmail));
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
      onBlur={pushUserNameToStore}
    />
  );
};
