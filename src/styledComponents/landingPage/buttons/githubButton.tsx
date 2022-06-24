import { StyledButton } from './buttons';
import styled from 'styled-components';
import githubImage from '../../../assets/githubImg.svg';

export const dropIn = {
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
      delay: 1.5,
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

export const StyledGithubButton = styled(StyledButton)`
  background-color: #27272a;
  background-image: url(${githubImage});
  text-align: right;
  padding-right: 3rem;
  background-repeat: no-repeat;
  background-position-x: 20%;
  background-position-y: 50%;
`;
