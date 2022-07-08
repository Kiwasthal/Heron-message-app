import { AnimationControls } from 'framer-motion';
import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { useAcceptFriendRequestMutation } from '../../../../features/api/firebaseApi';
import {
  StyledAcceptFriendButton,
  StyledAddFriendCard,
} from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';

type AddFriendProps = {
  data: {
    email: string;
  };
  value: AnimationControls;
  custom: number;
};

const AddFriendCard = (props: AddFriendProps) => {
  const [acceptFriendRequest, error] = useAcceptFriendRequestMutation();
  const userEmail = useAppSelector(state => state.user.userEmail);

  const addFriendData = {
    userEmail,
    friendEmail: props.data.email,
  };

  const addFriendHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    acceptFriendRequest(addFriendData);
  };

  return (
    <StyledAddFriendCard
      custom={props.custom}
      animate={props.value}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <p>{props.data.email}</p>
      <StyledAcceptFriendButton onClick={addFriendHandler}>
        +
      </StyledAcceptFriendButton>
    </StyledAddFriendCard>
  );
};

export default AddFriendCard;
