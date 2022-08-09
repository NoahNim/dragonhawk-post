import React from "react";
import { Box, List, ListItem, Flex, Spacer } from "@chakra-ui/react";
import NewsPost from "./NewsPost/NewsPost";

const NewsList = (props) => {
  return (
    <Box backgroundColor="#E7D8C9" width="100%" height="100%">
      <List>
        <Flex flexDirection="row" flexFlow="wrap" flexWrap="row">
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
        </Flex>
      </List>
    </Box>
  );
};

export default NewsList;
