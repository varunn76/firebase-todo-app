import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBLisSqdJs5bhjLKyPh6K5_vuTSoBhTq8",
  authDomain: "fir-todo-app-f32e5.firebaseapp.com",
  projectId: "fir-todo-app-f32e5",
  storageBucket: "fir-todo-app-f32e5.appspot.com",
  messagingSenderId: "1034183104607",
  appId: "1:1034183104607:web:07f6533dd24f29571323ea",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
