import React, { useState } from "react";
import { deleteUser } from "firebase/auth";
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

  const handleInputChange = (event) => setInput(event.target.value);

  const verifyEmailHandler = (event) => {
    event.preventDefault();

    if (input === props.email) {
      setVerifyEmail(true);
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
            <ModalContent backgroundColor="#F1BF98" borderRadius="6px">
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
                      <Button type="submit">Verify</Button>
                    </form>
                  ) : (
                    <Box>
                      <Button onClick={""}>Yes</Button>
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
