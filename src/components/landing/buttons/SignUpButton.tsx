import { signUp } from '../../../features/user/manualSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  dropIn,
  StyledSignInButton,
} from '../../../styledComponents/landingPage/buttons/signInButton';
import { getName } from '../../../features/user/userSlice';

export type SignUpButtonProps = {
  children: string;
};

export const SignUpButton = ({ children }: SignUpButtonProps) => {
  const {
    userNameInput,
    userConfirmPassword,
    userEmailInput,
    userPasswordInput,
  } = useAppSelector(state => state.manual);
  const dispatch = useAppDispatch();
  const userData = {
    email: userEmailInput,
    password: userPasswordInput,
  };
  const submitUser = () => {
    dispatch(signUp(userData));
    dispatch(getName(userNameInput));
  };
  return (
    <StyledSignInButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={submitUser}
    >
      {children}
    </StyledSignInButton>
  );
};
