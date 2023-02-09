import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBLwEO4DypqS4PDKKPaqJWupjZELfkK9J0",
  authDomain: "lpu1-eaf1f.firebaseapp.com",
  projectId: "lpu1-eaf1f",
  storageBucket: "lpu1-eaf1f.appspot.com",
  messagingSenderId: "538252747074",
  appId: "1:538252747074:web:68012d831957ba59dfe8db",
  measurementId: "G-NYGKERJ83W"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}