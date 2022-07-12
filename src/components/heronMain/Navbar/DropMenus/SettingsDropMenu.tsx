import { AnimationControls, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { clearStore } from '../../../../features/user/userSlice';
import {
  SettingsUserEmail,
  SettingsUserImage,
  SettingsUserName,
  StyledDropContainer,
  StyledLogoutButton,
  StyledSettingsCard,
} from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';

type UserCardProps = {
  value: AnimationControls;
  starting: number;
};

const UserCard = (props: UserCardProps) => {
  const { userImage, userName, userEmail } = useAppSelector(
    state => state.user
  );
  return (
    <StyledSettingsCard custom={props.starting} animate={props.value}>
      <SettingsUserImage img={userImage} />
      <SettingsUserEmail>{userEmail}</SettingsUserEmail>
      <SettingsUserName>{userName}</SettingsUserName>
    </StyledSettingsCard>
  );
};

const LogOutButton = (props: UserCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <StyledLogoutButton
      custom={props.starting}
      animate={props.value}
      onClick={() => dispatch(clearStore())}
    >
      Logout
    </StyledLogoutButton>
  );
};

const SettingsDropMenu = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.set({
      opacity: 0,
      x: '40vh',
    });
  }, [controls]);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: '0vh',
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <StyledDropContainer>
      <UserCard value={controls} starting={0} />
      <LogOutButton value={controls} starting={2} />
    </StyledDropContainer>
  );
};

export default SettingsDropMenu;
