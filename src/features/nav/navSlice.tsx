import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
  globalChat: boolean;
};

const initialState: InitialStateProps = {
  globalChat: false,
};

const navSlice = createSlice({
  name: ' nav',
  initialState,
  reducers: {
    showGlobalChat: state => {
      state.globalChat = !state.globalChat;
    },
  },
});

export default navSlice.reducer;
export const { showGlobalChat } = navSlice.actions;
