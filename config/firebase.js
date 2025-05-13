// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe14wmucdIcgIVBAR9IwGkUxU5gQr_iUY",
  authDomain: "chatapp-b46fe.firebaseapp.com",
  projectId: "chatapp-b46fe",
  storageBucket: "chatapp-b46fe.firebasestorage.app",
  messagingSenderId: "912625932429",
  appId: "1:912625932429:web:c7db994f0c9f6a306d6ac4",
  measurementId: "G-Z6Q2EWCXQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};
