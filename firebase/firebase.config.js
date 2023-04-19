// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI980zgvAOFzXVCJAdQJJYb4xlRTlgLPM",
  authDomain: "the-news-dragon-fc8b1.firebaseapp.com",
  projectId: "the-news-dragon-fc8b1",
  storageBucket: "the-news-dragon-fc8b1.appspot.com",
  messagingSenderId: "1038252061218",
  appId: "1:1038252061218:web:6a2d2625f26f62b27bd07b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;