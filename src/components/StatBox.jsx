import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";

const useResponsiveBreakpoints = () => {
  const theme = useTheme();
  return {
    isExtraSmall: useMediaQuery(theme.breakpoints.down("sm")),
    isSmall: useMediaQuery(theme.breakpoints.between("sm", "md")),
    isMedium: useMediaQuery(theme.breakpoints.between("md", "lg")),
    isLarge: useMediaQuery(theme.breakpoints.between("lg", "xl")),
  };
};

const StatBox = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const breakpoints = useResponsiveBreakpoints();
  const { isExtraSmall, isSmall, isMedium, isLarge } = breakpoints;

  return (
    <Box width="100%" m="0 30px">
      <Box
        display="flex"
        flexDirection={isMedium ? "column" : "row"}
        justifyContent={isSmall || isMedium ? "center" : "flex-start"}
        alignItems="center"
      >
        {icon}
        <Box
          ml={isMedium ? 0 : "10px"}
          mb={isMedium ? "50px" : "10px"}
          textAlign={isMedium ? "center" : "left"}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.primary[800], whiteSpace: "nowrap" }}
          >
            {title}
          </Typography>
          <Box pt="10px">
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ color: colors.primary[200], whiteSpace: "nowrap" }}
            >
              {subtitle}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={isMedium ? "column" : "row"}
            justifyContent="space-between"
            mt="10px"
          >
            <Typography
              variant="h4"
              fontStyle="italic"
              fontWeight="bold"
              sx={{ color: colors.greenAccent[400] }}
            >
              {increase}
            </Typography>
            {!isExtraSmall && !isLarge && !isMedium && (
              <Typography
                variant="h4"
                fontWeight="bold"
                pl="17px"
                sx={{ color: colors.primary[800], whiteSpace: "nowrap" }}
              >
                Vs. mês anterior
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
