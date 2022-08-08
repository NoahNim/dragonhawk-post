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

const Quest = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box backgroundColor="grey" margin="10px" overflow="scroll">
      <Button onClick={onOpen}>{props.questName}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        {props.questId === "undefined" ? onClose() : null}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ListItem key={props.content}>{props.content}</ListItem>
          </ModalBody>
          <ModalFooter>
            <ListItem key={props.userName}>{props.userName}</ListItem>
            <ListItem key={props.created_at}>
              {props.created_at.toString()}
            </ListItem>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Quest;
