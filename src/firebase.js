// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADN-1BGHS0L5i4I9m6Z11q2R17fFPavzQ",
  authDomain: "qurban-a43bd.firebaseapp.com",
  projectId: "qurban-a43bd",
  storageBucket: "qurban-a43bd.appspot.com",
  messagingSenderId: "821762977792",
  appId: "1:821762977792:web:473433d0d4c05590bda8e5",
  measurementId: "G-11229643WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)