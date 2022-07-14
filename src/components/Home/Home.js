import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Account from "../Account/Account";

const Home = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Account</Tab>
        <Tab>News</Tab>
        <Tab>Quests</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Account />
        </TabPanel>
        <TabPanel>News</TabPanel>
        <TabPanel>Quests</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Home;
