import { StyledMessangerPanel } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';
import ChatBox from './Chatbox';
import MessageTextarea from './MessageTextarea';
import SendMessageButton from './SendMessageButton';

const MessangerPanel = () => {
  return (
    <StyledMessangerPanel>
      <ChatBox />
      <MessageTextarea />
      <SendMessageButton />
    </StyledMessangerPanel>
  );
};

export default MessangerPanel;
