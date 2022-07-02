import {
  StyledGoogleButton,
  dropIn,
} from '../../../styledComponents/landingPage/buttons/googleButton';
import { useAppDispatch } from '../../../app/hooks';
import { signInWithGoogle } from '../../../features/user/userSlice';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';
import { catalogueUser } from '../../../features/user/manualSlice';

export type GoogleButtonProps = {
  children: string;
};

type CurrentUserEmail = string | null | undefined;

export const LogInWithGoogleButton = ({ children }: GoogleButtonProps) => {
  const dispatch = useAppDispatch();

  const firestoreData = {
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    photoURL: auth.currentUser?.photoURL,
  };

  let catalogueConditionally = async (curUserEmail: CurrentUserEmail) => {
    const userRef = doc(db, `users/${curUserEmail}`);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) return;
    dispatch(catalogueUser(firestoreData));
  };

  const signIn = async () => {
    await dispatch(signInWithGoogle());
    await catalogueConditionally(auth.currentUser?.email);
  };

  return (
    <StyledGoogleButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={signIn}
    >
      {children}
    </StyledGoogleButton>
  );
};
