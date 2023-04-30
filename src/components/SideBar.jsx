import { Stack } from "@mui/system";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SchoolIcon from "@mui/icons-material/School";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Typography } from "@mui/material";
import SportsIcon from "@mui/icons-material/Sports";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Link } from "react-router-dom";

const category = [
  { name: "Fun", icon: <CelebrationIcon /> },
  { name: "Music", icon: <MusicVideoIcon /> },
  { name: "Gaming", icon: <VideogameAssetIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcasts", icon: <PodcastsIcon /> },
  { name: "Sport", icon: <SportsIcon /> },
  { name: "Coding", icon: <TerminalIcon /> },
];

const SideBar = ({ selected, setSelected }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "100%" },
      flexDirection: { md: "column" },
    }}
  >
    {category.map((category) => (
      <button
        className="category-btn"
        key={category.name}
        style={{
          background: category.name === selected && "#a40086",
          color: category.name === selected && "rgb(255, 183, 0)",
        }}
        onClick={() => setSelected(category.name)}
      >
        <span style={{ marginRight: 10 }}>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
    <Typography
      variant="subtitle1"
      fontWeight="bold"
      fontSize="15px"
      color="yellow"
      sx={{ mt: "auto" }}
    >
      created by Vitaly Rofman
    </Typography>
    <Link to="https://www.linkedin.com/in/vitaly-rofman/">
      <Typography
        variant="subtitle2"
        fontWeight="bold"
        fontSize="18px"
        color="gold"
        ml="25%"
      >
        contact me
      </Typography>
    </Link>
  </Stack>
);

export default SideBar;
