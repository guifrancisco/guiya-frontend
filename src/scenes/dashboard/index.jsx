import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens, getStatusColor } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Title from "../../components/Title";
import ConstructionIcon from "@mui/icons-material/Construction";

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
            title="1,361"
            subtitle="Mensagens Enviadas"
            progress="0.75"
            increase="+14%"
            icon={
              <WhatsAppIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
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
            title="356"
            subtitle="Total de Vendas"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
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
            title="2,441"
            subtitle="Novos Clientes"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.blueAccent[400], fontSize: "26px" }}
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
            title="20"
            subtitle="Pedidos Ativos"
            progress="0.80"
            increase="+43%"
            icon={
              <ReceiptLongOutlinedIcon
                sx={{ color: colors.blueAccent[500], fontSize: "26px" }}
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
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
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
              >
                <Box>
                  <Typography
                    color={colors.blueAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                </Box>
                <Box>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={backgroundColor}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {transaction.status}
                </Box>
                <Box
                  backgroundColor={colors.blueAccent[700]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ${transaction.cost}
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
