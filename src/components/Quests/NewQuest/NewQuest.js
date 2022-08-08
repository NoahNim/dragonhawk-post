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

const NewQuest = (props) => {
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
          Post Quest
        </Button>
      </Box>
    </Center>
  );
};

export default NewQuest;
