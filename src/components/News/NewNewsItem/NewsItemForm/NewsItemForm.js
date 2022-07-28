import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
  Center,
} from "@chakra-ui/react";

const NewsItemForm = (props) => {
  const [headlineInput, setHeadlineInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const headlineInputHandler = (event) => {
    setHeadlineInput(event.target.value);
  };

  const contentInputHandler = (event) => {
    setContentInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      props.createNewsItem(headlineInput, contentInput);
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
            value={contentInput}
            onChange={contentInputHandler}
          />
          <Button type="submit">Post</Button>
        </form>
      </Box>
    </Center>
  );
};

export default NewsItemForm;
