import { signUp } from '../../../features/user/manualSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  dropIn,
  StyledSignInButton,
} from '../../../styledComponents/landingPage/buttons/signInButton';
import { catalogueUser } from '../../../features/user/manualSlice';

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
    name: userNameInput,
  };
  const firestoreData = {
    name: userNameInput,
    email: userEmailInput,
  };
  const submitUser = () => {
    dispatch(signUp(userData));
    dispatch(catalogueUser(firestoreData));
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
