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
import NewQuestForm from "./NewQuestForm/NewQuestForm";

const NewQuest = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
      <Box>
        <Button
          backgroundColor="#84F0C7"
          onClick={onOpen}
          fontSize="16px"
          width="100%"
          height="100%"
        >
          Post Quest
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
              height="575px"
            >
              <ModalCloseButton />
              <Center>
                <ModalBody>
                  <NewQuestForm
                    createQuestItem={props.createQuestItem}
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

export default NewQuest;
