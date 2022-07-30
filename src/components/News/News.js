import { Center, Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import NewNewsItem from "./NewNewsItem/NewNewsItem";
import FirestoreContext from "../../store/firestore-context";
import NewsList from "./NewsList/NewsList";

const News = (props) => {
  // The news is a bulletin board. Each news items will be a modal that opens up as an obverlay on the users screen.
  const fireCtx = useContext(FirestoreContext);

  const createNewsItem = async (headline, content) => {
    const newsId = Math.floor(Math.random() * 9999999999999999);

    try {
      await fireCtx.addNewstoDB(
        props.user.uid,
        newsId,
        props.user.displayName,
        headline,
        content
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Center>
        <NewNewsItem createNewsItem={createNewsItem} />
      </Center>
      <NewsList news={fireCtx.newsItemData} />
    </Box>
  );
};

export default News;
