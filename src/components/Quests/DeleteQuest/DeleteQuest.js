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

const DeleteQuest = (props) => {
  const [questNameInput, setQuestNameInput] = useState("");
  const fireCtx = useContext(FirestoreContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [questDeleteError, setQuestDeleteError] = useState();

  const questNameInputHandler = (event) => {
    setQuestNameInput(event.target.value);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    if (questNameInput === props.questName) {
      try {
        fireCtx.DeleteQuestItemInDB(props.questId);
        setQuestDeleteError();
        props.onClose();
      } catch (error) {}
    } else {
      setQuestDeleteError("Please enter the correct quest name");
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
            <ModalHeader>Delete {props.questName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={deleteHandler}>
                <FormControl isInvalid={questDeleteError}>
                  {questDeleteError ===
                  "Please enter the correct quest name" ? (
                    <FormErrorMessage>
                      Please enter the correct quest name
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
                <FormLabel htmlFor="questNameCheck">
                  Please enter the quest name to delete news
                </FormLabel>
                <Input
                  type="text"
                  value={questNameInput}
                  onChange={questNameInputHandler}
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

export default DeleteQuest;
