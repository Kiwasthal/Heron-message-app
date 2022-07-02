import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../../../app/hooks';
import { StyledPrivateMessangerContainer } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';
import ChatBar from './ChatBar';
import MessangerPanel from './MessagerPanel';
import { showPrivate } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

const PrivateMessanger = () => {
  const isShowing = useAppSelector(state => state.nav.chatBar);

  return (
    <AnimatePresence>
      {isShowing && (
        <StyledPrivateMessangerContainer
          variants={showPrivate}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ChatBar />
          <MessangerPanel />
        </StyledPrivateMessangerContainer>
      )}
    </AnimatePresence>
  );
};

export default PrivateMessanger;
