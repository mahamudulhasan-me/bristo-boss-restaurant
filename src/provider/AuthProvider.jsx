/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
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
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //   google provider
  const googleProvider = new GoogleAuthProvider();

  //   sign in with google
  const logInWithGoogle = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  //create new user
  const createNewUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email and password
  const logInWithEmailAndPassword = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   check user login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { uid: currentUser?.uid })
          .then((data) => {
            localStorage.setItem("access-token", data.data);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      return () => unsubscribe;
    });
  }, []);
  //   log out
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    loading,
    createNewUser,
    logInWithEmailAndPassword,
    logInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
