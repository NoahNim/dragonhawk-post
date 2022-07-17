import React, { useState, useContext } from "react";
import { deleteUser } from "firebase/auth";
import AuthContext from "../../../store/auth-context";
import { auth } from "../../../Firebase";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";

const DeleteAccount = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [input, setInput] = useState("");
  const isError = input === "";
  const user = auth.currentUser;
  const userState = useContext(AuthContext);

  const handleInputChange = (event) => setInput(event.target.value);

  const verifyEmailHandler = (event) => {
    event.preventDefault();

    if (input === props.email) {
      setVerifyEmail(true);
    }
  };

  const deleteAccountHandler = async () => {
    try {
      await deleteUser(user).then(() => {
        onClose();
        userState.logout();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <Box>
        <Button
          backgroundColor="#84F0C7"
          onClick={onOpen}
          fontSize="8px"
          width="90px"
          height="20px"
        >
          Delete Account
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} backgroundColor="#A47449">
          <ModalOverlay />
          <Center>
            <ModalContent
              backgroundColor="#F1BF98"
              borderRadius="6px"
              width="300px"
            >
              <Center></Center>

              <ModalCloseButton />
              <Center>
                <ModalBody
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  {!verifyEmail ? (
                    <form onSubmit={verifyEmailHandler}>
                      <FormControl isInvalid={isError}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          id="email"
                          type="email"
                          value={input}
                          onChange={handleInputChange}
                        />
                        {!isError ? (
                          <FormHelperText>
                            Enter the email you'd like to receive the newsletter
                            on.
                          </FormHelperText>
                        ) : (
                          <FormErrorMessage>
                            Correct Email is required.
                          </FormErrorMessage>
                        )}
                      </FormControl>
                      <Center>
                        <Button
                          fontSize="8px"
                          width="50px"
                          height="20px"
                          type="submit"
                          backgroundColor="red"
                        >
                          Verify
                        </Button>
                      </Center>
                    </form>
                  ) : (
                    <Box>
                      Are you sure you wish to delete your account?
                      <Button onClick={deleteAccountHandler}>Yes</Button>
                      <Button onClick={onClose}>No</Button>
                    </Box>
                  )}
                </ModalBody>
              </Center>
            </ModalContent>
          </Center>
        </Modal>
      </Box>
    </Center>
  );
};

export default DeleteAccount;
