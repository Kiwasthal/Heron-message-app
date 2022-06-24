import {
  dropIn,
  StyledSignInButton,
} from '../../styledComponents/landingPage/buttons/signInButton';

export const SignInButton = ({ children }: ButtonProps) => {
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
