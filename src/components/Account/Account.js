import React, { useContext, useState, useEffect } from "react";
import { Button, Box, Center } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";
import AccountInfo from "./AccountInfo";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

const Account = (props) => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
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
    <Box margin="10px">
      <AccountInfo
        displayName={props.displayName}
        email={email}
        emailVerified={emailVerified}
        changeDisplayName={props.changeDisplayName}
      />
      <Center>
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Button
            width="20px"
            height="20px"
            fontSize="8px"
            onClick={props.logOutHandler}
            marginTop="5px"
            marginRight="5px"
          >
            Log Out
          </Button>
          <Box marginRight="5px">
            <ChangePassword email={email} />
          </Box>
          <Box>
            <DeleteAccount email={email} />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Account;
