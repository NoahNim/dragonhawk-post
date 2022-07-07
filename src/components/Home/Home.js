import React, { useContext } from "react";
import { Box, Button } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";

const Home = () => {
  const authCtx = useContext(AuthContext);

  const logOutHandler = async (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return (
    <Box>
      TEST STUFF HERE
      <Button onClick={logOutHandler}>Log Out</Button>
    </Box>
  );
};

export default Home;
