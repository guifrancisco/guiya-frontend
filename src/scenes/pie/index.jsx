import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Title from "../../components/Title";

const Pie = () => {
  return (
    <Box m="20px">
      <Title title={"GUIYA | Fidelização de Clientes"}></Title>
      <Header title="Fidelização de Clientes" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
