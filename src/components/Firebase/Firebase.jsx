import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAyaNFSGqSJmWfJV9xzKd3jnkxZrCK0jQ",
  authDomain: "exploreskills-50a7c.firebaseapp.com",
  projectId: "exploreskills-50a7c",
  storageBucket: "exploreskills-50a7c.appspot.com",
  messagingSenderId: "1018837703335",
  appId: "1:1018837703335:web:74a1332544debc99f19982",
  measurementId: "G-0DXF43W94P",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
