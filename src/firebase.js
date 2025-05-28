// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLiDlQRW8jAT8_tCFyi97UQ4aUGCjbrjU",
  authDomain: "react-bd2ec.firebaseapp.com",
  projectId: "react-bd2ec",
  storageBucket: "react-bd2ec.firebasestorage.app",
  messagingSenderId: "570060916118",
  appId: "1:570060916118:web:736483885fcb04157489b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };