import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
  Center,
} from "@chakra-ui/react";
import FirestoreContext from "../../../../store/firestore-context";
import { auth } from "../../../../Firebase";

const EditNewsForm = (props) => {
  const [headlineInput, setHeadlineInput] = useState(`${props.headline}`);
  const [contentInput, setContentInput] = useState(`${props.content}`);
  const fireCtx = useContext(FirestoreContext);

  const headlineInputHandler = (event) => {
    setHeadlineInput(event.target.value);
  };

  const contentInputHandler = (event) => {
    setContentInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      fireCtx
        .EditNewsItemInDB(
          props.userId,
          props.newsId,
          headlineInput,
          contentInput
        )
        .then(() => {
          props.onClose();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center>
      <Box>
        <form onSubmit={submitHandler}>
          <FormLabel htmlFor="headline">Headline</FormLabel>
          <Input
            type="text"
            value={headlineInput}
            onChange={headlineInputHandler}
          />
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            height="400px"
            overflow="scroll"
            value={contentInput}
            onChange={contentInputHandler}
          />
          {/* overflow scroll not working here for bug */}
          <Button type="submit">Edit</Button>
        </form>
      </Box>
    </Center>
  );
};

export default EditNewsForm;
