import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Box } from "@chakra-ui/react";
import { auth } from "./Firebase";
function App() {
  let userCtx = useContext(AuthContext);
  return (
    <Box>{userCtx.loginState && auth.currentUser ? <Home /> : <Login />}</Box>
  );
}

export default App;
