import {
  AnyAction,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Reducer,
} from '@reduxjs/toolkit';
import manualSlice from '../features/user/manualSlice';
import userSlice from '../features/user/userSlice';
import navSlice from '../features/nav/navSlice';
import globalSlice from '../features/messanger/globalSlice';
import privateSlice from '../features/messanger/privateSlice';
import { firebaseApi } from '../features/api/firebaseApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const combinedReducer = combineReducers({
  [firebaseApi.reducerPath]: firebaseApi.reducer,
  user: userSlice,
  manual: manualSlice,
  nav: navSlice,
  global: globalSlice,
  private: privateSlice,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'user/clearStore') state = {} as RootState;
  // if (action.type === 'private/clearPrivate') state = {} as RootState;
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

export default store;
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof combinedReducer>;
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
