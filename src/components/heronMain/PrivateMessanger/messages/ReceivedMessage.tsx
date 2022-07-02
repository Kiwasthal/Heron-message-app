import {
  StyledReceivedMessage,
  StyledMessageInfoContainer,
  MessageImage,
  MessageUserName,
  MessageText,
} from '../../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type MessageProps = {
  text: string;
  name: string;
  image: string;
};

const ReceivedMessage = (props: MessageProps) => {
  return (
    <StyledReceivedMessage>
      <StyledMessageInfoContainer>
        <MessageImage src={props.image} />
        <MessageUserName>{props.name}</MessageUserName>
      </StyledMessageInfoContainer>
      <MessageText>{props.text}</MessageText>
    </StyledReceivedMessage>
  );
};

export default ReceivedMessage;
