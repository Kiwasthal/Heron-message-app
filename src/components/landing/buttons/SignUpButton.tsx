import {
  signUp,
  catalogueUser,
  logOut,
} from '../../../features/user/manualSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  dropIn,
  StyledSignInButton,
} from '../../../styledComponents/landingPage/buttons/signInButton';
import placeholderImage from '../../../assets/userPlaceHolder.svg';
import { auth } from '../../../firebase/firebase';
import { useEffect } from 'react';

export type SignUpButtonProps = {
  children: string;
};

export const SignUpButton = ({ children }: SignUpButtonProps) => {
  const loading = useAppSelector(state => state.user.loading);
  const error = useAppSelector(state => state.user.errors);
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
    if (userConfirmPassword !== userPasswordInput) return;
    try {
      await dispatch(signUp(userData))
        .then(() => {
          if (auth.currentUser?.email) dispatch(catalogueUser(firestoreData));
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledSignInButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={submitUser}
      disabled={loading ? true : false}
    >
      {children}
    </StyledSignInButton>
  );
};
