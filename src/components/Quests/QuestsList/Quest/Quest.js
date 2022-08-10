import React from "react";
import {
  ListItem,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import EditQuest from "../../EditQuest/EditQuest";
import { auth } from "../../../../Firebase";
import DeleteQuest from "../../DeleteQuest/DeleteQuest";

const Quest = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box margin="10px" overflow="scroll">
      <Button backgroundColor="#EEE4E1" fontSize="18x" onClick={onOpen}>
        {props.questName}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} width="100%">
        <ModalOverlay />

        {props.questId === "undefined" ? onClose() : null}
        <ModalContent
          height="60vh"
          backgroundColor="#EEE4E1"
          margin="140px"
          padding="25px"
        >
          <ModalHeader>{props.questName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody backgroundColor="#ECF8F8">
            <ListItem listStyleType="none" key={props.content}>
              {props.content}
            </ListItem>
          </ModalBody>
          <ModalFooter>
            <ListItem listStyleType="none" key={props.userName}>
              Posted by: {props.userName}
            </ListItem>
            <ListItem listStyleType="none" key={props.created_at}>
              Date Added:
              {props.created_at}
            </ListItem>
            {auth.currentUser.uid === props.userId ? (
              <>
                <EditQuest
                  questName={props.questName}
                  content={props.content}
                  questId={props.questId}
                  userId={props.userId}
                />
                <DeleteQuest
                  questName={props.questName}
                  questId={props.questId}
                  userId={props.userId}
                  onClose={onClose}
                />
              </>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Quest;
