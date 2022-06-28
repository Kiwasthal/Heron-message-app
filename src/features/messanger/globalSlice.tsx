import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuerySnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

type InitialStateProps = {
  globalChatInput: string | null;
  displayMessages: [] | QuerySnapshot;
  loading: boolean;
};

const initialState: InitialStateProps = {
  globalChatInput: null,
  displayMessages: [],
  loading: false,
};

const globalSlice = createSlice({
  name: ' global',
  initialState,
  reducers: {
    getGlobalMessage: (state, action: PayloadAction<string>) => {
      state.globalChatInput = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { getGlobalMessage } = globalSlice.actions;
