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
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import GppBadIcon from "@mui/icons-material/GppBad";
import { AdminPanelSettings } from "@mui/icons-material";
import PersonOutline from "@mui/icons-material/PersonOutline";
import CreditCard from "@mui/icons-material/CreditCard";
import LocalAtm from "@mui/icons-material/LocalAtm";
import Pix from "@mui/icons-material/Pix";

const StatusCell = ({ status, withBackground }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const iconMapping = {
    "Em Processamento": <RadioButtonUncheckedIcon />,
    "Aguardando Pagamento": <PendingOutlinedIcon />,
    "Pagamento Confirmado": <RadioButtonCheckedOutlinedIcon />,
    "Aguardando Entrega": <ArrowCircleRightOutlinedIcon />,
    "Aguardando Retirada": <ArrowCircleUpOutlinedIcon />,
    "Cancelado": <HighlightOffOutlinedIcon />,
    "Entregue": <TaskAltOutlinedIcon />,
    "Ativo": <AssignmentIndIcon />,
    "Suspenso": <PersonOffIcon />,
    "Bloqueado": <GppBadIcon />,
    "Moderador": <AdminPanelSettings />,
    "Membro": <PersonOutline />,
    "Crédito": <CreditCard />,
    "Débito": <CreditCard />,
    "Dinheiro": <LocalAtm />,
    "Pix": <Pix />
  };

  const backgroundColor = () => {
    if (status === "Ativo") return colors.greenAccent[600];
    if (status === "Suspenso") return colors.yellowAccent[600];
    return colors.redAccent[600];
  };

  return (
    <Box
      width={withBackground ? "60%" : "100%"}
      m="0 auto"
      p="5px"
      display="flex"
      justifyContent={withBackground ? "center" : "flex-start"}
      alignItems="center"
      color={getStatusColor(status, colors)}
      backgroundColor={withBackground ? backgroundColor() : "transparent"}
      borderRadius={withBackground ? "4px" : "0"}
    >
      {iconMapping[status]}
      <Typography color={withBackground ? colors.grey[100] : "inherit"} sx={{ ml: "5px" }} fontWeight="600">
        {status}
      </Typography>
    </Box>
  );
};

export default StatusCell;
