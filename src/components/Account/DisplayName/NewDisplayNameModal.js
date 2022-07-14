import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import NewDisplayName from "./NewDisplayName";

const NewDisplayNameModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button backgroundColor="#84F0C7" onClick={onOpen} fontSize="8px">
        Change
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} width="10px">
        <ModalOverlay />
        <Center>
          <ModalContent
            backgroundColor="#F1BF98"
            display="flex"
            flexDirection="column"
            margin="300px"
            borderRadius="6px"
            padding="15px"
          >
            <Center>
              <ModalHeader fontSize="10px">New Display Name</ModalHeader>
            </Center>

            <ModalCloseButton />

            <ModalBody>
              <NewDisplayName
                displayName={props.displayName}
                changeDisplayName={props.changeDisplayName}
                onClose={onClose}
              />
            </ModalBody>
          </ModalContent>
        </Center>
      </Modal>
    </Box>
  );
};

export default NewDisplayNameModal;
