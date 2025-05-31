// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKQz2-XU2RIOVhwy_L9c2r1cxWqeenFV0",
  authDomain: "netflixgpt-82150.firebaseapp.com",
  projectId: "netflixgpt-82150",
  storageBucket: "netflixgpt-82150.firebasestorage.app",
  messagingSenderId: "439412218101",
  appId: "1:439412218101:web:929df7ff999f27eaf68dbc",
  measurementId: "G-CHSLYL2DPB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();