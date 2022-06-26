import { StyledUserImage } from '../../../../styledComponents/heronMain/nav/userContainer/styledUserImage';
import { useAppSelector } from '../../../../app/hooks';

export const UserImage = () => {
  let userImageSrc = useAppSelector(state => state.user.userImage);
  if (!userImageSrc) userImageSrc = '';
  return <StyledUserImage src={userImageSrc} />;
};
