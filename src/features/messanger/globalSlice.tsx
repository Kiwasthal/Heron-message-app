import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { firebaseApi, useAddPrivateMessageMutation } from '../api/firebaseApi';

type InitialStateProps = {
  globalChatInput: string | null;
  loading: boolean;
};

const initialState: InitialStateProps = {
  globalChatInput: null,
  loading: false,
};

const globalSlice = createSlice({
  name: ' global',
  initialState,
  reducers: {
    getGlobalMessage: (state, action: PayloadAction<string>) => {
      state.globalChatInput = action.payload;
    },
    setGlobalLoadingStart: state => {
      state.loading = true;
    },
    setGlobalLoadingEnd: state => {
      state.loading = false;
    },
  },
});

export default globalSlice.reducer;
export const { getGlobalMessage, setGlobalLoadingStart, setGlobalLoadingEnd } =
  globalSlice.actions;
