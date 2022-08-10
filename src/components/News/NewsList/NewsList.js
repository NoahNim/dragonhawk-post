import React from "react";
import { Box, List, ListItem, Flex } from "@chakra-ui/react";
import NewsPost from "./NewsPost/NewsPost";

const NewsList = (props) => {
  return (
    <Box backgroundColor="#E7D8C9" width="100%" height="100%" padding="0">
      <List width="100%">
        <Flex
          flexDirection="row"
          flexFlow="wrap"
          flexWrap="row"
          justifyContent={
            props.news?.length > 9 ? "space-between" : "flex-start"
          }
          alignContent="center"
          padding="0"
        >
          {props?.news?.map((item) => (
            <ListItem key={item.newsId} margin="5px">
              <NewsPost
                created_at={item.created_at.toDate().toLocaleString()}
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
