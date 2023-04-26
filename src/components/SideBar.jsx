import { Stack } from "@mui/system";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SchoolIcon from "@mui/icons-material/School";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import CelebrationIcon from "@mui/icons-material/Celebration";

const category = [
  { name: "Fun", icon: <CelebrationIcon /> },
  { name: "Music", icon: <MusicVideoIcon /> },
  { name: "Gaming", icon: <VideogameAssetIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcasts", icon: <PodcastsIcon /> },
];

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {category.map((category) => (
      <button className="category-btn" key={category.name}>
        <span>{category.icon}</span> <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
