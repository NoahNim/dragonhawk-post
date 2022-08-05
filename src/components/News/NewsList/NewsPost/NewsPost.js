import React from "react";
import {
  List,
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

const NewsPost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box backgroundColor="grey" margin="10px">
      <Button onClick={onOpen}>{props.headline}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalCloseButton />
        <ModalContent>
          <ModalHeader>{props.headline}</ModalHeader>
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

export default NewsPost;
