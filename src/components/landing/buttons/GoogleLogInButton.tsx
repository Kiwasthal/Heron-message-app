import {
  StyledGoogleButton,
  dropIn,
} from '../../../styledComponents/landingPage/buttons/googleButton';
import { useAppDispatch } from '../../../app/hooks';
import { signInWithGoogle } from '../../../features/user/userSlice';

export type GoogleButtonProps = {
  children: string;
};

export const LogInWithGoogleButton = ({ children }: GoogleButtonProps) => {
  const dispatch = useAppDispatch();
  const signIn = () => dispatch(signInWithGoogle());

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
