import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import fetchRapidApi from "../utils/fetchRapidApi";
import Videos from "./Videos";

const FeedPage = () => {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchRapidApi(`search?part=snippet&q=${selected}`).then((data) => {
      setVideos(data.items);
    });
  }, [selected]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "87vh" },
          borderRight: "1px solid #3d103b",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selected={selected} setSelected={setSelected} />
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "86vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          style={{ color: "DodgerBlue" }}
        >
          {selected}
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default FeedPage;
