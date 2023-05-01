import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../utils/logo.png";
import SearchBar from "./SearchBar";

const NavigateBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      background: "rgb(25, 0, 42)",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img className="home-btn" src={Logo} alt="logo" />
    </Link>
    <SearchBar />
  </Stack>
);

export default NavigateBar;
