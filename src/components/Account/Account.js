import React, { useContext, useState, useEffect } from "react";
import { Button, Box } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";
import AccountInfo from "./AccountInfo";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Account = (props) => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;

  // const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [emailVerified, setEmailVerified] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        props.setDisplayName(user.displayName);
        setEmail(user.email);
        setEmailVerified(user.emailVerified);
      } else {
      }
    });
  }, [user, props]);

  const logOutHandler = async (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return (
    <Box>
      <AccountInfo
        displayName={props.displayName}
        email={email}
        emailVerified={emailVerified}
      />
      <Button onClick={logOutHandler}>Log Out</Button>
    </Box>
  );
};

export default Account;
