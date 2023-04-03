
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVR2Jxa8hcaSQH6YwSuNXyYmebW0Ehohk",
  authDomain: "chatify-2b00d.firebaseapp.com",
  projectId: "chatify-2b00d",
  storageBucket: "chatify-2b00d.appspot.com",
  messagingSenderId: "184466387870",
  appId: "1:184466387870:web:af56c05d17178910095c8f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();