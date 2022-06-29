import { ReactNode } from 'react';
import { StyledAppFeatures } from '../../styledComponents/heronMain/styledMainHolder';

type AppFeaturesProps = {
  children: ReactNode | null;
};

export default function AppFeatures({ children }: AppFeaturesProps) {
  return <StyledAppFeatures>{children}</StyledAppFeatures>;
}
