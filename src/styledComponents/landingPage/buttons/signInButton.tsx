import { StyledButton } from './buttons';
import { ButtonProps } from './buttons';
import styled from 'styled-components';

const StyledSignInButton = styled(StyledButton)`
  background-color: red;
`;

export const SignInButton = ({ children }: ButtonProps) => {
  return <StyledSignInButton>{children}</StyledSignInButton>;
};
