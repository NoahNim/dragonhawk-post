import React, { useState, createContext } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [theUser, setTheUser] = useState({});
  const [loginError, setLoginError] = useState();
  const [signupError, setSignupError] = useState();

  const mapAuthCode = (authCode) => {
    switch (authCode) {
      case "auth/user-not-found":
        return "User does not exist";
      case "auth/wrong-password":
        return "Wrong password";
      case "auth/too-many-requests":
        return "Too many login attempts, please try again later or reset your password";
      case "auth/email-already-in-use":
        return "Email already in use";
      case "auth/weak-password":
        return "Password is too short";
      default:
        return null;
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCred) => {
          const currUser = userCred.user;
          setTheUser(currUser);
          setLoginError();
        }
      );
    } catch (error) {
      setLoginError(mapAuthCode(error.code));
      console.log(signupError);
    }
  };

  const logout = async () => {
    return signOut(auth).then(() => {
      setTheUser({});
    });
  };

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setSignupError(mapAuthCode(error.code));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: theUser,
        login: login,
        logout: logout,
        loginError: loginError,
        signup: signup,
        signupError: signupError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
