import { UserIcon } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { LeftMostNavElement } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import { useAppSelector } from '../../../../app/hooks';
import { ElementTag } from '../../../../styledComponents/heronMain/nav/navElements/styledElements';
import userImgPlaceHolder from '../../../../assets/userPlaceHolder.svg';

const UserElement = () => {
  let userImageSrc = useAppSelector(state => state.user.userImage);
  if (!userImageSrc) userImageSrc = userImgPlaceHolder;

  return (
    <LeftMostNavElement>
      <UserIcon src={userImageSrc} />
      <ElementTag>User</ElementTag>
    </LeftMostNavElement>
  );
};
export default UserElement;
