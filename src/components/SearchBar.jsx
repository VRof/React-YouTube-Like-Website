import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "3px solid MediumOrchid",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
      backgroundColor: "darkorchid",
    }}
  >
    <input
      className="search-bar"
      placeholder="I'm looking for..."
      value=""
      onChange={() => {}}
    />
    <IconButton type="submit" sx={{ p: "10px", color: "gold" }}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
