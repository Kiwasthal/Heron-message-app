import {
  dropIn,
  StyledSignInButton,
} from '../../../styledComponents/landingPage/buttons/signInButton';
import { logIn } from '../../../features/user/manualSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

export type SignInButtonProps = {
  children: string;
};

export const SignInButton = ({ children }: SignInButtonProps) => {
  const userLogInMail = useAppSelector(state => state.manual.userEmailInput);
  const userLogInPassword = useAppSelector(
    state => state.manual.userPasswordInput
  );
  const dispatch = useAppDispatch();
  const logInData = {
    email: userLogInMail,
    password: userLogInPassword,
  };
  const submitLogIn = () => {
    if (userLogInMail !== '' && userLogInPassword !== '')
      dispatch(logIn(logInData));
  };

  return (
    <StyledSignInButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={submitLogIn}
    >
      {children}
    </StyledSignInButton>
  );
};
