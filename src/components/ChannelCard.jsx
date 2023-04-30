import { Box, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ details, margin }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "360px", md: "320px" },
        height: { xs: "360px", md: "320px" },
        margin: "auto",
        marginTop: margin,
      }}
    >
      <Link to={`/channel/${details?.id?.channelId || details?.id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={details?.snippet?.thumbnails?.high?.url}
            alt={details?.snippet?.title}
            sx={{ borderRadius: "50%", height: "200px", mb: 2 }}
          ></CardMedia>
          <Typography variant="h6" color="#FFF3CD">
            {details?.snippet?.title}
          </Typography>
          {details?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" color="#FF6F00">
              {parseInt(details?.statistics?.subscriberCount).toLocaleString() +
                " "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
