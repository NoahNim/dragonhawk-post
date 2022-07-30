import React, { useState, useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import NewsPost from "./NewsPost/NewsPost";

const NewsList = (props) => {
  const [currNews, setCurrNews] = useState();
  const [theNews, setTheNews] = useState();

  //   const currNews = useMemo((info) => {
  //     info = Array.from(props?.news);
  //   });

  //   useEffect(() => {
  //     setTimeout(
  //       () => {
  //         setCurrNews(props.news);
  //       },
  //       4000,
  //       console.log(currNews)
  //   Array.from(currNews)
  //   setTheNews(Array.from(currNews))
  //     );
  //   }, [currNews, props.news, setTheNews]);

  //   console.log(props.newsItemData);

  return (
    <Box>
      {/* {currNews?.map((post) => {
        return <NewsPost post={post} />;
      })} */}
    </Box>
  );
};

export default NewsList;
