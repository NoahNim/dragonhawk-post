import React, { createContext } from "react";
import { db } from "../Firebase";
import {
  doc,
  setDoc,
  Timestamp,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

const FirestoreContext = createContext({});

export const FirestoreContextProvider = (props) => {
  const addNewstoDB = async (userId, newsId, userName, headline, content) => {
    try {
      await setDoc(doc(db, "news", newsId.toString()), {
        userId: userId,
        newsId: newsId,
        userName: userName,
        headline: headline,
        content: content,
        created_at: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addQuesttoDB = async (
    userId,
    questId,
    userName,
    questName,
    content
  ) => {
    try {
      await setDoc(doc(db, "quests", questId.toString()), {
        userId: userId,
        questId: questId,
        userName: userName,
        questName: questName,
        content: content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const EditQuestItemInDB = async (questId, questName, content) => {
    const questDoc = doc(db, "quests", `${questId}`);
    try {
      await updateDoc(questDoc, {
        questName: questName,
        content: content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const EditNewsItemInDB = async (newsId, headline, content) => {
    const newsDoc = doc(db, "news", `${newsId}`);
    try {
      await updateDoc(newsDoc, {
        headline: headline,
        content: content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteQuestItemInDB = async (questId) => {
    const questDoc = doc(db, "quests", `${questId}`);
    try {
      await deleteDoc(questDoc);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteNewsItemInDB = async (newsId) => {
    const newsDoc = doc(db, "news", `${newsId}`);
    try {
      await deleteDoc(newsDoc);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FirestoreContext.Provider
      value={{
        addNewstoDB: addNewstoDB,
        EditNewsItemInDB: EditNewsItemInDB,
        DeleteNewsItemInDB: DeleteNewsItemInDB,
        addQuesttoDB: addQuesttoDB,
        EditQuestItemInDB: EditQuestItemInDB,
        DeleteQuestItemInDB: DeleteQuestItemInDB,
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
