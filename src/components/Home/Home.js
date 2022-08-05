import React, { useContext, useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore/lite";
import { db, auth } from "../../Firebase";
import AuthContext from "../../store/auth-context";
import { updateProfile } from "firebase/auth";
import Account from "../Account/Account";
import NewDisplayName from "../Account/DisplayName/NewDisplayName";
import News from "../News/News";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  const [displayName, setDisplayName] = useState();
  const [newsState, setNewsState] = useState();

  useEffect(() => {
    async function fetchData() {
      const users = await getDocs(collection(db, "users"));
      let newsArray = [];

      if (users) {
        users.forEach(async (userFire) => {
          let newsDoc = await getDocs(
            collection(db, `users/${userFire.id}/news`)
          );

          newsDoc.forEach(async () => {
            let newsDocItem = await collection(
              db,
              "users",
              `${userFire.id}`,
              "news"
            );
            onSnapshot(newsDocItem, (newsItem) => {
              newsItem.forEach((doc) => {
                newsArray.push(doc.data());
              });
              setNewsState(newsArray);
            });
          });
        });
      }
    }

    if (user) {
      fetchData();
    }
  }, [user]);

  const changeDisplayName = async (name) => {
    const userRef = doc(db, "users", user.uid);
    try {
      await updateProfile(user, {
        displayName: name,
      }).then(() => {
        setDisplayName(name);
        localStorage.setItem("Display State", "1");
        authCtx.setDisplayNameState(true);
        updateDoc(userRef, {
          name: user.displayName,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logOutHandler = async (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return (
    <Box>
      {authCtx.displayNameState ? (
        <Tabs>
          <Center>
            <TabList>
              <Tab>Account</Tab>
              <Tab>News</Tab>
              <Tab>Quests</Tab>
            </TabList>
          </Center>
          <TabPanels>
            <TabPanel>
              <Center>
                <Account
                  displayName={displayName}
                  setDisplayName={setDisplayName}
                  logOutHandler={logOutHandler}
                  changeDisplayName={changeDisplayName}
                />
              </Center>
            </TabPanel>
            <TabPanel>
              <News user={user} news={newsState} />
            </TabPanel>
            <TabPanel>Quests</TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Center>
          <Box>
            <NewDisplayName
              changeDisplayName={changeDisplayName}
              displayName={displayName}
            />
            <Center>
              <Button onClick={logOutHandler}>Log Out</Button>
            </Center>
          </Box>
        </Center>
      )}
    </Box>
  );
};

export default Home;
