import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Title from "../../components/Title";

const Line = () => {
  return (
    <Box m="20px">
      <Title title={"JOGUI | Itens Vendidos"}></Title>
      <Header title="Itens Vendidos" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
