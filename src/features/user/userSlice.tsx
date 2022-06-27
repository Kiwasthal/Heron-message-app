import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';
import { signUp, logIn, logOut } from './manualSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

type InitialState = {
  userName: undefined | null | string;
  userEmail: undefined | null | string;
  userImage: undefined | null | string;
  userPassword: string;
  loading: boolean;
  errors: string;
};

const initialState: InitialState = {
  userName: null,
  userEmail: null,
  userImage: null,
  userPassword: '',
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
      state.userEmail = auth.currentUser?.email;
      state.userImage = auth.currentUser?.photoURL;
    });
    builder.addCase(logIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.userName = auth.currentUser?.displayName;
      state.userEmail = auth.currentUser?.email;
      state.userImage = auth.currentUser?.photoURL;
    });
    builder.addCase(logIn.fulfilled, state => {
      state.userEmail = auth.currentUser?.email;
      state.userName = auth.currentUser?.displayName;
    });
    builder.addMatcher(isAnyOf(signUp.pending), state => {
      state.loading = true;
    });
    builder.addMatcher(isAnyOf(signUp.fulfilled), state => {
      state.loading = false;
      state.userEmail = auth.currentUser?.email;
      state.userName = auth.currentUser?.displayName;
    });
  },
});

export default userSlice.reducer;
