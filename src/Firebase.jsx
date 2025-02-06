// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const api = import.meta.env.VITE_API_KEY
const firebaseConfig = {
  apiKey:api,
  authDomain: "my-project-9af00.firebaseapp.com",
  projectId: "my-project-9af00",
  storageBucket: "my-project-9af00.firebasestorage.app",
  messagingSenderId: "242195969728",
  appId: "1:242195969728:web:73cd2505edd8acb97b5f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()