import React, {
  createContext,
  useState,
  useRef,
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
  let [usersState, setUsersState] = useState({});

  // const newsState = useMemo(
  //   async (users) => {
  //     const userRef = collection(db, "users");
  //     users = await getDocs(userRef);
  //     let userDBState = {};
  //     let userData = [];

  // db.collection("app")
  //   .document("users")
  //   .collection(uid)
  //   .document("notifications");

  // if (users) {
  //   // users.forEach(async (user) => {
  //   let userCollectionRef = collection(db, `users`);
  //   const usersDoc = await getDocs(userCollectionRef);

  //   usersDoc.forEach((user) => userData.push(user.data()));

  //   userData.forEach((user) => {
  //     if (!(user.id in userDBState)) {
  //       userDBState[user.id] = user;
  //     }
  //   });

  //   console.log(userData);
  //   console.log(userDBState);

  // let newsCollectionRef = collection(db, `users/news`);
  // const newsDoc = await getDocs(newsCollectionRef);

  // newsDoc.forEach(async (item) => {
  //   console.log(item.id, " => ", item.data());
  //   console.log(item.id);
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
  // });
  // });
  // }
  //     console.log(userDBState.length);
  //   },
  //   [setNewsItemData]
  // );

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

  const getUserDataFromDB = async () => {
    // try putting retrieving users into a useEffect and store the users in a state variable?
    const userRef = collection(db, `users`, `news`);
    const users = await getDocs(userRef);
    // db.collection("app")
    //   .document("users")
    //   .collection(uid)
    //   .document("notifications");

    if (users) {
      console.log(users.data());
      users.forEach(async (user) => {
        // if (!(user.id in usersStat
        // console.log(userData);
        // setUsersState({
        //   user: user.data(),
        //   ...usersState,
        // });
        // console.log(usersState);
        // })
      });
      // await setUsersState(userDBState).then(() => {
      //   console.log(userData);
      //   console.log(userDBState);
      //   executed = true;
      // });
      // let newsCollectionRef = collection(db, `users/news`);
      // const newsDoc = await getDocs(newsCollectionRef);
      // newsDoc.forEach(async (item) => {
      //   console.log(item.id, " => ", item.data());
      //   console.log(item.id);
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
      // });
      // });
    }
    // console.log(usersState);
  };

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

  useEffect(() => {
    // setTimeout(() => {
    //   console.log(console.log(usersState));
    // }, 5000);
  }, [usersState]);

  getUserDataFromDB();

  // console.log(usersState);

  return (
    <FirestoreContext.Provider
      value={{
        addUserToDB: addUserToDB,
        addNewstoDB: addNewstoDB,
        getUserDataFRomDB: getUserDataFromDB,
        // newsState,
        newsItemData: newsItemData,
      }}
    >
      {props.children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreContext;
