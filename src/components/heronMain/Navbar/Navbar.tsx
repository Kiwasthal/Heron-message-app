import { dropLeft } from '../../../styledComponents/heronMain/nav/variants/navbarVariant';
import UserElement from './NavElements/UserElement';
import GlobalElement from './NavElements/GlobalElemen';
import { StyledNav } from '../../../styledComponents/heronMain/nav/styledNavbar';
import MessageElement from './NavElements/MessageElement';
import ThemeElement from './NavElements/ThemeElement';
import SettingsElement from './NavElements/SettingsElement';

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = () => {
  return (
    <StyledNav
      variants={dropLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <UserElement />
      <GlobalElement />
      <MessageElement />
      <ThemeElement />
      <SettingsElement />
    </StyledNav>
  );
};

export default Navbar;
