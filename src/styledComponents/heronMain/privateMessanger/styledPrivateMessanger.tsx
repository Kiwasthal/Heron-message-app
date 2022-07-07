import styled from 'styled-components';
import { motion } from 'framer-motion';

//Messages

type ImageProps = {
  img: string;
};

export const StyledMessage = styled.div``;

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

export const StyledMessageInner = styled.div`
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
  max-width: calc(100% - 267px);
  overflow-wrap: break-word;
  background-color: red;
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
  max-height: 100px;
  color: #fff;
`;

export const StyledReceivedBubble = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  max-width: calc(100% - 267px);
  overflow-wrap: break-word;
  background-color: blue;
  padding: 12px;
  border-radius: 10px;
  font-size: 18px;
  max-height: 100px;
  color: #fff;
`;

//////////////////////////////////////////////////////////////

export const StyledPrivateMessangerContainer = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2;
  height: 80%;
  width: 80%;
  justify-self: center;
  display: grid;
  grid-template-columns: 12% 88%;
`;

export const StyledFriendsBar = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  background-color: ${props => props.theme.main.elements};
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: flex-start;
  border: 1px solid black;
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
  display: grid;
  padding: 20px;
  grid-template-rows: auto;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
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
  color: #fff;
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
