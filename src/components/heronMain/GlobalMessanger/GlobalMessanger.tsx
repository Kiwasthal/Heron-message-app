import { useAppSelector } from '../../../app/hooks';
import {
  StyledGlobalMessangerContainer,
  showGlobal,
} from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { AnimatePresence } from 'framer-motion';
import GlobalMessageView from './GlobalMessageView';
import GlobalTextArea from './GlobalTextArea';
import GlobalMessageButton from './GlobalMessageButton';

function GlobalMessanger() {
  const isShowing = useAppSelector(state => state.nav.globalChat);
  return (
    <AnimatePresence>
      {isShowing && (
        <StyledGlobalMessangerContainer
          variants={showGlobal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <GlobalMessageView />
          <GlobalTextArea />
          <GlobalMessageButton />
        </StyledGlobalMessangerContainer>
      )}
    </AnimatePresence>
  );
}

export default GlobalMessanger;
