import { Center, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import FirestoreContext from "../../store/firestore-context";
import NewQuest from "./NewQuest/NewQuest";
import QuestsList from "./QuestsList/QuestsList";
import { auth } from "../../Firebase";

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
      <Center margin="5px">
        {auth.currentUser.emailVerified ? (
          <NewQuest createQuestItem={createQuestItem} />
        ) : (
          <Box>
            <p>Please validate your email to post!</p>
          </Box>
        )}
      </Center>
      <Center height="88vh">
        <QuestsList quests={props.quests} />
      </Center>
    </Box>
  );
};

export default Quests;
