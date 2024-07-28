import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import { Typography } from "@mui/material";

const GridHeader = ({title}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Typography variant="h5" fontWeight="bold" color={colors.primary[200]}>
      {title}
    </Typography>
  );
};

export default GridHeader;
