import { collection, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  getUserPendingFriendList,
  getUserAcceptedFriendList,
} from '../features/messanger/privateSlice';
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
    //Passing the friend List array to the store on every update//
    const friendList = friendRequests;
    if (friendList) dispatch(getUserPendingFriendList(friendList[0].friends));
    if (friendList)
      dispatch(getUserAcceptedFriendList(friendList[0].acceptedFriends));
  }, [friendRequests]);
};
