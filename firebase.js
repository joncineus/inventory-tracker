// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbnB5rKj6lXk2VxynKx8qq_wPjFIXg1ck",
  authDomain: "inventory-tracker-88ff3.firebaseapp.com",
  projectId: "inventory-tracker-88ff3",
  storageBucket: "inventory-tracker-88ff3.appspot.com",
  messagingSenderId: "653963465523",
  appId: "1:653963465523:web:98792a98ba298f4a032446",
  measurementId: "G-E8F37ZM9HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export const storage = getStorage(app)

export {firestore}