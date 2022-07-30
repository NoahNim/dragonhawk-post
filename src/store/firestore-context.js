import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { db } from "../Firebase";
import {
  doc,
  setDoc,
  Timestamp,
  collection,
  getDocs,
} from "firebase/firestore/lite";

const FirestoreContext = createContext({});

export const FirestoreContextProvider = (props) => {
  let [newsItemData, setNewsItemData] = useState();
  // const [newsState, setNewsState] = useState();

  const newsState = useMemo(
    async (users) => {
      const userRef = collection(db, "users");
      users = await getDocs(userRef);
      const theNews = {};

      if (users) {
        users.forEach(async (user) => {
          let userCollectionRef = collection(db, `users/${user.id}/news`);
          const newsDoc = await getDocs(userCollectionRef);

          newsDoc.forEach(async (item) => {
            console.log(item);
            const name = await item.name;
            const email = await item.email;
            const created_at = await item.created_at;

            if (!(item.id in theNews)) {
              theNews[item.id] = {
                id: item.id,
                email: email,
                name: name,
                created_at: created_at,
              };
            }
          });
        });
        console.log(theNews);
      }
    },
    [setNewsItemData]
  );

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

  // const getNewsFromDB = useCallback(async () => {
  //   const userRef = collection(db, "users");
  //   const users = await getDocs(userRef);

  //   users.forEach(async (user) => {
  //     let userCollectionRef = collection(db, `users/${user.id}/news`);
  //     const newsDoc = await getDocs(userCollectionRef);

  //     newsDoc.forEach((item) => {
  //       if (!(item.id in itemData)) {
  //         itemData[item.id] = item.data();
  //       }
  //     });
  //   });
  //   setNewsState(itemData);
  // }, [itemData]);

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(newsState);
  //   }, 5000);
  // }, [newsState]);

  // console.log(newsItemData);

  return (
    <FirestoreContext.Provider
      value={{
        addUserToDB: addUserToDB,
        addNewstoDB: addNewstoDB,
        // getNewsFromDB: getNewsFromDB,
        newsState: newsState,
        newsItemData: newsItemData,
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
