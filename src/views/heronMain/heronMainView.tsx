import HeronMainHolder from '../../components/heronMain/HeronMainHolder';
import Navbar from '../../components/heronMain/Navbar/Navbar';
import Footer from '../../components/heronMain/Footer/Footer';
import GlobalMessanger from '../../components/heronMain/GlobalMessanger/GlobalMessanger';
import { StyledAppFeatures } from '../../styledComponents/heronMain/styledMainHolder';
import { logOut } from '../../features/user/manualSlice';
import { useAppDispatch } from '../../app/hooks';

const HeronMainView = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logOut());
  return (
    <HeronMainHolder>
      <Navbar />
      <StyledAppFeatures>
        <GlobalMessanger />
      </StyledAppFeatures>
      <Footer>
        <button onClick={handleLogout}>Logout</button>
      </Footer>
    </HeronMainHolder>
  );
};

export default HeronMainView;
