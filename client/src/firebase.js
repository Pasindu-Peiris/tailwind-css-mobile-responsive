// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj_mSN4o37yCHieHQstLHycNzI_rOR-s4",
  authDomain: "react-projects-50fb4.firebaseapp.com",
  projectId: "react-projects-50fb4",
  storageBucket: "react-projects-50fb4.appspot.com",
  messagingSenderId: "46068912758",
  appId: "1:46068912758:web:9d44c067fc0b4ddfb58557",
  measurementId: "G-5L40R1L7FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);