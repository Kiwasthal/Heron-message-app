import { StyledFooter } from '../../../styledComponents/heronMain/styledFooter';

const dropRight = {
  hidden: {
    x: '-100vh',
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
      delay: 1.5,
    },
  },
  exit: {
    x: '-100vh',
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
};

type FooterProps = {
  children: React.ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <StyledFooter
      variants={dropRight}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledFooter>
  );
};

export default Footer;
