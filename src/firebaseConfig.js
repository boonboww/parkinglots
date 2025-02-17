// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTcJSGq9uboXuzEQ0XsraVyGNDXdl_f7k",
  authDomain: "parkinglots-58ccf.firebaseapp.com",
  projectId: "parkinglots-58ccf",
  storageBucket: "parkinglots-58ccf.firebasestorage.app",
  messagingSenderId: "877679727801",
  appId: "1:877679727801:web:965f858f3ac88e0bad7768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

