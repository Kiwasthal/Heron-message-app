import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background-color: violet;
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
  gap: 10px;
  grid-auto-rows: minmax(30px, 200px);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledPrivateTextarea = styled.textarea`
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
  background-color: white;
`;

export const StyledSendPrivateMessageButton = styled.button`
  height: 100%;
  width: 100%;
  grid-area: 2 / 2/ 3 / 3;
  background-color: violet;
`;

export const StyledSentMessage = styled.div`
  background-color: #d8b4fe;
  width: 30%;
  justify-self: flex-start;
  border-radius: 20px;
  display: grid;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 50% 1fr;
  height: auto;
  padding: 5px;
`;

export const StyledReceivedMessage = styled.div`
  background-color: yellow;
  justify-self: flex-end;
  width: 30%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 50% 1fr;
  height: auto;
  padding: 5px;
`;

export const StyledMessageInfoContainer = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: 20% 1fr;
  padding: 10px;
`;

export const MessageImage = styled.img`
  height: 30px;
  width: 30px;
  align-self: center;
  justify-self: flex-start;
  border-radius: 50px;
`;

export const MessageUserName = styled.p`
  font-weight: 500;
  padding: 0;
  margin: 0;
  justify-self: flex-start;
  align-self: center;
  font-size: 1.15rem;
  color: #44403c;
`;

export const MessageText = styled.p`
  grid-area: 2 / 1 / 3 / 3;
  padding: 0px 5px 0px 5px;
  overflow-wrap: break-word;
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
