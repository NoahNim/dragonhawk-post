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
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
