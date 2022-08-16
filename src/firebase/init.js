import firebaseConfig from "./config.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const instanceFirebase = initializeApp(firebaseConfig);
export const bdFirestore = getFirestore();
export const authFirebase = getAuth(instanceFirebase);
export const authGoogle = new GoogleAuthProvider();
