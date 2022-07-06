import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
  Box,
  Center,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
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
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Center>
      <Box>
        <form onSubmit={loginHandler}>
          <FormControl isInvalid={loginError}>
            {!loginError ? (
              <FormHelperText>Enter your email</FormHelperText>
            ) : (
              <FormErrorMessage>{loginError}</FormErrorMessage>
            )}
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={emailInput}
              width="300px"
              borderRadius="6px"
              borderColor="black"
              onChange={emailInputChangeHandler}
            />
            <FormLabel htmlFor="paswword">Password</FormLabel>
            <Input
              id="password"
              type="password"
              borderRadius="6px"
              borderColor="black"
              width="300px"
              value={passwordInput}
              onChange={passwordInputChangeHandler}
            />
            <Button type="submit">Log In</Button>
          </FormControl>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
