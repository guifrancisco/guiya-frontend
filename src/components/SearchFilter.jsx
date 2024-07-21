import React from "react";
import { Box, InputBase, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const SearchFilter = ({ searchTerm, onSearchChange, filterStatus, onFilterChange, colors }) => (
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
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel>Status</InputLabel>
      <Select
        value={filterStatus}
        onChange={onFilterChange}
        displayEmpty
        label="Status"
      >
        <MenuItem value="">
          <em style={{ visibility: "hidden" }}>Todos</em>
        </MenuItem>
        <MenuItem value={"ativo"}>Ativo</MenuItem>
        <MenuItem value={"suspenso"}>Suspenso</MenuItem>
        <MenuItem value={"bloqueado"}>Bloqueado</MenuItem>
      </Select>
    </FormControl>
  </Box>
);

export default SearchFilter;
