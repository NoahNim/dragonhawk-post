import { Center, Box } from "@chakra-ui/react";
import React from "react";
import NewNewsItem from "./NewNewsItem/NewNewsItem";
import FirestoreContext from "../../store/firestore-context";

const News = () => {
  // The news is a bulletin board. Each news items will be a modal that opens up as an obverlay on the users screen.

  return (
    <Box>
      <Center>
        <NewNewsItem />
      </Center>
    </Box>
  );
};

export default News;
