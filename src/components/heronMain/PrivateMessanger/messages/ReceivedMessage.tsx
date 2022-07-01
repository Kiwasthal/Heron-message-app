import { StyledReceivedMessage } from '../../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type MessageProps = {
  text: string;
};

const ReceivedMessage = (props: MessageProps) => {
  return <StyledReceivedMessage>{props.text}</StyledReceivedMessage>;
};

export default ReceivedMessage;
