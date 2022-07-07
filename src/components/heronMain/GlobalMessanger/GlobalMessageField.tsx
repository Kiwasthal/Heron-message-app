import { Timestamp } from 'firebase/firestore';
import { useAppSelector } from '../../../app/hooks';
import { StyledImageHolder } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { MessageContent } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { StyledGlobalMessage } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';

type MessageProps = {
  text: string;
  name: string;
  image: string;
  timestamp: Timestamp;
};

const GlobalMessageField = (props: MessageProps) => {
  return (
    <StyledGlobalMessage>
      <StyledImageHolder img={props.image} />
      <div>{props.name}</div>
      <MessageContent>{props.text}</MessageContent>
    </StyledGlobalMessage>
  );
};

export default GlobalMessageField;
