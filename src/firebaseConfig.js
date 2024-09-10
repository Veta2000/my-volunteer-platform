// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDXgkOolr9y7_FoGAAFUDNas2-bM1Be7b4",
  authDomain: "my-volunteer-platform.firebaseapp.com",
  projectId: "my-volunteer-platform",
  storageBucket: "my-volunteer-platform.appspot.com",
  messagingSenderId: "933750998850",
  appId: "1:933750998850:web:11790fad0e06c07f4caadb",
  measurementId: "G-YYV0PEKYE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
 
export { auth }