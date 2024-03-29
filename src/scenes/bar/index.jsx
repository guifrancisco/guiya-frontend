import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Title from "../../components/Title";

const Bar = () => {
  return (
    <Box m="20px">
      <Title title={"GUIYA | Frequência de Vendas"}></Title>
      <Header title="Frequência de Vendas" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
