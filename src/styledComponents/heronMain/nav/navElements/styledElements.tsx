import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export const StyledNavElement = styled(motion.div)`
  display: grid;
  height: 100%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  border-right: 2px solid #fff;
  cursor: pointer;
  background-color: inherit;
  transition: all 400ms ease;
  &:hover {
    background-color: grey;
  }
`;

export const LeftMostNavElement = styled(StyledNavElement)`
  border-bottom-left-radius: 40px;
`;

export const RightMostNavElement = styled(StyledNavElement)`
  border-bottom-right-radius: 40px;
  border-right: none;
`;

export const ElementTag = styled.p`
  color: #fff;
  font-size: 24px;
  margin: 0;
  padding: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const UserIcon = styled.img`
  height: 43px;
  width: 43px;
  justify-self: center;
  border-radius: 50px;
  align-self: center;
`;

export const NavFontIcon = styled(FontAwesomeIcon)`
  align-self: center;
  height: 2.25rem;
  color: #fff;
`;
