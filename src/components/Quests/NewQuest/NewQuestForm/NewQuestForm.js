import React, { useState } from "react";
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
import { AddIcon } from "@chakra-ui/icons";

const NewQuestForm = (props) => {
  const [questNameInput, setQuestNameInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [questCreateError, setQuestCreateError] = useState();

  const questNameInputHandler = (event) => {
    setQuestNameInput(event.target.value);
  };

  const contentInputHandler = (event) => {
    setContentInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (questNameInput.length > 0 && contentInputHandler.length > 0) {
      try {
        props.createQuestItem(questNameInput, contentInput).then(() => {
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
          />
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            height="400px"
            value={contentInput}
            onChange={contentInputHandler}
          />
          <Button background="none" type="submit" marginLeft="80%">
            <Tooltip label="Post">
              <AddIcon
                _hover={{ cursor: "pointer" }}
                color="green"
                margin="5px"
              />
            </Tooltip>
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default NewQuestForm;
