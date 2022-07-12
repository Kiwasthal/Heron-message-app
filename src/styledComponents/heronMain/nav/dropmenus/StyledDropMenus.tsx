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

export const StyledThemeDropmenu = styled(StyledDropContainer)`
  top: 100%;
  gap: 0;
  align-items: center;
`;

export const AnimatedThemeSelection = styled(motion.li)`
  text-align: center;
  list-style: none;
  background-color: ${props => props.theme.dropmenu.main};
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  width: 100%;
  color: ${props => props.theme.text};
  transition: all 200ms;
  &:hover {
    background-color: ${props => props.theme.dropmenu.hovered};
  }
`;

export const StyledAddFriends = styled(motion.div)`
  height: 3vh;
  padding: 20px;
  border-radius: 20px;
  font-size: 24px;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.dropmenu.main};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledAddFriendCard = styled(motion.div)`
  height: auto;
  padding: 20px;
  border-radius: 20px;
  gap: 12px;
  width: auto;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.dropmenu.main};
  &:hover {
    background-color: ${props => props.theme.dropmenu.hovered};
  }
`;

export const StyledAcceptFriendButton = styled.button`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  background-color: ${props => props.theme.main.elements};
  color: ${props => props.theme.text};
  padding: 2px 16px;
  transform: scale(1);
  transition: all 300ms ease;
  outline: none;
  border: none;
  :hover {
    transform: scale(1.1);
  }
`;

export const StyledSettingsCard = styled(motion.div)`
  background-color: ${props => props.theme.dropmenu.main};
  align-self: center;
  width: 90%;
  height: 10vh;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 60% 40%;
  padding: 6px;
  cursor: default;
`;

type ImageProps = {
  img: string | null | undefined;
};

export const SettingsUserImage = styled.div<ImageProps>`
  background-position: center;
  justify-self: center;
  align-self: center;
  background-image: url(${props => props.img});
  background-size: contain;
  grid-area: 1 / 1 / 2 / 2;
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

export const SettingsUserName = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  align-self: center;
  color: ${props => props.theme.text};
`;

export const SettingsUserEmail = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  align-self: center;
  justify-self: center;
  color: ${props => props.theme.text};
`;

export const StyledLogoutButton = styled(motion.button)`
  padding: 4px 12px;
  border-radius: 20px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.dropmenu.main};
  cursor: pointer;
  transition: background-color 200ms;
  &:hover {
    background-color: ${props => props.theme.dropmenu.hovered};
  }
`;
