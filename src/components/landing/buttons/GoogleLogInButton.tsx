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

export const LogInWithGoogleButton = ({ children }: GoogleButtonProps) => {
  const dispatch = useAppDispatch();

  let catalogueConditionally = async () => {
    const firestoreData = {
      name: auth.currentUser?.displayName,
      email: auth.currentUser?.email,
      photoURL: auth.currentUser?.photoURL,
    };
    const userRef = doc(db, `users`, `${firestoreData.email}`);
    const docSnap = await getDoc(userRef);
    console.log('condition', docSnap.exists());
    if (docSnap.exists()) return;
    console.log(firestoreData);
    await dispatch(catalogueUser(firestoreData));
  };

  const signIn = async () => {
    await dispatch(signInWithGoogle('user')).then(() => {
      const firestoreData = {
        name: auth.currentUser?.displayName,
        email: auth.currentUser?.email,
        photoURL: auth.currentUser?.photoURL,
      };
      catalogueConditionally();
    });
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
