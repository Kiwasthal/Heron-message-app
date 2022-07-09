import styled from 'styled-components';
import { motion } from 'framer-motion';

//Messages

type ImageProps = {
  img: string;
};

export const StyledMessage = styled.div`
  width: calc(100% -267px);
`;

export const StyledMessageOuter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMessageOuterReversed = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 20px;
`;

export const StyledNameSpan = styled.span`
  color: ${props => props.theme.text};
  font-weight: 600;
  font-style: italic;
`;

export const StyledMessageInner = styled.div`
  width: 120%;
  flex: 1;
  display: flex;
`;

export const StyledMessageInnerReversed = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const StyledMessageAvatar = styled.div<ImageProps>`
  background-image: url(${props => props.img});
  background-size: 100%;
  padding-left: 6px;
  padding-right: 8px;
  background-repeat: no-repeat;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  justify-self: center;
`;

export const StyledMessageBubble = styled.div`
  margin-left: 20px;
  max-width: calc(100% -267px);
  overflow-wrap: anywhere;
  background-image: ${props => props.theme.chatbox.sent};
  color: ${props => props.theme.text};
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
  max-height: 100px;
`;

export const StyledReceivedBubble = styled.div`
  margin-right: 20px;
  max-width: calc(100% - 267px);
  overflow-wrap: anywhere;
  background-image: ${props => props.theme.chatbox.received};
  color: ${props => props.theme.text};
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
  max-height: 100px;
`;

//////////////////////////////////////////////////////////////

export const StyledPrivateMessangerContainer = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2;
  height: 80%;
  width: 80%;
  justify-self: center;
  display: grid;
  grid-template-columns: 12% 88%;
  box-shadow: 0px 5px 5px black;
`;

export const StyledFriendsBar = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  background-color: ${props => props.theme.main.elements};
  display: flex;
  flex-direction: column;
  flex: auto;
  z-index: 1001;
  justify-content: flex-start;
  box-shadow: 8px 0px 12px rgba(0, 0, 0, 0.5);
`;

export const StyledChatBarCard = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  transition: all 200ms ease-in;
  cursor: pointer;
  padding: 10px;
  :hover {
    background-color: grey;
  }
`;

export const StyledFriendTag = styled.img`
  border-radius: 50px;
  object-fit: cover;
  height: 50px;
`;

export const StyledMessangerPanel = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
  grid-template-columns: 82% 18%;
  grid-template-rows: 93% 7%;
`;

export const StyledChatBox = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  background-color: #fff;
  height: 67vh;
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 0px 20px 20px;
  width: 100%;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${props => props.theme.chatbox.background};
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

export const StyledPrivateTextarea = styled.textarea`
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
  background-color: white;
  resize: none;
`;

export const StyledSendPrivateMessageButton = styled.button`
  height: 100%;
  width: 100%;
  grid-area: 2 / 2/ 3 / 3;
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

export const showPrivate = {
  hidden: {
    x: '-100vh',
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
