import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => (
  <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={4}>
    {videos.map((item, index) => (
      <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
    ))}
  </Stack>
);

export default Videos;
