import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
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

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Title title={"GUIYA | Dashboard"}></Title>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />

        {/* report to be implemented in the future */}
        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.primary[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Baixar Relatórios
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="Faturamento"
            subtitle="R$19.240.300"
            increase="+14%"
            icon={
              <MonetizationOnIcon
                sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="Total de Vendas"
            subtitle="356"
            progress="0.50"
            increase="+21%"
            icon={
              <OfflineBoltRoundedIcon
                sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="Novos Clientes"
            subtitle="2.432"
            progress="0.30"
            increase="+5%"
            icon={
              <AccountCircleRoundedIcon
                sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="Pedidos Ativos"
            subtitle="20"
            progress="0.80"
            increase="+43%"
            icon={
              <CircleNotificationsRoundedIcon
                sx={{ color: colors.blueAccent[500], fontSize: "80px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 7"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="8px"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color={colors.primary[800]}
            sx={{ padding: "65px 30px 0 380px" }}
          >
            Em Construção
          </Typography>
          <ConstructionIcon
            sx={{
              color: colors.primary[800],
              fontSize: "80px",
              marginLeft: "400px",
              marginTop: "20px",
            }}
          />
          {/* dashboard to be implemented in the future */}
          {/* <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Receita Gerada
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.primary[100]}
              >
                $1,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.blueAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box> */}
        </Box>
        <Box
          gridColumn="span 5"
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
            colors={colors.grey[100]}
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
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[900]}`}
                p="15px"
                flexShrink={0}
              >
                <Box flexBasis="20%">
                  <Typography
                    color={colors.blueAccent[500]}
                    variant="h5"
                    fontWeight="700"
                    paddingLeft="10px"
                  >
                    {transaction.txId}
                  </Typography>
                </Box>
                <Box flexBasis="20%">
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box flexBasis="20%" color={colors.grey[100]}>
                  {transaction.date}
                </Box>
                <Box
                  flexBasis="33%"
                  backgroundColor={backgroundColor}
                  p="5px 10px"
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

        {/* ROW 3 */}
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius="8px"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color={colors.primary[800]}
            sx={{ padding: "35px 30px 0 100px" }}
          >
            Em Construção
          </Typography>
          <ConstructionIcon
            sx={{
              color: colors.primary[800],
              fontSize: "80px",
              marginLeft: "120px",
              marginTop: "20px",
            }}
          />
          {/* dashboard to be implemented in the future */}
          {/* <Typography variant="h5" fontWeight="600">
            Progresso
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[400]}
              sx={{ mt: "15px" }}
            >
              $4,352 receita gerada
            </Typography>
            <Typography>Inclui despesas e custos extras diversos</Typography>
          </Box> */}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="8px"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color={colors.primary[800]}
            sx={{ padding: "65px 30px 0 200px" }}
          >
            Em Construção
          </Typography>
          <ConstructionIcon
            sx={{
              color: colors.primary[800],
              fontSize: "80px",
              marginLeft: "225px",
              marginTop: "20px",
            }}
          />
          {/* dashboard to be implemented in the future */}
          {/* <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Quantidade de Vendas
          </Typography> */}
          {/* <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
