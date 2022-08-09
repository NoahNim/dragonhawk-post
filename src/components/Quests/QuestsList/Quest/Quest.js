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
      <Button backgroundColor="#E7D8C9" onClick={onOpen}>
        {props.questName}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        {props.questId === "undefined" ? onClose() : null}
        <ModalContent backgroundColor="#E7D8C9">
          <ModalHeader>{props.questName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody backgroundColor="#EEE4E1">
            <ListItem listStyleType="none" key={props.content}>
              {props.content}
            </ListItem>
          </ModalBody>
          <ModalFooter>
            <ListItem listStyleType="none" key={props.userName}>
              {props.userName}
            </ListItem>
            <ListItem listStyleType="none" key={props.created_at}>
              {props.created_at.toString()}
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
