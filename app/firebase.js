import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCrfmhjlhIq6dHcL98YN9i70zcGB11uYY",
  authDomain: "phoneauth-f4763.firebaseapp.com",
  databaseURL: "https://phoneauth-f4763-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "phoneauth-f4763",
  storageBucket: "phoneauth-f4763.appspot.com",
  messagingSenderId: "448721839388",
  appId: "1:448721839388:web:94642a56b4ac39ae1dc6d9",
  measurementId: "G-028W4K7F6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);