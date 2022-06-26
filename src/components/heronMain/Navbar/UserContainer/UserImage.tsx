import { StyledUserImage } from '../../../../styledComponents/heronMain/nav/userContainer/styledUserImage';
import { useAppSelector } from '../../../../app/hooks';
import userImgPlaceHolder from '../../../../assets/userPlaceHolder.svg';

export const UserImage = () => {
  let userImageSrc = useAppSelector(state => state.user.userImage);
  if (!userImageSrc) userImageSrc = userImgPlaceHolder;
  return <StyledUserImage src={userImageSrc} />;
};
