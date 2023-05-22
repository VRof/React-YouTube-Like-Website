import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handle}
      sx={{
        borderRadius: 20,
        border: "3px solid MediumOrchid",
        pl: 2,
        boxShadow: "none",
        mr: "42.3%",
        backgroundColor: "darkorchid",
      }}
    >
      <input
        className="search-bar"
        placeholder="I'm looking for..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "gold" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
