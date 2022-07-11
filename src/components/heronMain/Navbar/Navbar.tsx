import { dropLeft } from '../../../styledComponents/heronMain/nav/variants/navbarVariant';
import { StyledNav } from '../../../styledComponents/heronMain/nav/styledNavbar';
import FriendsElement from './NavElements/FriendsElement';
import GlobalElement from './NavElements/GlobalElemen';
import MessageElement from './NavElements/MessageElement';
import ThemeElement from './NavElements/ThemeElement';
import SettingsElement from './NavElements/SettingsElement';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Navbar = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set({
      opacity: 1,
      y: '-40vh',
    });
  }, [controls]);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: '0vh',
      transition: { delay: i * 0.5 },
    }));
  }, [controls]);

  return (
    <StyledNav
      variants={dropLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <FriendsElement value={controls} />
      <GlobalElement value={controls} />
      <MessageElement value={controls} />
      <ThemeElement value={controls} />
      <SettingsElement value={controls} />
    </StyledNav>
  );
};

export default Navbar;
