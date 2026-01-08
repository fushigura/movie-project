import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0keR3Jis2GX_mtTeeZfSET978zu0jq0",
  authDomain: "movies-test-project-8dfd9.firebaseapp.com",
  databaseURL: "https://movies-test-project-8dfd9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movies-test-project-8dfd9",
  storageBucket: "movies-test-project-8dfd9.firebasestorage.app",
  messagingSenderId: "290773284680",
  appId: "1:290773284680:web:4ebebfbdb8c0527969257d",
  measurementId: "G-4LQTBP2V0N"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)