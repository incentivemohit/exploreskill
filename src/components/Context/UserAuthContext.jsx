import { createContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    signOut(auth);
  }

  function forgetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  return (
    <UserContext.Provider
      value={{ user, register, login, logOut, forgetPassword }}
    >
      {children}
    </UserContext.Provider>
  );
};
