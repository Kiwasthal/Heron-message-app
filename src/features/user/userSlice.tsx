import {
  createSlice,
  createAsyncThunk,
  isAnyOf,
  SerializedError,
} from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebase';
import { signUp, logIn, logOut, catalogueUser } from './manualSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

type InitialState = {
  userName: undefined | null | string;
  userEmail: undefined | null | string;
  userImage: undefined | null | string;
  userPassword: string;
  loading: boolean;
  errors: unknown | null;
};

const initialState: InitialState = {
  userName: null,
  userEmail: null,
  userImage: null,
  userPassword: '',
  loading: false,
  errors: null,
};

export const signInWithGoogle = createAsyncThunk<void, string>(
  'user/signInWithGoogle',
  async _ => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearStore: state => {
      //Handled in rootReducer : store
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
      state.errors = '';
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
    //AsyncThunk error handling
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.errors = action.error;
      state.loading = false;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    });
    //Matcher type
    builder.addMatcher(isAnyOf(signUp.pending), state => {
      state.loading = true;
    });
  },
});

export default userSlice.reducer;
export const { clearStore } = userSlice.actions;
