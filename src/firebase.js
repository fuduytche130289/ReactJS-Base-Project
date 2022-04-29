// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ32NDEBNNu-E0XAqE-7h6zG37787i71k",
    authDomain: "test-react-65d6d.firebaseapp.com",
    projectId: "test-react-65d6d",
    storageBucket: "test-react-65d6d.appspot.com",
    messagingSenderId: "1056798363583",
    appId: "1:1056798363583:web:3e5d057ede77e5c0c25b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore database //lưu trữ CSDL
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth};