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
      delay: 1,
    },
  },
  exit: {
    x: '100vh',
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const StyledFriendsModal = styled(motion.div)`
  position: absolute;
  height: 20vh;
  width: 20vw;
  background-color: red;
  top: -30%;
  left: 3%;
  border-radius: 20px;
  background-color: violet;
  position: relative;
`;