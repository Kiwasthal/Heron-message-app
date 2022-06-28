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
  name: string;
  profilePicUrl: string;
  text: string;
  timestamp: Timestamp;
};

type QueryArg = {
  name: string;
  profilePicUrl: string;
  text: string;
  id: string;
  timestamp: Timestamp;
}[];

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    fetchGlobalMessages: builder.query<QueryArg, void>({
      async queryFn() {
        try {
          let recentMessagesQuery = await getDocs(
            query(
              collection(db, 'globalMessages'),
              orderBy('timestamp', 'desc'),
              limit(20)
            )
          );
          let messages: QueryArg = [];
          recentMessagesQuery?.forEach(doc =>
            messages.push({ ...doc.data(), id: doc.id })
          );
          return { data: messages };
        } catch (e) {
          return { error: e };
        }
      },
    }),
    addGlobalMessage: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(db, 'globalMessages'), {
            ...data,
            timestamp: serverTimestamp(),
          });
          return { data: 'resolved' };
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useFetchGlobalMessagesQuery, useAddGlobalMessageMutation } =
  firebaseApi;
