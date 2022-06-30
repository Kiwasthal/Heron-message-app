import styled from 'styled-components';
import { motion } from 'framer-motion';

export const showGlobal = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: '0vh',
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
  grid-area: 1 / 2/ 2 / 3;
  height: 80%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-left: 40px;
  background-color: violet;
  width: 60%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 92% 8%;
  align-self: center;
  justify-self: center;
`;

export const StyledGlobalMessageView = styled.ul`
  grid-area: 1 / 1 / 2 / 3;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 3%;
  ::-webkit-scrollbar {
    background-color: peachpuff;
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a21caf;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: coral;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: orangered;
  }
`;

export const StyledMessageTextArea = styled.textarea`
  grid-area: 2 / 1 / 3 /2;
  resize: none;
  outline: none;
  border: none;
  transition: all 200ms ease-in;
  :hover {
  }
  :active {
    border: none;
  }
  :focus {
    outline: none;
  }
`;

export const StyledGlobalMessageButton = styled.button`
  grid-area: 2 / 2 / 3 / 3;
  height: 100%;
`;

export const StyledGlobalMessage = styled.div`
  height: auto;
  word-wrap: break-word;
  display: grid;
  width: 100%;
  grid-template-columns: 10% 70%;
  background-color: 'violet';
`;

export const StyledImageHolder = styled.img`
  grid-area: 1 / 1 / 3 / 2;
  height: 30px;
  width: 30px;
  align-self: center;
  border-radius: 50px;
  justify-self: center;
`;

export const MessageContent = styled.p`
  margin: 0;
  padding: 0;
  grid-area: 2 / 2 / 3 / 3;
`;
