import { Box } from "@mui/system";
import { useParams } from "react-router";

const VideoPage = () => {
  const { id } = useParams();
  const opts = {
    height: "480",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <Box minHeight="96vh">
      <YouTube videoId={id} opts={opts} />
    </Box>
  );
};

export default VideoPage;
