import {
  StyledMessage,
  StyledMessageAvatar,
  StyledMessageBubble,
  StyledMessageInner,
  StyledMessageOuter,
  StyledNameSpan,
} from '../../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type MessageProps = {
  name: string;
  text: string;
  image: string;
};

const SentMessage = (props: MessageProps) => {
  return (
    <StyledMessage>
      <StyledMessageOuter>
        <StyledMessageAvatar img={props.image} />
        <StyledMessageInner>
          <StyledMessageBubble>
            <StyledNameSpan>{props.name} : </StyledNameSpan>
            {props.text}
          </StyledMessageBubble>
        </StyledMessageInner>
      </StyledMessageOuter>
    </StyledMessage>
  );
};

export default SentMessage;
