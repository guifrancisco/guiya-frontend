import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Menu, MenuItem, Typography } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

const ActionMenu = ({
  anchorEl,
  handleMenuClose,
  handleEdit,
  handleDelete,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleEdit}>
        <Edit sx={{ mr: 1 }} />
        Editar
      </MenuItem>
      <MenuItem onClick={handleDelete}>
        <Delete sx={{ color: colors.redAccent[500], mr: 1 }} />
        <Typography sx={{ color: colors.redAccent[500] }}>Deletar</Typography>
      </MenuItem>
    </Menu>
  );
};

export default ActionMenu;
