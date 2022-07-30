import React from "react";
import { List, ListItem, Box } from "@chakra-ui/react";

const NewsPost = (props) => {
  return (
    <Box>
      <List>
        <ListItem>{props.post.headline}</ListItem>
      </List>
    </Box>
  );
};

export default NewsPost;
