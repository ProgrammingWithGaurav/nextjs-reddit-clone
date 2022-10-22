import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider, initializeAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn_AIoIGDpuoROIe3Ba8li33heu4FQ0Rw",
  authDomain: "nextjsapps-366215.firebaseapp.com",
  projectId: "nextjsapps-366215",
  storageBucket: "nextjsapps-366215.appspot.com",
  messagingSenderId: "895482855029",
  appId: "1:895482855029:web:4aeffc1b8c74ac057d823c",
  measurementId: "G-EZQJW34W4D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = initializeAuth(app);
const provider = new GoogleAuthProvider();

export { app, db ,auth, provider};
