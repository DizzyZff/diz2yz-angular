// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrQSY5d9QEAn75qTzHl_PTEOz5crbw8-4",
  authDomain: "dizzyz.firebaseapp.com",
  projectId: "dizzyz",
  storageBucket: "dizzyz.appspot.com",
  messagingSenderId: "186074434661",
  appId: "1:186074434661:web:ca3a215bfca8ebaa560a8c",
  measurementId: "G-XD4NV4RGT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);