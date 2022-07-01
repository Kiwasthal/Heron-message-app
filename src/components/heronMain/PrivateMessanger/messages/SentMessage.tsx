import { DocumentData } from 'firebase/firestore';
import { StyledSentMessage } from '../../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type MessageProps = {
  text: string;
};

const SentMessage = (props: MessageProps) => {
  return <StyledSentMessage>{props.text}</StyledSentMessage>;
};

export default SentMessage;
