// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1231f.firebaseapp.com",
  projectId: "mern-auth-1231f",
  storageBucket: "mern-auth-1231f.appspot.com",
  messagingSenderId: "501069863990",
  appId: "1:501069863990:web:81ba568aca72cd68a94c97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);