import React, { createContext } from "react";
import { db } from "../Firebase";
import {
  doc,
  setDoc,
  Timestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore/lite";

const FirestoreContext = createContext({});

export const FirestoreContextProvider = (props) => {
  const addUserToDB = async (id, name, email) => {
    console.log(id, name, email);

    try {
      await setDoc(doc(db, "users", id), {
        id: id,
        name: name,
        email: email,
        created_at: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getNewsFromDB = async () => {
    const userRef = collection(db, "users");
    const users = await getDocs(userRef);

    users.forEach(async (user) => {
      let userCollectionRef = collection(db, `users/${user.id}/news`);
      const newsDoc = await getDocs(userCollectionRef);
      newsDoc.forEach((item) => {
        console.log(item.data());
      });
    });
  };

  const addNewstoDB = async (userId, newsId, userName, headline, content) => {
    console.log(userId, newsId, headline, content);

    try {
      await setDoc(
        doc(db, "users", userId.toString(), "news", newsId.toString()),
        {
          userId: userId,
          newsId: newsId,
          userName: userName,
          headline: headline,
          content: content,
          created_at: Timestamp.fromDate(new Date()),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FirestoreContext.Provider
      value={{
        addUserToDB: addUserToDB,
        addNewstoDB: addNewstoDB,
        getNewsFromDB: getNewsFromDB,
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
