import React, { useContext } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";

const Home = () => {
  const authCtx = useContext(AuthContext);

  const logOutHandler = async (event) => {
    event.preventDefault();
    authCtx.logout();
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Account</Tab>
        <Tab>News</Tab>
        <Tab>Quests</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          User Account
          <Button onClick={logOutHandler}>Log Out</Button>
        </TabPanel>
        <TabPanel>News</TabPanel>
        <TabPanel>Quests</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Home;
