import { StyledChangeView } from '../../styledComponents/landingPage/text/changeDisplay';

export const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

type ChangeViewProps = {
  children: string;
  handleView: () => void;
};

const ChangeView = ({ children, handleView }: ChangeViewProps) => {
  return (
    <StyledChangeView
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleView}
    >
      {children}
    </StyledChangeView>
  );
};

export default ChangeView;
