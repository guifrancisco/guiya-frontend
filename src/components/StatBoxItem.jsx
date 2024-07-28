import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import StatBox from "./StatBox";

const StatBoxItem = ({ title, subtitle, increase, icon, gridColumn }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={gridColumn}
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="8px"
    >
      <StatBox
        title={title}
        subtitle={subtitle}
        increase={increase}
        icon={icon}
      />
    </Box>
  );
};

export default StatBoxItem;
