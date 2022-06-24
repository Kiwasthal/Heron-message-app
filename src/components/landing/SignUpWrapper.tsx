import { StyledSignUpWrapper } from '../../styledComponents/landingPage/signUpWrapper';

type SignUpWrapperProps = {
  children: React.ReactNode;
};

const SignUpWrapper = ({ children }: SignUpWrapperProps) => {
  return <StyledSignUpWrapper>{children}</StyledSignUpWrapper>;
};

export default SignUpWrapper;
