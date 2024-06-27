import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        {icon}
        <Box ml="10px" mb="10px">
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.primary[800] }}
          >
            {title}
          </Typography>
          <Box pt="10px">
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ color: colors.primary[200] }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="10px">
            <Typography
              variant="h5"
              fontStyle="italic"
              fontWeight="bold"
              sx={{ color: colors.greenAccent[400] }}
            >
              <Box fontSize="18px">{increase}</Box>
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              fontSize="18px"
              pl="17px"
              sx={{ color: colors.primary[800] }}
            >
              Vs. mês anterior
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
