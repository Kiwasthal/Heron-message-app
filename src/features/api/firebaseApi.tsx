import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase';

type Message = {
  name: string | null | undefined;
  profilePicUrl: string | null | undefined;
  text: string | null | undefined;
};

type QueryMessageProps = {
  name?: string;
  profilePicUrl?: string;
  text?: string;
  timestamp?: Timestamp;
  id?: string;
};

type QueryResponse = QueryMessageProps[];

type ResultType = 'resolved' | 'failed';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    fetchGlobalMessages: builder.query<QueryResponse, void>({
      async queryFn() {
        try {
          let recentMessagesQuery = await getDocs(
            query(
              collection(db, 'globalMessages'),
              orderBy('timestamp', 'desc'),
              limit(20)
            )
          );
          let messages: QueryResponse = [];
          recentMessagesQuery?.forEach(doc =>
            messages.push({ ...doc.data(), id: doc.id })
          );
          return { data: messages };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    addGlobalMessage: builder.mutation<ResultType, Message>({
      async queryFn(messageData: Message) {
        try {
          await addDoc(collection(db, 'globalMessages'), {
            ...messageData,
            timestamp: serverTimestamp(),
          });
          return { data: 'resolved' };
        } catch (e) {
          return { data: 'failed' };
        }
      },
    }),
  }),
});

export const { useFetchGlobalMessagesQuery, useAddGlobalMessageMutation } =
  firebaseApi;
