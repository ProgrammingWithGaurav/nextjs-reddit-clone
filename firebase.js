import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {GoogleAuthProvider, initializeAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvOvTyyzilOxnPLD8UbfqWUI5bxjzSLOI",
  authDomain: "react-apps-1abca.firebaseapp.com",
  projectId: "react-apps-1abca",
  storageBucket: "react-apps-1abca.appspot.com",
  messagingSenderId: "54426027347",
  appId: "1:54426027347:web:e729acaea155ecf6e0cda6",
  measurementId: "G-G5G1TDLJTP",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = initializeAuth(app);
const provider = new GoogleAuthProvider();

export { app, db ,auth, provider};
