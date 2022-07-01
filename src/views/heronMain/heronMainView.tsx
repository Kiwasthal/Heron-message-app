import HeronMainHolder from '../../components/heronMain/HeronMainHolder';
import Navbar from '../../components/heronMain/Navbar/Navbar';
import Footer from '../../components/heronMain/Footer/Footer';
import GlobalMessanger from '../../components/heronMain/GlobalMessanger/GlobalMessanger';
import FriendsModal from '../../components/heronMain/FriendsModal/FriendsModal';
import PrivateMessanger from '../../components/heronMain/PrivateMessanger/PrivateMessanger';
import AppFeatures from '../../components/heronMain/AppFeatures';
import { logOut } from '../../features/user/manualSlice';
import { useAppDispatch } from '../../app/hooks';

const HeronMainView = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logOut());

  return (
    <HeronMainHolder>
      <Navbar />
      <FriendsModal />
      <AppFeatures>
        <PrivateMessanger />
        <GlobalMessanger />
      </AppFeatures>
      <Footer>
        <button onClick={handleLogout}>Logout</button>
      </Footer>
    </HeronMainHolder>
  );
};

export default HeronMainView;
