import React from "react";
import { List, ListItem, Box } from "@chakra-ui/react";
import { doc, Timestamp } from "firebase/firestore/lite";

const NewsPost = (props) => {
  return (
    <Box backgroundColor="grey" margin="10px">
      <List>
        <ListItem key={props.headline}>{props.headline}</ListItem>
        <ListItem key={props.content}>{props.content}</ListItem>
        <ListItem key={props.userName}>{props.userName}</ListItem>
        <ListItem key={props.created_at}>
          {props.created_at.toString()}
        </ListItem>
      </List>

      {/* <Box>{props.headline}</Box>
      <Box>{props.content}</Box> */}
    </Box>
  );
};

export default NewsPost;
