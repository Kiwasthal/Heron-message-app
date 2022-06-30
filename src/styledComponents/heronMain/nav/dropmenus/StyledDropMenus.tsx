import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledDropContainer = styled.div`
  position: absolute;
  width: 100%;
  top: calc(100% + 15px);
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledAddFriends = styled(motion.div)`
  height: 3vh;
  padding: 20px;
  border-radius: 20px;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const StyledAddFriendCard = styled(motion.div)`
  height: 3vh;
  padding: 20px;
  border-radius: 20px;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: red;
`;
