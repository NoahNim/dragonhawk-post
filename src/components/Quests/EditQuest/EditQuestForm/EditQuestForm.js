import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
  Center,
  FormErrorMessage,
  Tooltip,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import FirestoreContext from "../../../../store/firestore-context";
import { auth } from "../../../../Firebase";

const EditQuestForm = (props) => {
  const [questNameInput, setQuestNameInput] = useState(props.questName);
  const [contentInput, setContentInput] = useState(props.content);
  const [questCreateError, setQuestCreateError] = useState();
  const fireCtx = useContext(FirestoreContext);

  const questNameInputHandler = (event) => {
    setQuestNameInput(event.target.value);
  };

  const contentInputHandler = (event) => {
    setContentInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      questNameInput.length > 0 &&
      contentInputHandler.length > 0 &&
      props.userId === auth.currentUser.uid
    ) {
      try {
        fireCtx
          .EditQuestItemInDB(props.questId, questNameInput, contentInput)
          .then(() => {
            setQuestCreateError();
            props.onClose();
          });
      } catch (error) {}
    } else if (questNameInput.length === 0) {
      setQuestCreateError("Please enter a quest name");
    } else if (contentInput.length === 0) {
      setQuestCreateError("Please enter content for this quest");
    }
  };

  return (
    <Center>
      <Box>
        <form onSubmit={submitHandler}>
          <FormControl isInvalid={questCreateError}>
            {questCreateError === "Please enter a quest name" ? (
              <FormErrorMessage>Please enter a quest name</FormErrorMessage>
            ) : null}
            {questCreateError === "Please enter content for this quest" ? (
              <FormErrorMessage>
                Please create content for this quest
              </FormErrorMessage>
            ) : null}
          </FormControl>
          <FormLabel htmlFor="headline">Headline</FormLabel>
          <Input
            type="text"
            value={questNameInput}
            onChange={questNameInputHandler}
            backgroundColor="#ECF8F8"
          />
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            height="400px"
            value={contentInput}
            onChange={contentInputHandler}
            backgroundColor="#ECF8F8"
          />
          <Button type="submit" marginLeft="80%">
            <Tooltip label="Edit">
              <EditIcon
                _hover={{ cursor: "pointer" }}
                color="blue"
                margin="5px"
              />
            </Tooltip>
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default EditQuestForm;
