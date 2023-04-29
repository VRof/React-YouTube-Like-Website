import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function VideoCard(video) {
  console.log(video);
  const videoId = video.video.id.videoId;
  const snippet = video.video.snippet;
  console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 360, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#22124B", height: "90px" }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF3CD">
            {snippet?.title.slice(0, 120)}
          </Typography>
          <Link to={`/channel/${snippet.channelId}}`}>
            <Typography variant="subtitle2" fontWeight="bold" color="#FF6F00">
              {snippet?.channelTitle}
            </Typography>
          </Link>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;