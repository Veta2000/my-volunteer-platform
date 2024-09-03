
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "ваш-ключ",
  authDomain: "ваш-домен.firebaseapp.com",
  projectId: "ваш-проект-id",
  storageBucket: "ваше-хранилище.appspot.com",
  messagingSenderId: "ваш-отправитель-id",
  appId: "ваше-приложение-id"
};

// Инициализация 
const app = initializeApp(firebaseConfig);

// Экспорт 
export const db = getFirestore(app);
export const auth = getAuth(app);
