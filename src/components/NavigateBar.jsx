import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../utils/logo.jpg";
import SearchBar from "./SearchBar";

const NavigateBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={Logo} alt="logo" width={60} />
    </Link>
    <SearchBar />
  </Stack>
);

export default NavigateBar;
