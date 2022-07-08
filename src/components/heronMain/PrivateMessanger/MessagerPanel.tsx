import { useState } from 'react';
import { StyledMessangerPanel } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';
import ChatBox from './Chatbox';
import MessageTextarea from './MessageTextarea';
import SendMessageButton from './SendMessageButton';

const MessangerPanel = () => {
  const [message, setMessage] = useState<string>('');
  return (
    <StyledMessangerPanel>
      <ChatBox />
      <MessageTextarea messageText={message} setMessageText={setMessage} />
      <SendMessageButton messageText={message} />
    </StyledMessangerPanel>
  );
};

export default MessangerPanel;
