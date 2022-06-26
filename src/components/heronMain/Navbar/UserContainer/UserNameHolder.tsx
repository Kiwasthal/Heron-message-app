import { useAppSelector } from '../../../../app/hooks';
import { StyledUserNameHolder } from '../../../../styledComponents/heronMain/nav/userContainer/styledUserNameHolder';

export const UserNameHolder = () => {
  const userName = useAppSelector(state => state.user.userName);
  return <StyledUserNameHolder>{userName}</StyledUserNameHolder>;
};
