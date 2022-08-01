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

      // db.collection("app")
      //   .document("users")
      //   .collection(uid)
      //   .document("notifications");

      if (users) {
        users.forEach(async (user) => {
          let userCollectionRef = collection(db, `users`);
          const usersDoc = await getDocs(userCollectionRef);
          let currUserId = {};
          usersDoc.forEach((user) => {
            if (!(user.id in currUserId)) {
              currUserId[user.id] = user.data();
            }
          });

          console.log(currUserId);

          let newsCollectionRef = collection(db, `users/${currUserId}/news`);
          const newsDoc = await getDocs(newsCollectionRef);

          newsDoc.forEach(async (item) => {
            console.log(item.id, " => ", item.data());
            console.log(item.id);
            // let newsCollectionRef = collection(
            //   db,
            //   `users/${user.id}/truenews/news/${item.id}/${item.id}`
            // );
            // setNewsItemData(newsCollectionRef);
            // // if (!(item.id in theNews)) {
            //   theNews[item.id] = {
            //     id: item.id,
            //     userId: item.userId,
            //     headline: item.headline,
            //     content: item.content,
            //     userName: item.userName,
            //   };
            // }
          });
        });
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
        doc(db, "users", userId.toString(), `/news/`, newsId.toString()),
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
  //     console.log(newsItemData);
  //   }, 5000);
  // }, [newsItemData]);

  // console.log(newsItemData?.id);

  return (
    <FirestoreContext.Provider
      value={{
        addUserToDB: addUserToDB,
        addNewstoDB: addNewstoDB,
        // getNewsFromDB: getNewsFromDB,
        newsState,
        newsItemData: newsItemData,
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
