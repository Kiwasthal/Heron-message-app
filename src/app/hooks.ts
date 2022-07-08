import { collection, query, where } from 'firebase/firestore';
import { useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useAddPrivateMessageMutation } from '../features/api/firebaseApi';
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
    const friendList = friendRequests;
    if (friendList && friendList.length > 0)
      dispatch(getUserPendingFriendList(friendList[0].friends));
    if (friendList && friendList.length > 0)
      dispatch(getUserAcceptedFriendList(friendList[0].acceptedFriends));
  }, [friendRequests]);
};

export const useMessageHandler = (messageText: string) => {
  const message = messageText;
  const userName = useAppSelector(state => state.user.userName);
  const userEmail = useAppSelector(state => state.user.userEmail);
  const userImage = useAppSelector(state => state.user.userImage);
  const chatId = useAppSelector(state => state.private.currentChatroom);
  const [addMessage, data] = useAddPrivateMessageMutation();

  const messageData = {
    chatId: chatId,
    text: message,
    name: userName,
    email: userEmail,
    profilePicUrl: userImage,
  };

  const sendMessage = async () => {
    if (!message) return;
    await addMessage(messageData);
  };

  return { data, sendMessage };
};
