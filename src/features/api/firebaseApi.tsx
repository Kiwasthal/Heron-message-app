import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
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

    sendFriendRequest: builder.mutation({
      async queryFn(requestData) {
        try {
          let userRef = doc(db, 'users', `${requestData.friendEmail}`);
          await setDoc(
            userRef,
            {
              friends: [
                {
                  name: requestData.userName,
                  status: false,
                },
              ],
            },
            { merge: true }
          );

          return { data: 'resolved' };
        } catch {}
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
} = firebaseApi;
