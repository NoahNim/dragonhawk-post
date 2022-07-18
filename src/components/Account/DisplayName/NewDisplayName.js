import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";

const NewDisplayName = (props) => {
  const [displayNameInput, setDisplayNameInput] = useState("");

  const displayNameInputHandler = (event) => {
    setDisplayNameInput(event.target.value);
  };

  const displayNameSubmitHandler = async (event) => {
    event.preventDefault();

    // try {
    await props?.changeDisplayName(displayNameInput).then(() => {
      props.onClose();
    });
    // } catch (error) {}
  };

  return (
    <Center>
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="#A47449"
        borderRadius="6px"
        padding="15px"
      >
        <Center>
          <form onSubmit={displayNameSubmitHandler}>
            <FormControl></FormControl>
            <FormLabel htmlFor="displayName">
              {props.displayName
                ? "New Display Name"
                : "Please Set A Display Name"}
            </FormLabel>
            <Input
              id="display-name"
              type="text"
              value={displayNameInput}
              onChange={displayNameInputHandler}
              width="300px"
              borderRadius="6px"
              borderColor="black"
              backgroundColor="#D9D0B4"
            />
            <Button type="submit" margin="15px" backgroundColor="#5482F0">
              Submit
            </Button>
          </form>
        </Center>
      </Box>
    </Center>
  );
};

export default NewDisplayName;
