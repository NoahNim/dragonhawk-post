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
import EditNewsItem from "../../EditNewsItem/EditNewsItem";

const NewsPost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box backgroundColor="grey" margin="10px">
      <Button onClick={onOpen}>{props.headline}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{props.headline}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ListItem key={props.content}>{props.content}</ListItem>
          </ModalBody>
          <ModalFooter>
            <ListItem key={props.userName}>{props.userName}</ListItem>
            <ListItem key={props.created_at}>
              {props.created_at.toString()}
            </ListItem>
            <EditNewsItem
              headline={props.headline}
              content={props.content}
              newsId={props.newsId}
              userId={props.userId}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NewsPost;
