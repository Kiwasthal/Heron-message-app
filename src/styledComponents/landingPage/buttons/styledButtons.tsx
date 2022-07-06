import styled from 'styled-components';
import { motion } from 'framer-motion';
import googleImage from '../../../assets/googleImg.svg';
import githubImage from '../../../assets/githubImg.svg';

export const StyledButton = styled(motion.button)`
  width: 40%;
  border: none;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
`;

export const StyledSignInButton = styled(StyledButton)`
  background-color: red;
`;

export const StyledGoogleButton = styled(StyledButton)`
  color: #262626;
  background-color: #fff;
  background-image: url(${googleImage});
  background-size: 15%;
  text-align: right;
  padding-right: 2.85rem;
  background-repeat: no-repeat;
  background-position-x: 20%;
  background-position-y: 50%;
`;

export const StyledGithubButton = styled(StyledButton)`
  background-color: ${props => props.theme.main};
  background-image: url(${githubImage});
  text-align: right;
  padding-right: 3rem;
  background-repeat: no-repeat;
  background-position-x: 20%;
  background-position-y: 50%;
`;
