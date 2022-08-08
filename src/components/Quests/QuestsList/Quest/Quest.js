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

const Quest = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box backgroundColor="grey" margin="10px" overflow="scroll">
      <Button onClick={onOpen}>{props.questName}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        {props.questId === "undefined" ? onClose() : null}
        <ModalContent>
          <ModalHeader>{props.questName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ListItem key={props.content}>{props.content}</ListItem>
          </ModalBody>
          <ModalFooter>
            <ListItem key={props.userName}>{props.userName}</ListItem>
            <ListItem key={props.created_at}>
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
              </>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Quest;
