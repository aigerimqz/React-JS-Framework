// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIorqhA05q5DMx2FF-EftjKvwD4s7OKQA",
  authDomain: "saiahat.firebaseapp.com",
  projectId: "saiahat",
  storageBucket: "saiahat.firebasestorage.app",
  messagingSenderId: "360573241774",
  appId: "1:360573241774:web:8f166332d8e1ab46a9e03f",
  measurementId: "G-CEQF1QGPG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);