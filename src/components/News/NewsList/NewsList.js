import React, { useState, useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import NewsPost from "./NewsPost/NewsPost";

const NewsList = (props) => {
  const [currNews, setCurrNews] = useState();
  const [theNews, setTheNews] = useState();

  return (
    <Box>
      {/* {currNews?.map((post) => {
        return <NewsPost post={post} />;
      })} */}
    </Box>
  );
};

export default NewsList;
