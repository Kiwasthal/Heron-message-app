import { useAppSelector } from '../../../app/hooks';
import {
  StyledGlobalMessangerContainer,
  showGlobal,
} from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { AnimatePresence } from 'framer-motion';
import GlobalMessageView from './GlobalMessageView';
import GlobalTextArea from './GlobalTextArea';
import GlobalMessageButton from './GlobalMessageButton';
import { MutableRefObject, useRef } from 'react';

function GlobalMessanger() {
  const isShowing = useAppSelector(state => state.nav.globalChat);
  const scrollBottom = useRef<HTMLDivElement | null>(null);
  return (
    <AnimatePresence>
      {isShowing && (
        <StyledGlobalMessangerContainer
          variants={showGlobal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <GlobalMessageView scroll={scrollBottom} />
          <GlobalTextArea />
          <GlobalMessageButton scroll={scrollBottom} />
        </StyledGlobalMessangerContainer>
      )}
    </AnimatePresence>
  );
}

export default GlobalMessanger;
