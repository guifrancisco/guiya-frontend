import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const SearchFilter = ({ searchTerm, onSearchChange, colors }) => (
  <Box display="flex" alignItems="center">
    <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="3px"
      mr={2}
    >
      <InputBase
        sx={{ ml: 2, mr:5, flex: 1 }}
        placeholder="Procurar nome"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchOutlined />
      </IconButton>
    </Box>
  </Box>
);

export default SearchFilter;
