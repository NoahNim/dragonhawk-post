import React, { useContext, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";
import Account from "../Account/Account";
import AuthContext from "../../store/auth-context";
import DisplayNameWarning from "../Account/DisplayName/DisplayNameWarning";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  const [displayName, setDisplayName] = useState();
  console.log(user);

  const changeDisplayName = async (name) => {
    try {
      await updateProfile(user, {
        displayName: name,
      }).then(() => {
        setDisplayName(name);
        console.log(user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return user?.displayName ? (
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
            />
          </Center>
        </TabPanel>
        <TabPanel>News</TabPanel>
        <TabPanel>Quests</TabPanel>
      </TabPanels>
    </Tabs>
  ) : (
    <DisplayNameWarning changeDisplayName={changeDisplayName} />
  );
  // { user.displayName ? <Tabs>
  //   <Center>
  //     <TabList>
  //       <Tab>Account</Tab>
  //       <Tab>News</Tab>
  //       <Tab>Quests</Tab>
  //     </TabList>
  //   </Center>
  //   <TabPanels>
  //     <TabPanel>
  //       <Center>
  //         <Account
  //           displayName={displayName}
  //           setDisplayName={setDisplayName}
  //         />
  //       </Center>
  //     </TabPanel>
  //     <TabPanel>News</TabPanel>
  //     <TabPanel>Quests</TabPanel>
  //   </TabPanels>
  // </Tabs> : <DisplayNameWarning changeDisplayName={changeDisplayName} />
};

export default Home;
