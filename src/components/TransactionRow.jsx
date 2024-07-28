import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens, getStatusColor } from "../theme";

const TransactionRow = ({ transaction, isExtraSmall, isLarge, isMedium, isSmall, isExtraLarge }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const backgroundColor = getStatusColor(transaction.status, theme.palette.mode);

  return (
    <Box
      key={transaction.txId}
      display="flex"
      flexDirection={isExtraSmall || isLarge ? "column" : "row"}
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
          #{transaction.txId}
        </Typography>
      </Box>
      <Box flexBasis={isExtraSmall ? "100%" : "20%"}>
        <Typography color={colors.grey[100]}>{transaction.user}</Typography>
      </Box>
      <Box
        flexBasis="20%"
        color={colors.grey[100]}
        mb={isExtraLarge || isMedium || isSmall ? 0 : "10px"}
      >
        {transaction.date}
      </Box>
      <Box
        flexBasis="40%"
        backgroundColor={backgroundColor}
        fontWeight={600}
        color={"white"}
        p="5px 10px"
        mb={isExtraLarge || isMedium || isSmall ? 0 : "10px"}
        borderRadius="4px"
        textAlign="center"
      >
        {transaction.status}
      </Box>
      <Box
        flexBasis="20%"
        backgroundColor={colors.blueAccent[600]}
        color={"white"}
        fontWeight={600}
        p="5px 10px"
        ml="10px"
        borderRadius="4px"
        textAlign="center"
      >
        R${transaction.cost}
      </Box>
    </Box>
  );
};

export default TransactionRow;
