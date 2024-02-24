import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAPBAXZAhL-4fx4A19_m9Gm3Nj2rkVJu3k",
  authDomain: "message-app-d4d1e.firebaseapp.com",
  projectId: "message-app-d4d1e",
  storageBucket: "message-app-d4d1e.appspot.com",
  messagingSenderId: "73389737438",
  appId: "1:73389737438:web:892dc62b14660bd4b7494f"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const auth = getAuth(firebase_app);

const database = getDatabase(firebase_app);

export { firebase_app, auth,database };
