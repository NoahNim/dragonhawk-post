import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

const AuthContext = React.createContext({
  loginState: false,
});

export const AuthContextProvider = (props) => {
  const [theUser, setTheUser] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [loginError, setLoginError] = useState();
  const [signupError, setSignupError] = useState();
  const [loginState, setLoginState] = useState(false);
  const [displayNameState, setDisplayNameState] = useState(false);

  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    const storedDisplayState = localStorage.getItem("Display State");

    if (storedDisplayState === "1") {
      setDisplayNameState(true);
    }

    if (storeUserLoggedInInformation === "1") {
      setLoginState(true);
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.displayName) {
          localStorage.setItem("Display State", "0");
          setDisplayNameState(false);
        }
        setTheUser(user);
        setCurrentUser(auth.currentUser);
      } else {
      }
    });
  }, [theUser, displayNameState]);

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
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        localStorage.setItem("isLoggedIn", "1");
        setLoginState(true);
      });
    } catch (error) {
      setLoginError(mapAuthCode(error.code));
    }
  };

  const logout = async () => {
    return signOut(auth).then(() => {
      localStorage.removeItem("isLoggedIn");
      setLoginState(false);
      setTheUser();
      setDisplayNameState(false);
    });
  };

  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser).then(() => {
        localStorage.setItem("isLoggedIn", "1");
        setLoginState(true);
      });
    } catch (error) {
      console.log(error);
      setSignupError(mapAuthCode(error.code));
      console.log(signupError);
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
        setTheUser: setTheUser,
        loginState: loginState,
        currentUser: currentUser,
        displayNameState: displayNameState,
        setDisplayNameState: setDisplayNameState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
