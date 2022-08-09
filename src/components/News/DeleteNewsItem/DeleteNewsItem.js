import React, { useState, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  Box,
  Button,
  useDisclosure,
  Center,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import FirestoreContext from "../../../store/firestore-context";
import { auth } from "../../../Firebase";

const DeleteNewsItem = (props) => {
  const [headlineInput, setHeadlineInput] = useState("");
  const fireCtx = useContext(FirestoreContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newsDeleteError, setNewsDeleteError] = useState();

  const headlineInputHandler = (event) => {
    setHeadlineInput(event.target.value);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    if (
      headlineInput === props.headline &&
      props.userId === auth.currentUser.uid
    ) {
      try {
        fireCtx.DeleteNewsItemInDB(props.newsId);
      } catch (error) {}
    } else {
      setNewsDeleteError("Please enter the correct headline");
    }
  };

  return (
    <Box>
      <Button onClick={onOpen}>
        <DeleteIcon color="red" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Center>
          <ModalContent
            backgroundColor="#F1BF98"
            display="flex"
            flexDirection="column"
            borderRadius="6px"
            width="300px"
            height="100x"
          >
            <ModalHeader>Delete {props.headline}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={deleteHandler}>
                <FormControl isInvalid={newsDeleteError}>
                  {newsDeleteError === "Please enter the correct headline" ? (
                    <FormErrorMessage>
                      Please enter the correct headline
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
                <FormLabel htmlFor="headlineCheck">
                  Please enter the headline to delete news
                </FormLabel>
                <Input
                  type="text"
                  value={headlineInput}
                  onChange={headlineInputHandler}
                />
                <Button type="submit">
                  <DeleteIcon color="red" />
                </Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Center>
      </Modal>
    </Box>
  );
};

export default DeleteNewsItem;
