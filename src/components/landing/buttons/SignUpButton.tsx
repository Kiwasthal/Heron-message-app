import {
  dropIn,
  StyledSignInButton,
} from '../../../styledComponents/landingPage/buttons/signInButton';

export type SignUpButtonProps = {
  children: string;
};

export const SignUpButton = ({ children }: SignUpButtonProps) => {
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
