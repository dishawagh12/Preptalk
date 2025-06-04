import{getFirestore} from "firebase/firestore"
import { initializeApp ,getApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCRghAoS8cwZOuOs-gUXoXLfXemKXkpQxI",
  authDomain: "preptalk-38d04.firebaseapp.com",
  projectId: "preptalk-38d04",
  storageBucket: "preptalk-38d04.firebasestorage.app",
  messagingSenderId: "153385681076",
  appId: "1:153385681076:web:5c5ad50516e8d3b38217e1",
  measurementId: "G-8WTRC725HS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);