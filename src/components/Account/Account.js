import React, { useContext, useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";
import AccountInfo from "./AccountInfo";

const Account = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  if (user !== null) {
    var userName = user.displayName;
    var userEmail = user.email;
    var userVerified = user.emailVerified;
  }
  const [displayName, setDisplayName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [emailVerified, setEmailVerified] = useState(userVerified);

  const logOutHandler = async (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return (
    <Box>
      <AccountInfo
        displayName={displayName}
        email={email}
        emailVerified={emailVerified}
      />
      <Button onClick={logOutHandler}>Log Out</Button>
    </Box>
  );
};

export default Account;
