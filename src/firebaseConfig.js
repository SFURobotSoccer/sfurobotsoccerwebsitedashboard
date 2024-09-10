// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjqh6RwwpSCc1bMhcGg9UA7M-FtLZxZtk",
  authDomain: "sfurobotsoccerdashboard.firebaseapp.com",
  projectId: "sfurobotsoccerdashboard",
  storageBucket: "sfurobotsoccerdashboard.appspot.com",
  messagingSenderId: "139888798716",
  appId: "1:139888798716:web:70530e1d3142beddfde079",
  measurementId: "G-EQBPDV65K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);