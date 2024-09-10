import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sfurobotsoccerwebsite-4d645.firebaseapp.com",
  projectId: "sfurobotsoccerwebsite-4d645",
  storageBucket: "sfurobotsoccerwebsite-4d645.appspot.com",
  messagingSenderId: "4744582169",
  appId: "1:4744582169:web:cb5ef6e0b065bbf74f4688",
  measurementId: "G-N7G5LEJNHE",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export default firebaseConfig;
