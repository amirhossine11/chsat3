// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADsFrutNZMG7riaTGen3j_YCupVESO1f0",
  authDomain: "chat-app-359cd.firebaseapp.com",
  projectId: "chat-app-359cd",
  storageBucket: "chat-app-359cd.firebasestorage.app",
  messagingSenderId: "181014080911",
  appId: "1:181014080911:web:8e06a4e6e382b384ceeffa",
  measurementId: "G-2BV7N28MS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);