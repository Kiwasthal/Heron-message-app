import { StyledNav } from '../../../styledComponents/heronMain/nav/styledNavbar';

const dropLeft = {
  hidden: {
    x: '100vh',
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.25,
      type: 'spring',
      damping: 20,
      stiffness: 400,
      delay: 1,
    },
  },
  exit: {
    x: '100vh',
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <StyledNav
      variants={dropLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledNav>
  );
};

export default Navbar;
