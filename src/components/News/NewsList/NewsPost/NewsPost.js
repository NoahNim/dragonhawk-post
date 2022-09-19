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
import { auth } from "../../../../../Firebase";

const NewsPost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box margin="5px">
      <Button backgroundColor="#EEE4E1" fontSize="18x" onClick={onOpen}>
        {props.headline}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} width="100%">
        <ModalOverlay />

        {props.newsId === "undefined" ? onClose() : null}

        <ModalContent
          height="60vh"
          backgroundColor="#EEE4E1"
          margin="140px"
          padding="25px"
        >
          <ModalHeader>{props.headline}</ModalHeader>
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
