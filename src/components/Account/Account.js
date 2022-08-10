import React, { useContext, useState, useEffect } from "react";
import { Button, Box, Center, List, ListItem } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";
import AccountInfo from "./AccountInfo";
import { auth } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import ChangePassword from "./ChangePassword/ChangePassword";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import NewsPost from "../News/NewsList/NewsPost/NewsPost";
import Quest from "../Quests/QuestsList/Quest/Quest";

const Account = (props) => {
  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  const [email, setEmail] = useState();
  const [emailVerified, setEmailVerified] = useState();
  const [userNews, setUserNews] = useState();
  const [userQuests, setUserQuests] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        props.setDisplayName(user.displayName);
        setEmail(user.email);
        setEmailVerified(user.emailVerified);
        setUserNews(props.news.filter((news) => news.userId === user.uid));
        setUserQuests(
          props.quests.filter((quests) => quests.userId === user.uid)
        );
      } else {
      }
    });
  }, [user, props]);

  return (
    <Box margin="10px">
      <AccountInfo
        displayName={props.displayName}
        email={email}
        emailVerified={emailVerified}
        changeDisplayName={props.changeDisplayName}
      />
      <Center>
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Button
            width="20px"
            height="20px"
            fontSize="8px"
            onClick={props.logOutHandler}
            marginTop="5px"
            marginRight="5px"
          >
            Log Out
          </Button>
          <Box marginRight="5px">
            <ChangePassword email={email} />
          </Box>
          <Box>
            <DeleteAccount email={email} />
          </Box>
        </Box>
      </Center>

      <Box
        margin="10px"
        width="300px"
        backgroundColor="#E6BEAE"
        borderRadius="6px"
        padding="15px"
      >
        <Center display="flex" flexDirection="column">
          News Posted By You:
          <List>
            {userNews?.map((item) => (
              <ListItem key={item.newsId}>
                <NewsPost
                  created_at={item.created_at.toDate()}
                  headline={item.headline}
                  content={item.content}
                  newsId={item.newsId}
                  userName={item.userName}
                  userId={item.userId}
                />
              </ListItem>
            ))}
          </List>
        </Center>
      </Box>
      <Box
        margin="10px"
        width="300px"
        backgroundColor="#E6BEAE"
        borderRadius="6px"
        padding="15px"
      >
        <Center display="flex" flexDirection="column">
          Quests Posted By You:
          <List>
            {userQuests?.map((item) => (
              <ListItem key={item.questId}>
                <Quest
                  questId={item.questId}
                  questName={item.questName}
                  content={item.content}
                  userId={item.userId}
                  userName={item.userName}
                  created_at={item.created_at.toDate()}
                />
              </ListItem>
            ))}
          </List>
        </Center>
      </Box>
    </Box>
  );
};

export default Account;
