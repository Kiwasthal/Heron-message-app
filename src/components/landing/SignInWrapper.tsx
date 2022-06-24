import { StyledSignInWrapper } from '../../styledComponents/landingPage/signInWrapper';

type SignInWrapperProps = {
  children: React.ReactNode;
};

const SignInWrapper = ({ children }: SignInWrapperProps) => {
  return <StyledSignInWrapper>{children}</StyledSignInWrapper>;
};

export default SignInWrapper;
