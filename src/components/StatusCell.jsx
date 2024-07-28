import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { getStatusColor, tokens } from "../theme";

const StatusCell = ({ status }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 auto"
      p="5px"
      display="flex"
      alignItems="center"
      color={getStatusColor(status, colors)}
    >
      {status === "Em Processamento" && <RadioButtonUncheckedIcon />}
      {status === "Aguardando Pagamento" && <PendingOutlinedIcon />}
      {status === "Pagamento Confirmado" && <RadioButtonCheckedOutlinedIcon />}
      {status === "Aguardando Entrega" && <ArrowCircleRightOutlinedIcon />}
      {status === "Aguardando Retirada" && <ArrowCircleUpOutlinedIcon />}
      {status === "Cancelado" && <HighlightOffOutlinedIcon />}
      {status === "Entregue" && <TaskAltOutlinedIcon />}
      <Typography sx={{ ml: "5px" }} fontWeight="600">
        {status}
      </Typography>
    </Box>
  );
};

export default StatusCell;
