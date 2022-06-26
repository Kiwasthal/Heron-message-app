import { StyledHeronMainHolder } from '../../styledComponents/heronMain/styledMainHolder';

type HeronMainProps = {
  children: React.ReactNode;
};

function HeronMainHolder({ children }: HeronMainProps) {
  return <StyledHeronMainHolder>{children}</StyledHeronMainHolder>;
}

export default HeronMainHolder;
