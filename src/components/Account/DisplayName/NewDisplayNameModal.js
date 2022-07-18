import React from "react";
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
import NewDisplayName from "./NewDisplayName";

const NewDisplayNameModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center>
      <Box>
        <Button
          backgroundColor="#84F0C7"
          onClick={onOpen}
          fontSize="8px"
          width="20px"
          height="20px"
        >
          Change
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} backgroundColor="#A47449">
          <ModalOverlay />
          <Center>
            <ModalContent
              backgroundColor="#F1BF98"
              display="flex"
              flexDirection="column"
              borderRadius="6px"
              width="350px"
              height="190px"
            >
              <Center></Center>

              <ModalCloseButton />
              <Center>
                <ModalBody>
                  <NewDisplayName
                    displayName={props.displayName}
                    changeDisplayName={props.changeDisplayName}
                    onClose={onClose}
                  />
                </ModalBody>
              </Center>
            </ModalContent>
          </Center>
        </Modal>
      </Box>
    </Center>
  );
};

export default NewDisplayNameModal;
