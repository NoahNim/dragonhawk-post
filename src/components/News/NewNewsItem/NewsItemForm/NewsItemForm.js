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
import { EditIcon } from "@chakra-ui/icons";

const NewsItemForm = (props) => {
  const [headlineInput, setHeadlineInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [newsCreateError, setNewsCreateError] = useState();

  const headlineInputHandler = (event) => {
    setHeadlineInput(event.target.value);
  };

  const contentInputHandler = (event) => {
    setContentInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (headlineInput.length > 0 && contentInput.length > 0) {
      try {
        props.createNewsItem(headlineInput, contentInput).then(() => {
          setNewsCreateError();
          props.onClose();
        });
      } catch (error) {
        console.log(error);
      }
    } else if (headlineInput.length === 0) {
      setNewsCreateError("Please enter a headline");
    } else if (contentInput.length === 0) {
      setNewsCreateError("Please enter content");
    }
  };

  return (
    <Center>
      <Box>
        <form onSubmit={submitHandler}>
          <FormControl isInvalid={newsCreateError}>
            {newsCreateError === "Please enter a headline" ? (
              <FormErrorMessage>Please create a headline</FormErrorMessage>
            ) : null}
            {newsCreateError === "Please enter content" ? (
              <FormErrorMessage>
                Please create content for the news
              </FormErrorMessage>
            ) : null}
          </FormControl>
          <FormLabel htmlFor="headline">Headline</FormLabel>
          <Input
            type="text"
            value={headlineInput}
            onChange={headlineInputHandler}
            backgroundColor="#ECF8F8"
          />
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            height="400px"
            value={contentInput}
            onChange={contentInputHandler}
            backgroundColor="#ECF8F8"
          />
          <Button background="none" type="submit" marginLeft="80%">
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

export default NewsItemForm;
