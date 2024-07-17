import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens, getStatusColor } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Title from "../../components/Title";
import ConstructionIcon from "@mui/icons-material/Construction";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";

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
      <Title title="JOGUI | Dashboard" />
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

        <Box
          gridColumn={
            isExtraSmall || isSmall || isMedium ? "span 12" : "span 7"
          }
          gridRow="span 2"
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
        <Box
          gridColumn={
            isExtraSmall || isSmall || isMedium ? "span 12" : "span 5"
          }
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[900]}`}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h4" fontWeight="600">
              Pedidos
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => {
            const backgroundColor = getStatusColor(
              transaction.status,
              theme.palette.mode
            );
            return (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                flexDirection={
                  isExtraSmall || isLarge ? "column" : "row"
                }
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[900]}`}
                p="15px"
              >
                <Box flexBasis="20%">
                  <Typography
                    color={colors.blueAccent[500]}
                    variant="h5"
                    fontWeight="700"
                    textAlign={isExtraSmall || isMedium || isSmall ? "center" : "left"}
                  >
                    {transaction.txId}
                  </Typography>
                </Box>
                <Box flexBasis={isExtraSmall ? "100%" : "20%"}>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box
                  flexBasis="20%"
                  color={colors.grey[100]}
                  mb={isExtraLarge || isMedium || isSmall ? 0 : "10px"}
                >
                  {transaction.date}
                </Box>
                <Box
                  flexBasis="33%"
                  backgroundColor={backgroundColor}
                  p="5px 10px"
                  mb={isExtraLarge || isMedium || isSmall ? 0 : "10px"}
                  borderRadius="4px"
                  textAlign="center"
                >
                  {transaction.status}
                </Box>
                <Box
                  flexBasis="20%"
                  backgroundColor={colors.blueAccent[700]}
                  p="5px 10px"
                  ml="10px"
                  borderRadius="4px"
                  textAlign="center"
                >
                  R${transaction.cost}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          gridColumn={
            isExtraSmall || isSmall || isMedium ? "span 12" : "span 3"
          }
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
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
        <Box
          gridColumn={
            isExtraSmall || isSmall || isMedium ? "span 12" : "span 4"
          }
          gridRow="span 2"
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
      </Box>
    </Box>
  );
};

export default Dashboard;
