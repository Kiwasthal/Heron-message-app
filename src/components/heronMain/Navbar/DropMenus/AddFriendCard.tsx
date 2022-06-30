import { useAppSelector } from '../../../../app/hooks';
import { useAcceptFriendRequestMutation } from '../../../../features/api/firebaseApi';
import { StyledAddFriendCard } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';

type AddFriendProps = {
  data: {
    email: string;
  };
};

const AddFriendCard = (props: AddFriendProps) => {
  const [sendFriendRequest, data] = useAcceptFriendRequestMutation();
  const userEmail = useAppSelector(state => state.user.userEmail);

  const addFriendData = {
    userEmail,
    friendEmail: props.data.email,
  };
  console.log(props.data.email);

  const addFriendHandler = () => {
    sendFriendRequest(addFriendData);
  };
  return (
    <StyledAddFriendCard>
      <p>{props.data.email}</p>
      <button onClick={addFriendHandler}>+</button>
    </StyledAddFriendCard>
  );
};

export default AddFriendCard;
