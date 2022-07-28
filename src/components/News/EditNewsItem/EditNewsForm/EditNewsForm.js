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

const EditNewsForm = (props) => {
  const [headlineInput, setHeadlineInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  return (
    <Center>
      <Box>
        <form>
          <FormLabel htmlFor="headline">Headline</FormLabel>
          <Input type="text" />
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea height="400px" />
          <Button type="submit">Post</Button>
        </form>
      </Box>
    </Center>
  );
};

export default EditNewsForm;
