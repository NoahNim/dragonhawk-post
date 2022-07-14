import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
  Box,
  Center,
} from "@chakra-ui/react";

const DisplayNameWarning = (props) => {
  const [displayNameInput, setDisplayNameInput] = useState("");

  const displayNameInputHandler = (event) => {
    setDisplayNameInput(event.target.value);
  };

  const displayNameSubmitHandler = async (event) => {
    event.preventDefault();

    console.log(displayNameInput);

    // try {
    await props?.changeDisplayName(displayNameInput);
    // } catch (error) {}
  };

  return (
    <Center>
      <Box>
        <form onSubmit={displayNameSubmitHandler}>
          <FormControl></FormControl>
          <FormLabel htmlFor="displayName">Please Set a Display Name</FormLabel>
          <Input
            id="display-name"
            type="text"
            value={displayNameInput}
            onChange={displayNameInputHandler}
            width="300px"
            borderRadius="6px"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Center>
  );
};

export default DisplayNameWarning;
