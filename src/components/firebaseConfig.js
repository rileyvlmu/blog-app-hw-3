// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjAJ3_-lwlzBUhql9rLH5zgV411Ap2IOs",
    authDomain: "simple-blog-916dd.firebaseapp.com",
    projectId: "simple-blog-916dd",
    storageBucket: "simple-blog-916dd.appspot.com",
    messagingSenderId: "58378320022",
    appId: "1:58378320022:web:b76fe822e048274d6beab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)