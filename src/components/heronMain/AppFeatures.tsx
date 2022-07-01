import { ReactNode } from 'react';
import { useFriendRequests } from '../../app/hooks';
import { StyledAppFeatures } from '../../styledComponents/heronMain/styledMainHolder';

type AppFeaturesProps = {
  children: ReactNode | null;
};

export default function AppFeatures({ children }: AppFeaturesProps) {
  useFriendRequests();
  return <StyledAppFeatures>{children}</StyledAppFeatures>;
}
