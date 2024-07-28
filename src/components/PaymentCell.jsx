import CreditCard from "@mui/icons-material/CreditCard";
import LocalAtm from "@mui/icons-material/LocalAtm";
import Pix from "@mui/icons-material/Pix";
import { Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const PaymentCell = ({ paymentType }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 auto"
      p="5px"
      display="flex"
      alignItems="center"
    >
    {paymentType === "crédito" && <CreditCard />}
    {paymentType === "débito" && <CreditCard />}
    {paymentType === "dinheiro" && <LocalAtm />}
    {paymentType === "pix" && <Pix />}
    <Typography color={colors.blueAccent[200]} sx={{ ml: "5px" }}>
        {paymentType}
    </Typography>
    </Box>
  );
};

export default PaymentCell;
