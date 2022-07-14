import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { EmailIcon, StarIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";

const AccountInfo = (props) => {
  return (
    <List>
      <ListItem>
        <ListIcon as={EmailIcon} />
        Email: {props.email}
      </ListItem>
      <ListItem>
        <ListIcon as={StarIcon} />
        Display Name: {props.displayName}
      </ListItem>
      <ListItem>
        <ListIcon as={props.emailVerified ? CheckIcon : WarningIcon} />
        Email Verified
      </ListItem>
    </List>
  );
};

export default AccountInfo;
