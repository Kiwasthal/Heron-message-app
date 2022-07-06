import { StyledChangeView } from '../../styledComponents/landingPage/text/changeDisplay';
import { landingElementVariants } from '../../styledComponents/landingPage/variants/landingElementsVariants';

type ChangeViewProps = {
  children: string;
  handleView: () => void;
};

const ChangeView = ({ children, handleView }: ChangeViewProps) => {
  return (
    <StyledChangeView
      custom={3}
      variants={landingElementVariants}
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
