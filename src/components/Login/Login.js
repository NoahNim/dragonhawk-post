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
    } catch (error) {}
  };

  return (
    <Center>
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="#C28787"
        margin="300px"
        borderRadius="6px"
        padding="15px"
      >
        <Center margin="10px" fontWeight="bold" fontSize="22px">
          <Box>Welcome!</Box>
        </Center>
        <form onSubmit={loginHandler}>
          <FormControl isInvalid={authCtx.loginError}>
            {!authCtx.loginError ? (
              <FormHelperText color="black">
                Enter your email and password
              </FormHelperText>
            ) : (
              <FormErrorMessage backgroundColor="white" borderRadius="6px">
                {authCtx.loginError}
              </FormErrorMessage>
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
          </FormControl>
          <Center>
            <Button type="submit" margin="15px">
              Log In
            </Button>
          </Center>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
