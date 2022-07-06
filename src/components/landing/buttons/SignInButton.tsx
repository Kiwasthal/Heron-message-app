import { StyledSignInButton } from '../../../styledComponents/landingPage/buttons/styledButtons';
import { logIn } from '../../../features/user/manualSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

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
      custom={2.2}
      variants={landingElementVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={submitLogIn}
    >
      {children}
    </StyledSignInButton>
  );
};
