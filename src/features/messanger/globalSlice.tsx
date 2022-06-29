import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  },
});

export default globalSlice.reducer;
export const { getGlobalMessage } = globalSlice.actions;
