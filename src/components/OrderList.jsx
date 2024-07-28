import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import TransactionRow from "./TransactionRow";
import { mockTransactions } from "../data/mockData";

const OrderList = ({ isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn={isExtraSmall || isSmall || isMedium ? "span 12" : "span 5"}
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
      {mockTransactions.map((transaction, i) => (
        <TransactionRow
          key={`${transaction.txId}-${i}`}
          transaction={transaction}
          isExtraSmall={isExtraSmall}
          isSmall={isSmall}
          isMedium={isMedium}
          isLarge={isLarge}
          isExtraLarge={isExtraLarge}
        />
      ))}
    </Box>
  );
};

export default OrderList;
