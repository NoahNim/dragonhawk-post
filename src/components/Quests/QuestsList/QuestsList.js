import React from "react";
import { Box, List, ListItem, Flex } from "@chakra-ui/react";
import Quest from "./Quest/Quest";

const QuestsList = (props) => {
  return (
    <Box width="100%" height="100%" padding="0">
      <List>
        <Flex
          flexDirection="row"
          flexFlow="wrap"
          flexWrap="row"
          justifyContent={
            props.quest?.length > 9 ? "space-between" : "flex-start"
          }
          alignContent="center"
          padding="0"
        >
          {props.quests?.map((item) => (
            <ListItem key={item.questId}>
              <Quest
                questId={item.questId}
                questName={item.questName}
                content={item.content}
                userId={item.userId}
                userName={item.userName}
                created_at={item.created_at.toDate().toLocaleString()}
              />
            </ListItem>
          ))}
        </Flex>
      </List>
    </Box>
  );
};

export default QuestsList;
