import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";
import Quest from "./Quest/Quest";

const QuestsList = (props) => {
  return (
    <Box>
      <List>
        {props.quests?.map((item) => (
          <ListItem key={item.questId}>
            <Quest
              questId={item.questId}
              questName={item.questName}
              content={item.content}
              userId={item.userId}
              userName={item.userName}
              created_at={item.created_at.toDate()}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default QuestsList;
