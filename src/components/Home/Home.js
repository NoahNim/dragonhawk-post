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
import { collection, onSnapshot, query } from "firebase/firestore/lite";
import { db } from "../../Firebase";
import AuthContext from "../../store/auth-context";
import { updateProfile } from "firebase/auth";
import Account from "../Account/Account";
import NewDisplayName from "../Account/DisplayName/NewDisplayName";
import News from "../News/News";
import Quests from "../Quests/Quests";
import Title from "../title/title";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  const [displayName, setDisplayName] = useState();
  const [newsState, setNewsState] = useState([]);
  const [questsState, setQuestsState] = useState([]);
  const [emailSent, setEmailSent] = useState();

  useEffect(() => {
    const news = query(collection(db, "news"));
    const quests = query(collection(db, "quests"));
    onSnapshot(
      news,
      (querySnapShot) => {
        setNewsState(querySnapShot?.docs.map((doc) => doc.data()));
      },
      (error) => {
        // ...
      }
    );
    onSnapshot(
      quests,
      (querySnapShot) => {
        setQuestsState(querySnapShot?.docs.map((doc) => doc.data()));
      },
      (error) => {
        // ...
      }
    );
  }, []);

  const changeDisplayName = async (name) => {
    try {
      await updateProfile(user, {
        displayName: name,
      }).then(() => {
        setDisplayName(name);
        localStorage.setItem("Display State", "1");
        authCtx.setDisplayNameState(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logOutHandler = async (event) => {
    event.preventDefault();

    setEmailSent();
    authCtx.logout();
  };

  return (
    <Box>
      {authCtx.displayNameState ? (
        <Tabs>
          <Center>
            <Box
              marginRight="400px"
              backgroundColor="#826041"
              color="yellow"
              borderRadius="5px"
              width="7.57%"
            >
              <Title />
            </Box>
            <Center>
              <TabList>
                <Tab>Account</Tab>
                <Tab>News</Tab>
                <Tab>Quests</Tab>
              </TabList>
            </Center>
            <Box
              marginLeft="400px"
              backgroundColor="#826041"
              color="yellow"
              borderRadius="5px"
              width="7.57%"
            >
              <Title />
            </Box>
          </Center>
          <TabPanels>
            <TabPanel>
              <Center>
                <Account
                  displayName={displayName}
                  setDisplayName={setDisplayName}
                  logOutHandler={logOutHandler}
                  changeDisplayName={changeDisplayName}
                  quests={questsState}
                  news={newsState}
                  emailSent={emailSent}
                  setEmailSent={setEmailSent}
                />
              </Center>
            </TabPanel>
            <TabPanel>
              <News user={user} news={newsState} />
            </TabPanel>
            <TabPanel>
              <Quests user={user} quests={questsState} />
            </TabPanel>
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
