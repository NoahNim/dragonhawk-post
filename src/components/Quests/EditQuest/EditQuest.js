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
import EditQuestForm from "./EditQuestForm/EditQuestForm";

const EditQuest = (props) => {
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
          Edit Quest
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          backgroundColor="#A47449"
          overflow="scroll"
        >
          <ModalOverlay />

          <ModalContent
            backgroundColor="#F1BF98"
            display="flex"
            flexDirection="column"
            borderRadius="6px"
            width="350px"
            height="575px"
          >
            <Center>
              <ModalCloseButton />
              <ModalBody>
                <EditQuestForm
                  onClose={onClose}
                  questName={props.questName}
                  content={props.content}
                  questId={props.questId}
                  userId={props.userId}
                />
              </ModalBody>
            </Center>
          </ModalContent>
        </Modal>
      </Box>
    </Center>
  );
};

export default EditQuest;
