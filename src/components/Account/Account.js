import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";

const Account = () => {
  const authCtx = useContext(AuthContext);

  const logOutHandler = async (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return <Button onClick={logOutHandler}>Log Out</Button>;
};

export default Account;
