import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { tokens } from "../theme";

const ConstructionBox = ({ gridColumn, gridRow }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={gridColumn}
      gridRow={gridRow}
      backgroundColor={colors.primary[400]}
      borderRadius="8px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color={colors.primary[800]}
        textAlign="center"
        mb={2}
      >
        Em Construção
      </Typography>
      <ConstructionIcon
        sx={{ color: colors.primary[800], fontSize: "80px" }}
      />
    </Box>
  );
};

export default ConstructionBox;
