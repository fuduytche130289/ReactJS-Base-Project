// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHgEcZExm9DaIVlOXZ0qjgrdTDjzsJRHk",
    authDomain: "my-demo-cy.firebaseapp.com",
    projectId: "my-demo-cy",
    storageBucket: "my-demo-cy.appspot.com",
    messagingSenderId: "245671532206",
    appId: "1:245671532206:web:3e7ccd17f2cddd5e673f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firestore database //lưu trữ CSDL
const db = getFirestore(app);
const auth = getAuth(app);
export {db, auth};