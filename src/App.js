import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  let userCtx = useContext(AuthContext);

  return userCtx.loginState ? <Home /> : <Login />;
}

export default App;
