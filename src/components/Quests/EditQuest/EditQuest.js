import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import EditQuestForm from "./EditQuestForm/EditQuestForm";

const EditQuest = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
      <Box>
        <Box>
          <Tooltip label="Edit">
            <EditIcon
              _hover={{ cursor: "pointer" }}
              color="blue"
              onClick={onOpen}
              margin="5px"
            />
          </Tooltip>
        </Box>
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
