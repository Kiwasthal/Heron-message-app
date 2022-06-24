import { StyledButton } from './buttons';
import styled from 'styled-components';
import googleImage from '../../../assets/googleImg.svg';

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
      delay: 1.4,
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

export const StyledGoogleButton = styled(StyledButton)`
  color: #262626;
  background-color: #fff;
  background-image: url(${googleImage});
  background-size: 15%;
  text-align: right;
  padding-right: 2.85rem;
  background-repeat: no-repeat;
  background-position-x: 20%;
  background-position-y: 50%;
`;
