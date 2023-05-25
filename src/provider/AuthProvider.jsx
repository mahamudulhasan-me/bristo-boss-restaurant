import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  //   google provider
  const googleProvider = new GoogleAuthProvider();

  //   register new user
  const registerNewUser = (email, password) => {
    setLoader(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in with email password
  const logInWithEmailAndPassword = (email, password) => {
    setLoader(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   sign in with google
  const loginWithGoogle = () => {
    setLoader(false);
    return signInWithPopup(auth, googleProvider);
  };

  //   check user login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      return () => unsubscribe;
    });
  }, []);
  //   log out
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    registerNewUser,
    logInWithEmailAndPassword,
    loginWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
