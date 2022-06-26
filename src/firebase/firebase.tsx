import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDb1EWeduCq_Mwp0XMAriCEniodWy7S5XY',
  authDomain: 'heron-messaging.firebaseapp.com',
  projectId: 'heron-messaging',
  storageBucket: 'heron-messaging.appspot.com',
  messagingSenderId: '782755353735',
  appId: '1:782755353735:web:d705007e641633005fd422',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
