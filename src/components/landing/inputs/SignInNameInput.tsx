import {
  StyledInput,
  dropInName,
} from '../../../styledComponents/landingPage/inputs/styledInputs';
import { useAppDispatch } from '../../../app/hooks';
import { useState } from 'react';

export const SignInPasswordInput = () => {
  const [userPassword, setUserPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserName(e.currentTarget.value);
  // const pushUserNameToStore = () => dispatch(getNameInput(userName));
  return (
    <StyledInput
      variants={dropInName}
      initial="hidden"
      animate="visible"
      exit="exit"
      type="password"
      placeholder="Enter you Password"
    />
  );
};
