import React, { useContext, useState } from "react";
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
import { updateProfile } from "firebase/auth";
import Account from "../Account/Account";
import AuthContext from "../../store/auth-context";
import NewDisplayName from "../Account/DisplayName/NewDisplayName";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  const [displayName, setDisplayName] = useState();

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
            <TabPanel>News</TabPanel>
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
