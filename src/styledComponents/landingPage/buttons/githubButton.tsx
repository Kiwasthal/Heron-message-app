import { StyledButton } from './buttons';
import styled from 'styled-components';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const StyledSignInButton = styled(StyledButton)`
  background-color: red;
`;

export const SignInButton = () => {
  return (
    <StyledSignInButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></StyledSignInButton>
  );
};
