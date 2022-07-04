import { defaultTheme, ThemeType } from '../../theme/defaultTheme';
import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  globalChat: boolean;
  friendsElement: boolean;
  themeElement: boolean;
  friendsModal: boolean;
  chatBar: boolean;
  theme: ThemeType;
};

const initialState: InitialStateProps = {
  globalChat: false,
  friendsElement: false,
  themeElement: false,
  friendsModal: false,
  chatBar: false,
  theme: defaultTheme,
};

const navSlice = createSlice({
  name: ' nav',
  initialState,
  reducers: {
    showGlobalChat: state => {
      state.globalChat = !state.globalChat;
    },
    showFriendsElement: state => {
      state.friendsElement = !state.friendsElement;
    },
    openFriendsModal: state => {
      state.friendsModal = true;
    },
    closeFriendsModal: state => {
      state.friendsModal = false;
    },
    toggleChatBar: state => {
      state.chatBar = !state.chatBar;
    },
    showThemeDropmenu: state => {
      state.themeElement = true;
    },
    hideThemeDropmenu: state => {
      state.themeElement = false;
    },
    closeAllInterfaces: state => {
      state.globalChat = false;
      state.friendsElement = false;
      state.friendsModal = false;
    },
  },
});

export default navSlice.reducer;
export const {
  showGlobalChat,
  showFriendsElement,
  openFriendsModal,
  closeFriendsModal,
  toggleChatBar,
  showThemeDropmenu,
  hideThemeDropmenu,
} = navSlice.actions;
