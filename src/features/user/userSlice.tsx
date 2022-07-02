import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';
import { signUp, logIn, logOut, catalogueUser } from './manualSlice';

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
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.log(e);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      // From here we can take action only at this "counter" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
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
    builder.addCase(logIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.userName = auth.currentUser?.displayName;
      state.userEmail = auth.currentUser?.email;
      state.userImage = auth.currentUser?.photoURL;
    });
    builder.addCase(logIn.fulfilled, state => {
      state.loading = false;
      state.userEmail = auth.currentUser?.email;
      state.userName = auth.currentUser?.displayName;
      state.userImage = auth.currentUser?.photoURL;
    });
    builder.addCase(signUp.fulfilled, state => {
      state.userEmail = auth.currentUser?.email;
      state.userName = auth.currentUser?.displayName;
      state.userImage = auth.currentUser?.photoURL;
      state.loading = false;
    });
    builder.addCase(signUp.rejected, state => {
      state.errors = 'Internal Error';
    });
    builder.addCase(catalogueUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(catalogueUser.fulfilled, state => {
      state.loading = false;
    });
    builder.addMatcher(isAnyOf(signUp.pending), state => {
      state.loading = true;
    });
  },
});

export default userSlice.reducer;
export const { clearUser } = userSlice.actions;
