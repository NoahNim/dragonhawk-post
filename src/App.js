import React, { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import { Box } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const userCtx = useContext(AuthContext);
  useEffect(() => {
    console.log(userCtx.user);
  });

  return <Box>{userCtx.user.email ? <Home /> : <Login />}</Box>;
}

export default App;
