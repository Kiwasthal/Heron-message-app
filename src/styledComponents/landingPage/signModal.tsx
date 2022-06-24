import { motion } from 'framer-motion';
import styled from 'styled-components';

export const dropLeft = {
  hidden: {
    x: '100vh',
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
      delay: 1,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      delay: 12,
    },
  },
};

export const StyledSignModal = styled(motion.div)`
  width: 70%;
  background-color: #ddd6fe;
  height: 70%;
  grid-area: 1 / 2 / 2 / 3;
  align-self: center;
  margin-left: 10vh;
  border-radius: 20px;
  box-shadow: 0px 5px 15px black;
`;
