import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRapidApi from "../utils/fetchRapidApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { style } from "@mui/system";

const ChannelPage = () => {
  const [chanDetails, setChanDetails] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetchRapidApi(`channels?part=snippet&id=${id}`).then(
      (data) => setChanDetails(data?.items[0]) //channel picture
    );
  });
  console.log(chanDetails);
  useEffect(() => {
    fetchRapidApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items) //channel picture
    );
  }, [id]);

  return (
    <Box minHeight="96vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(31,0,74,1) 0%, rgba(129,0,111,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard details={chanDetails} margin="-120px" />
      </Box>
      <Box
        display="flex"
        p="2"
        justifyContent="center"
        sx={{ ml: { md: "8%" } }}
      >
        <Box sx={{ mr: { sm: "100px" }, alignItems: "center" }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelPage;
