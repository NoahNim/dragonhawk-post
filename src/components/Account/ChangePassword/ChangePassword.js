import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../Firebase";
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
} from "@chakra-ui/react";

const ChangePassword = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const passwordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, props.email).then(() => {
        props.setEmailSent("Email Sent!");
        onClose();
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
          {props.emailSent === "Email Sent!"
            ? props.emailSent
            : "Change Password"}
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} backgroundColor="#00B4D8">
          <ModalOverlay />
          <Center>
            <ModalContent
              backgroundColor="#00B4D8"
              borderRadius="6px"
              margin="300px"
            >
              <Center></Center>

              <ModalCloseButton />
              <Center>
                <ModalBody
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  Change Password?
                  <Button onClick={passwordReset}>Yes</Button>
                  <Button onClick={onClose}>No</Button>
                </ModalBody>
              </Center>
            </ModalContent>
          </Center>
        </Modal>
      </Box>
    </Center>
  );
};

export default ChangePassword;
