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

export const StyledInput = styled(motion.input)`
  width: 80%;
  height: 100%;
  ::placeholder {
    font-style: italic;
  }
`;

export const StyledErrorText = styled.p`
  color: red;
  height: 20px;
`;
