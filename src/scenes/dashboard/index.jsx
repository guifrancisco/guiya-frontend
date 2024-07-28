import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ConstructionBox from "../../components/ConstructionBox";
import StatBoxItem from "../../components/StatBoxItem";
import OrderList from "../../components/OrderList";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";

const useResponsiveBreakpoints = () => {
  const theme = useTheme();
  return {
    isExtraSmall: useMediaQuery(theme.breakpoints.down("sm")),
    isSmall: useMediaQuery(theme.breakpoints.between("sm", "md")),
    isMedium: useMediaQuery(theme.breakpoints.between("md", "lg")),
    isLarge: useMediaQuery(theme.breakpoints.between("lg", "xl")),
    isExtraLarge: useMediaQuery(theme.breakpoints.up("xl")),
  };
};

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge } =
    useResponsiveBreakpoints();

  const gridColumnForStatBox = isExtraSmall
    ? "span 12"
    : isSmall
    ? "span 12"
    : "span 3";

  return (
    <Box m="20px">
      <Title title="Jogui | Dashboard" />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <StatBoxItem
          title="Faturamento"
          subtitle="R$19.240"
          increase="+14%"
          icon={
            <MonetizationOnIcon
              sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
            />
          }
          gridColumn={gridColumnForStatBox}
        />
        <StatBoxItem
          title="Vendas"
          subtitle="356"
          increase="+21%"
          icon={
            <OfflineBoltRoundedIcon
              sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
            />
          }
          gridColumn={gridColumnForStatBox}
        />
        <StatBoxItem
          title="Novos Clientes"
          subtitle="2.432"
          increase="+5%"
          icon={
            <AccountCircleRoundedIcon
              sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
            />
          }
          gridColumn={gridColumnForStatBox}
        />
        <StatBoxItem
          title="Pedidos Ativos"
          subtitle="20"
          increase="+43%"
          icon={
            <CircleNotificationsRoundedIcon
              sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
            />
          }
          gridColumn={gridColumnForStatBox}
        />

        <ConstructionBox
          gridColumn={isExtraSmall || isSmall || isMedium ? "span 12" : "span 7"}
          gridRow="span 2"
        />
        <OrderList
          isExtraSmall={isExtraSmall}
          isSmall={isSmall}
          isMedium={isMedium}
          isLarge={isLarge}
          isExtraLarge={isExtraLarge}
        />
        <ConstructionBox
          gridColumn={isExtraSmall || isSmall || isMedium ? "span 12" : "span 3"}
          gridRow="span 2"
        />
        <ConstructionBox
          gridColumn={isExtraSmall || isSmall || isMedium ? "span 12" : "span 4"}
          gridRow="span 2"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
