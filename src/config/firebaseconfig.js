import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sfurobotsoccerwebsite-fec64.firebaseapp.com",
  projectId: "sfurobotsoccerwebsite-fec64",
  storageBucket: "sfurobotsoccerwebsite-fec64.appspot.com",
  messagingSenderId: "384131980318",
  appId: "1:384131980318:web:ced2706de1acafd05e220f",
  measurementId: "G-PP9LLBQ78X",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export default firebaseConfig;
