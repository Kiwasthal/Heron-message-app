import {
  dropIn,
  StyledSignInButton,
} from '../../styledComponents/landingPage/buttons/signInButton';

export type SignInButtonProps = {
  children: string;
};

export const SignInButton = ({ children }: SignInButtonProps) => {
  return (
    <StyledSignInButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledSignInButton>
  );
};
