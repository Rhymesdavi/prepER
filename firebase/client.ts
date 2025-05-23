import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-z1VB7OmsvuAfbKLPWvy4iNZOERINu1Y",
  authDomain: "preper-92851.firebaseapp.com",
  projectId: "preper-92851",
  storageBucket: "preper-92851.firebasestorage.app",
  messagingSenderId: "1064549750395",
  appId: "1:1064549750395:web:5e6f8eff935babc577f4de",
  measurementId: "G-8XT9YYSPLM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db= getFirestore(app)