import { collection, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  getUserPendingFriendList,
  getUserAcceptedFriendList,
} from '../features/messanger/privateSlice';
import { logOut } from '../features/user/manualSlice';
import { clearStore } from '../features/user/userSlice';
import { db } from '../firebase/firebase';
import type { RootState, AppDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useFriendRequests = () => {
  const userEmail = useAppSelector(state => state.user.userEmail);
  const dispatch = useAppDispatch();
  const q = query(
    collection(db, `users`),
    where('__name__', '==', `${userEmail}`)
  );
  const [friendRequests] = useCollectionData(q);

  useEffect(() => {
    const friendList = friendRequests;
    if (friendList && friendList.length > 0)
      dispatch(getUserPendingFriendList(friendList[0].friends));
    if (friendList && friendList.length > 0)
      dispatch(getUserAcceptedFriendList(friendList[0].acceptedFriends));
  }, [friendRequests]);
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  dispatch(logOut());
  dispatch(clearStore());
};
