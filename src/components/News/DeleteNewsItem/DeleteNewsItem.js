import React, { useState, useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  Box,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import FirestoreContext from "../../../store/firestore-context";

const DeleteNewsItem = (props) => {
  const [headlineInput, setHeadlineInput] = useState("");
  const fireCtx = useContext(FirestoreContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headlineInputHandler = (event) => {
    setHeadlineInput(event.target.value);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    if (headlineInput === props.headline) {
      try {
        fireCtx.DeleteNewsItemInDB(props.userId, props.newsId);
      } catch (error) {}
    }
  };

  return (
    <Box>
      <Button onClick={onOpen}>
        <DeleteIcon color="red" />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalCloseButton />
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
            <ModalBody>
              <form onSubmit={deleteHandler}>
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
