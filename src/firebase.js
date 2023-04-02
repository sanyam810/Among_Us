
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAuL5pM6nfhS5pHMrz8XiuyM-ROG8uBAM0",
  authDomain: "chat-d2b0b.firebaseapp.com",
  projectId: "chat-d2b0b",
  storageBucket: "chat-d2b0b.appspot.com",
  messagingSenderId: "997936507070",
  appId: "1:997936507070:web:25883f14a05f1aa51316ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();