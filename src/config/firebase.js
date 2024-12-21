// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwbhe8nQjQPhs5byIwGHfPeX8hs_Omf8I",
  authDomain: "vite-contact-5c5fb.firebaseapp.com",
  projectId: "vite-contact-5c5fb",
  storageBucket: "vite-contact-5c5fb.firebasestorage.app",
  messagingSenderId: "3258926410",
  appId: "1:3258926410:web:f0f6ae6b58b486751aedb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);