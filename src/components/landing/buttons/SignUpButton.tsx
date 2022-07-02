import { signUp } from '../../../features/user/manualSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  dropIn,
  StyledSignInButton,
} from '../../../styledComponents/landingPage/buttons/signInButton';
import { catalogueUser } from '../../../features/user/manualSlice';
import placeholderImage from '../../../assets/userPlaceHolder.svg';

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
    photoURL: placeholderImage,
  };
  const submitUser = async () => {
    if (userConfirmPassword !== userPasswordInput) {
      console.log('not matching passwords');
    } else {
      dispatch(signUp(userData));
      dispatch(catalogueUser(firestoreData));
    }
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
