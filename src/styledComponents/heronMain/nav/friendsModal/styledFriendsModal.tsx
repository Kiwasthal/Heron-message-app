import styled from 'styled-components';
import { motion } from 'framer-motion';

export const dropFmodal = {
  hidden: {
    x: '-100vh',
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.25,
      type: 'spring',
      damping: 20,
      stiffness: 400,
    },
  },
  exit: {
    x: '-100vh',
    opacity: 0,
    transition: {
      delay: 0.1,
    },
  },
};

export const StyledFriendsModal = styled(motion.div)`
  position: absolute;
  height: 20vh;
  width: 20vw;
  background-color: red;
  top: 00%;
  left: 3%;
  border-radius: 20px;
  background-color: ${props => props.theme.main.elements};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  grid-area: 2/ 1 / 3 / 2;
`;

export const CloseFriendsModal = styled.div`
  color: #fff;
  position: absolute;
  font-size: 30px;
  right: 0;
  top: 0;
  padding: 20px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const StyledModalHeader = styled.h2`
  color: ${props => props.theme.text};
`;

export const StyledSearchFriendsButton = styled.button`
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.main.background};
  padding: 4px 12px;
  font-weight: 600;
  transition: all 300ms ease-in;

  :hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.main.background};
  }
`;

export const StyledSearchErrorOutput = styled.p`
  padding: 2px;
  font-size: 1rem;
  color: ${props => props.theme.text};
`;

export const StyledAddFriendInput = styled.input`
  height: 20%;
  width: 80%;
`;
