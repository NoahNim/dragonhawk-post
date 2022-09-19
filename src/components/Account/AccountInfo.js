import React from "react";
import { List, ListItem, ListIcon, Box, Center } from "@chakra-ui/react";
import { EmailIcon, StarIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import NewDisplayNameModal from "./DisplayName/NewDisplayNameModal";

const AccountInfo = (props) => {
  return (
    <Center display="flex" flexDirection="column">
      <Box>
        <b>Displaying Account Profile: {props?.displayName}</b>
      </Box>
      <List backgroundColor="#C89D7C" borderRadius="6px" padding="15px">
        <ListItem margin="10px">
          <ListIcon as={EmailIcon} color="#e6dfd1" />
          Email: {props.email}
        </ListItem>
        <ListItem display="flex" flexDirection="row" margin="10px">
          <ListIcon as={StarIcon} color="yellow" />
          Display Name: {props?.displayName}
          <Box marginLeft="10px">
            <NewDisplayNameModal
              displayName={props.displayName}
              changeDisplayName={props.changeDisplayName}
            />
          </Box>
        </ListItem>
        <ListItem margin="10px">
          <ListIcon
            as={props?.emailVerified ? CheckIcon : WarningIcon}
            color={props?.emailVerified ? "green" : "red"}
          />
          Email Verified
        </ListItem>
      </List>
    </Center>
  );
};

export default AccountInfo;
