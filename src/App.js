import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Box, Center } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const userCtx = useContext(AuthContext);

  return (
    <Center>
      <Box>{userCtx.user ? <Home /> : <Login />}</Box>
    </Center>
  );
}

export default App;
