import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigateBar from "./components/NavigateBar";
import FeedPage from "./components/FeedPage";
import VideoPage from "./components/VideoPage";
import ChannelPage from "./components/ChannelPage";
import SearchFeed from "./components/SearchFeed";

const App = () => (
  <div>
    <BrowserRouter>
      <Box>
        <NavigateBar />
        <Routes>
          <Route path="/" exact element={<FeedPage />} />
          <Route path="/video/:id" element={<VideoPage />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </div>
);

export default App;
