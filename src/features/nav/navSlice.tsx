import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  globalChat: boolean;
  friendsElement: boolean;
  friendsModal: boolean;
  chatBar: boolean;
};

const initialState: InitialStateProps = {
  globalChat: false,
  friendsElement: false,
  friendsModal: false,
  chatBar: false,
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
    showChatbar: state => {
      state.chatBar = true;
    },
    hideChatbar: state => {
      state.chatBar = false;
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
  showChatbar,
  hideChatbar,
} = navSlice.actions;
