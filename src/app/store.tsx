import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import manualSlice from '../features/user/manualSlice';
import userSlice from '../features/user/userSlice';
import navSlice from '../features/nav/navSlice';
import globalSlice from '../features/messanger/globalSlice';
import { firebaseApi } from '../features/api/firebaseApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    [firebaseApi.reducerPath]: firebaseApi.reducer,
    user: userSlice,
    manual: manualSlice,
    nav: navSlice,
    global: globalSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

export default store;
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
