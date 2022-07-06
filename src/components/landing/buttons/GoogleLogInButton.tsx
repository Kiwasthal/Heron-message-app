import { useAppDispatch } from '../../../app/hooks';
import { signInWithGoogle } from '../../../features/user/userSlice';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';
import { catalogueUser } from '../../../features/user/manualSlice';
import { StyledGoogleButton } from '../../../styledComponents/landingPage/buttons/styledButtons';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

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
    if (docSnap.exists()) return;
    await dispatch(catalogueUser(firestoreData));
  };

  const signIn = async () => {
    await dispatch(signInWithGoogle('user')).then(() => {
      catalogueConditionally();
    });
  };

  return (
    <StyledGoogleButton
      custom={2.4}
      variants={landingElementVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={signIn}
    >
      {children}
    </StyledGoogleButton>
  );
};
