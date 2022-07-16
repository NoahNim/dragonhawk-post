import React, { useContext, useState, useEffect } from "react";
import { Button, Box } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";
import AccountInfo from "./AccountInfo";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

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

  return (
    <Box>
      <AccountInfo
        displayName={props.displayName}
        email={email}
        emailVerified={emailVerified}
        changeDisplayName={props.changeDisplayName}
      />
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Button onClick={props.logOutHandler}>Log Out</Button>
        <ChangePassword email={email} />
        <DeleteAccount email={email} />
      </Box>
    </Box>
  );
};

export default Account;
