import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  width: 100%;
`;

export const StyledSignUpInputWrapper = styled(StyledInputWrapper)`
  height: 90%;
`;

export const StyledInput = styled(motion.input)`
  outline: none;
  border: 0px solid black;
  width: 80%;
  height: 100%;
  padding: 0px 5px 0px 5px;
  ::placeholder {
    font-style: italic;
  }
  :hover {
    border: 1px solid black;
  }
  :focus {
    border: 2px solid ${props => props.theme.main.elements};
  }
`;

export const StyledErrorText = styled.p`
  color: red;
  height: 20px;
`;
