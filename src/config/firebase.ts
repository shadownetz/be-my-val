// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOBUdy2kdHXAoq06OUfh27qaxrTWr0nME",
    authDomain: "afrogrids.firebaseapp.com",
    projectId: "afrogrids",
    storageBucket: "afrogrids.appspot.com",
    messagingSenderId: "1090572091531",
    appId: "1:1090572091531:web:ca9ec08e26f0e73ed2948e",
    measurementId: "G-X3FEERNM0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);