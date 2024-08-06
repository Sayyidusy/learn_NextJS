// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATaPTlCzreG55R7Se4W3y_mHYI3oeGZ5I",
  authDomain: "my-next-app-d5c0a.firebaseapp.com",
  projectId: "my-next-app-d5c0a",
  storageBucket: "my-next-app-d5c0a.appspot.com",
  messagingSenderId: "871380026355",
  appId: "1:871380026355:web:4c74a7d8159143638f4886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;