import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  FieldValue,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import uniqid from 'uniqid/index';
import { db } from '../../firebase/firebase';

type Message = {
  name: string | null | undefined;
  profilePicUrl: string | null | undefined;
  text: string | null | undefined;
};

export type QueryMessageProps = {
  name?: string;
  profilePicUrl?: string;
  text?: string;
  timestamp?: Timestamp;
  id?: string;
};

export type FriendRequestProps = {
  userName: string | undefined | null;
  userEmail: string | undefined | null;
  friendEmail?: string;
};

export type AddFriendData = {
  userEmail: string | undefined | null;
  friendEmail: string;
};

type QueryResponse = QueryMessageProps[];

type ResultType = 'resolved' | 'failed ';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['message'],
  endpoints: builder => ({
    fetchGlobalMessages: builder.query<QueryResponse, void>({
      async queryFn() {
        try {
          let q = query(
            collection(db, 'globalMessages'),
            orderBy('timestamp', 'desc'),
            limit(20)
          );
          let recentMessagesQuery = await getDocs(q);
          let messages: QueryResponse = [];
          recentMessagesQuery?.forEach(doc =>
            messages.push({ ...doc.data(), id: doc.id })
          );

          return { data: messages };
        } catch (e) {
          return { error: e };
        }
      },
      providesTags: ['message'],
    }),
    sendFriendRequest: builder.mutation<ResultType, FriendRequestProps>({
      async queryFn(requestData: FriendRequestProps) {
        try {
          let friendRef = doc(db, 'users', `${requestData.friendEmail}`);
          let userRef = doc(db, 'users', `${requestData.userEmail}`);
          await updateDoc(userRef, {
            friends: arrayUnion({
              email: requestData.friendEmail,
              status: false,
            }),
          });
          await updateDoc(friendRef, {
            friends: arrayUnion({
              name: requestData.userName,
              email: requestData.userEmail,
              status: false,
            }),
          });
          return { data: 'resolved' };
        } catch (e) {
          return { error: 'failed' };
        }
      },
    }),
    acceptFriendRequest: builder.mutation<ResultType, AddFriendData>({
      async queryFn(addFriendData: AddFriendData) {
        try {
          const friendRef = doc(db, 'users', `${addFriendData.friendEmail}`);
          const userRef = doc(db, 'users', `${addFriendData.userEmail}`);

          await updateDoc(userRef, {
            acceptedFriends: arrayUnion({
              email: addFriendData.friendEmail,
              status: true,
            }),
          });
          await updateDoc(friendRef, {
            acceptedFriends: arrayUnion({
              email: addFriendData.userEmail,
              status: true,
            }),
          });
          return { data: 'resolved' };
        } catch (e) {
          return { error: 'failed' };
        }
      },
    }),
    addGlobalMessage: builder.mutation<ResultType, Message>({
      async queryFn(messageData: Message) {
        try {
          await addDoc(collection(db, 'globalMessages'), {
            ...messageData,
            id: uniqid(),
            timestamp: serverTimestamp(),
          });
          return { data: 'resolved' };
        } catch (e) {
          return { error: 'failed ' };
        }
      },

      invalidatesTags: ['message'],
    }),
  }),
});

export const {
  useFetchGlobalMessagesQuery,
  useSendFriendRequestMutation,
  useAddGlobalMessageMutation,
  useAcceptFriendRequestMutation,
} = firebaseApi;
