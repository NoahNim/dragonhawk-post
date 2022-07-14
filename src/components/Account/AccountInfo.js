import React from "react";
import { List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { EmailIcon, StarIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import NewDisplayNameModal from "./DisplayName/NewDisplayNameModal";

const AccountInfo = (props) => {
  return (
    <List>
      <ListItem>
        <ListIcon as={EmailIcon} />
        Email: {props.email}
      </ListItem>
      <ListItem display="flex" flexDirection="row">
        <ListIcon as={StarIcon} />
        Display Name: {props?.displayName}
        <Box marginLeft="10px">
          <NewDisplayNameModal
            displayName={props.displayName}
            changeDisplayName={props.changeDisplayName}
          />
        </Box>
      </ListItem>
      <ListItem>
        <ListIcon as={props?.emailVerified ? CheckIcon : WarningIcon} />
        Email Verified
      </ListItem>
    </List>
  );
};

export default AccountInfo;
