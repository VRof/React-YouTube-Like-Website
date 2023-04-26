import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const FeedPage = () => (
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box
      sx={{
        height: { sx: "auto", md: "100vh" },
        borderRight: "1px solid #3d103b",
        px: { sx: 0, md: 2 },
      }}
    >
      <SideBar />
    </Box>
  </Stack>
);
export default FeedPage;
