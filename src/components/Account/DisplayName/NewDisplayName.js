import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const NewDisplayName = (props) => {
  const [displayNameInput, setDisplayNameInput] = useState("");

  const displayNameInputHandler = (event) => {
    setDisplayNameInput(event.target.value);
  };

  const displayNameSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await props?.changeDisplayName(displayNameInput).then(() => {
        props.onClose();
      });
    } catch (error) {}
  };

  return (
    <Center>
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="#F1BF98"
        borderRadius="6px"
        padding="15px"
        marginTop="30vh"
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
              backgroundColor="#ECF8F8"
            />
            <Button type="submit" margin="15px" background="none">
              <>Set</> <AddIcon color="green" margin="10px" />
            </Button>
          </form>
        </Center>
      </Box>
    </Center>
  );
};

export default NewDisplayName;
