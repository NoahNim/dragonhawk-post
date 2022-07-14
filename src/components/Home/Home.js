import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import Account from "../Account/Account";

const Home = () => {
  return (
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
            <Account />
          </Center>
        </TabPanel>
        <TabPanel>News</TabPanel>
        <TabPanel>Quests</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Home;
