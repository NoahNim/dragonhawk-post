import React, { useState, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  Button,
  Box,
  useDisclosure,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Center,
} from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";

const SignupPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const authCtx = useContext(AuthContext);

  const emailInputChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const signupHandler = async (event) => {
    event.preventDefault();

    try {
      await authCtx?.signup(emailInput, passwordInput);
    } catch (error) {}
  };

  return (
    <Center>
      <Box>
        <Button onClick={onOpen}>Or Sign Up</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={signupHandler}>
                <FormControl isInvalid={authCtx.loginError}>
                  {!authCtx.loginError ? (
                    <FormHelperText color="black">
                      Enter the email and password you wish to use
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage
                      backgroundColor="white"
                      borderRadius="6px"
                    >
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
                    Sign Up
                  </Button>
                </Center>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Center>
  );
};

export default SignupPage;
