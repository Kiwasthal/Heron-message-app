import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

type InitialState = {
  userName: undefined | null | string;
  userEmail: string;
  loading: boolean;
  errors: string;
};

const initialState: InitialState = {
  userName: '',
  userEmail: '',
  loading: false,
  errors: '',
};

export const signInWithGoogle = createAsyncThunk(
  'user/signInWithGoogle',
  async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signInWithGoogle.pending, state => {
      state.loading = true;
    });
    builder.addCase(signInWithGoogle.fulfilled, state => {
      state.loading = true;
      state.userName = auth.currentUser?.displayName;
    });
  },
});

export default userSlice.reducer;
