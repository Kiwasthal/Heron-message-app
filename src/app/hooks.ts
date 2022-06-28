import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// interface MessageProps {
//   id?: string;
//   text: string | null;
//   name: string | null | undefined;
//   profilePicUrl: string | null | undefined;
//   createdAt: Timestamp;
// }

// export const UseMessages = () => {
//   const dispatch = useAppDispatch();
//   const loading = useAppSelector(state => state.global.loading);

//   useEffect(() => {
//     onSnapshot(globalCollectionApi, snapshot => {
//       dispatch(
//         getMessageSnapshots(
//           snapshot.docs.map(
//             doc => ({ ...doc.data(), id: doc.id } as MessageProps)
//           )
//         )
//       );
//     });
//   }, []);

//   useEffect;

//   return [loading, messages];
// };
