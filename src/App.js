import React, { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const userCtx = useContext(AuthContext);

  console.log(userCtx.user);

  return userCtx?.user ? <Home /> : <Login />;
}

export default App;
