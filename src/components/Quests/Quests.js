import { Center, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import FirestoreContext from "../../store/firestore-context";
import NewQuest from "./NewQuest/NewQuest";
import QuestsList from "./QuestsList/QuestsList";

const Quests = (props) => {
  const fireCtx = useContext(FirestoreContext);

  const createQuestItem = async (questName, content) => {
    const questId = Math.floor(Math.random() * 9999999999999999);
    try {
      await fireCtx.addQuesttoDB(
        props.user.uid,
        questId,
        props.user.displayName,
        questName,
        content
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Center>
        <NewQuest createQuestItem={createQuestItem} />
      </Center>
      <Center>
        <QuestsList quests={props.quests} />
      </Center>
    </Box>
  );
};

export default Quests;
