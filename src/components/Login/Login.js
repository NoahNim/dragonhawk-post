import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const authCtx = useContext(AuthContext);

  const emailInputChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      await authCtx?.login(emailInput, passwordInput);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={emailInput}
          onChange={emailInputChangeHandler}
        ></Input>
        <FormLabel htmlFor="paswword">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={passwordInput}
          onChange={passwordInputChangeHandler}
        ></Input>
        <Button type="submit">Log In</Button>
      </FormControl>
    </form>
  );
};

export default Login;
