import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeType } from '../../../theme/defaultTheme';

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
  background-color: ${props => props.theme.chatbox.background};
  width: 60%;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 92% 8%;
  align-self: center;
  justify-self: center;
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.6);
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
    background-color: ${props => props.theme.main.background};
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.main.elements};
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.dropmenu.main};
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: ${props => props.theme.dropmenu.hovered};
  }
`;

export const StyledMessageTextArea = styled.textarea`
  grid-area: 2 / 1 / 3 /2;
  resize: none;
  outline: none;
  border: 2px solid ${props => props.theme.main.elements};
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
  background-color: ${props => props.theme.main.elements};
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 200ms ease-in;
  color: ${props => props.theme.text};
  transform: scale(1);
  :hover {
    background-color: ${props => props.theme.secondary.elements};
  }
  :active {
    transform: scale(0.9);
  }
`;

export const StyledGlobalMessage = styled.div`
  height: auto;
  word-wrap: break-word;
  display: grid;
  width: 100%;
  grid-template-columns: 10% 70%;
  background-color: ${props => props.theme.chatbox.background};
`;

type StyledImageProps = {
  img: string;
};

export const StyledImageHolder = styled.div<StyledImageProps>`
  grid-area: 1 / 1 / 3 / 2;
  height: 30px;
  width: 30px;
  align-self: center;
  border-radius: 50px;
  justify-self: center;
  background: url(${props => props.img});
  background-size: 100%;
`;

export const MessageContent = styled.p`
  margin: 0;
  padding: 0;
  grid-area: 2 / 2 / 3 / 3;
`;
