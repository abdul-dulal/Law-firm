// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTI007qQH9AM1OzBxGl43RUXLMtKHFyI",
  authDomain: "law-firm-in-bangladesh.firebaseapp.com",
  projectId: "law-firm-in-bangladesh",
  storageBucket: "law-firm-in-bangladesh.appspot.com",
  messagingSenderId: "242132415167",
  appId: "1:242132415167:web:9a32f4a0d3564ceffb0c0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
