import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Box, IconButton } from "@mui/material";
import { MoreVertOutlined } from "@mui/icons-material";

const ActionCell = ({ id, handleMenuOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between">
      <IconButton
        sx={{ color: colors.primary[700] }}
        onClick={(event) => handleMenuOpen(event, id)}
      >
        <MoreVertOutlined />
      </IconButton>
    </Box>
  );
};

export default ActionCell;
