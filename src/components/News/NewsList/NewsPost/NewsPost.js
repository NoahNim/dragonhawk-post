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
import DeleteNewsItem from "../../DeleteNewsItem/DeleteNewsItem";
import { auth } from "../../../../Firebase";

const NewsPost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box margin="10px">
      <Button backgroundColor="#E7D8C9" onClick={onOpen}>
        {props.headline}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        {props.newsId === "undefined" ? onClose() : null}

        <ModalContent backgroundColor="#E7D8C9">
          <ModalHeader>{props.headline}</ModalHeader>
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
                <EditNewsItem
                  headline={props.headline}
                  content={props.content}
                  newsId={props.newsId}
                  userId={props.userId}
                />
                <DeleteNewsItem
                  newsId={props.newsId}
                  userId={props.userId}
                  headline={props.headline}
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

export default NewsPost;
