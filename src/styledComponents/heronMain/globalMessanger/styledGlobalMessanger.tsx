import styled from 'styled-components';
import { motion } from 'framer-motion';

export const showGlobal = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
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

export const StyledGlobalMessangerContainer = styled(motion.div)`
  grid-area: 1 / 2 / 2 / 3;
  width: 70%;
  justify-self: center;
  background-color: violet;
  margin-left: 130px;
  height: 90%;
  border-radius: 15px;
  border: 1px solid black;
  align-self: center;
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 20%;
  grid-template-rows: 1fr 10%;
`;

export const StyledGlobalMessageView = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const StyledMessageTextArea = styled.textarea`
  grid-area: 2 / 1 / 3 /2;
`;

export const StyledGlobalMessageButton = styled.button`
  grid-area: 2 / 2 / 3 / 3;
  height: 100%;
`;
