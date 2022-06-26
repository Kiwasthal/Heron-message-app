import {
  createSlice,
  createAsyncThunk,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';
import { signUp } from './manualSlice';
import { getNameInput } from './manualSlice';
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
  reducers: {
    getName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
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
    builder.addMatcher(isAnyOf(signUp.pending), state => {
      state.loading = true;
    });
    builder.addMatcher(isAnyOf(signUp.fulfilled), state => {
      state.loading = false;
      state.userEmail = auth.currentUser?.email;
    });
  },
});

export default userSlice.reducer;
export const { getName } = userSlice.actions;
