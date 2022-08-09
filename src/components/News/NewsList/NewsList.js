import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import NewsPost from "./NewsPost/NewsPost";

const NewsList = (props) => {
  return (
    <Box>
      <List styleType="none">
        {props?.news?.map((item) => (
          <ListItem key={item.newsId}>
            <NewsPost
              created_at={item.created_at.toDate()}
              headline={item.headline}
              content={item.content}
              newsId={item.newsId}
              userName={item.userName}
              userId={item.userId}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NewsList;
