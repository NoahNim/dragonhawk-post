import React, { useState, createContext } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  // createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [theUser, setTheUser] = useState({});

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const currUser = userCred.user;
        console.log(userCred);
        setTheUser(currUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const logout = async () => {
    return signOut(auth).then(() => {
      setTheUser({});
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: theUser,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
