import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledPrivateMessangerContainer = styled(motion.div)`
  grid-area: 1 / 1 / 2 / 2;
  border: 1px solid black;
  height: 80%;
  width: 80%;
  justify-self: center;
  display: grid;
  grid-template-columns: 12% 88%;
`;

export const StyledFriendsBar = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: flex-start;
  padding: 10px;
`;

export const StyledChatBarCard = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: center;
`;

export const StyledFriendTag = styled.img`
  border: 1px solid black;
  border-radius: 50px;
  object-fit: cover;
  height: 50px;
`;

export const StyledMessangerPanel = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  background-color: black;
  display: grid;
  grid-template-columns: 82% 18%;
  grid-template-rows: 93% 7%;
`;

export const StyledChatBox = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  background-color: red;
`;

export const StyledPrivateTextarea = styled.textarea`
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;
  background-color: yellow;
`;

export const StyledSendPrivateMessageButton = styled.button`
  height: 100%;
  width: 100%;
  grid-area: 2 / 2/ 3 / 3;
  background-color: grey;
`;

export const StyledSentMessage = styled.div`
  background-color: blue;
`;

export const StyledReceivedMessage = styled.div`
  background-color: yellow;
`;
