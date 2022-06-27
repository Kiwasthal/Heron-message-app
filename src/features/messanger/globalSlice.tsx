import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

type InitialStateProps = {
  globalChatInput: string | null;
};

const initialState: InitialStateProps = {
  globalChatInput: null,
};

type MessageProps = {
  text: string | null;
  name: string | null | undefined;
  profilePicUrl: string | null | undefined;
};

export const saveGlobalMessage = createAsyncThunk(
  'global/saveMessage',
  async ({ text, name, profilePicUrl }: MessageProps) => {
    try {
      await addDoc(collection(db, 'globalMessages'), {
        name,
        text,
        profilePicUrl,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error('Error writing new message');
    }
  }
);

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
