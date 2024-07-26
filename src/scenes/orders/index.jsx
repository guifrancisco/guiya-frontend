import React, { useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Avatar,
  colors,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getStatusColor, tokens } from "../../theme";
import { mockDataOrders } from "../../data/mockData";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { MoreVertOutlined } from "@mui/icons-material";
import ExportButton from "../../components/ExportButton";
import SearchFilter from "../../components/SearchFilter";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import avatarMap from "../../utils/avatarMap";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PixIcon from "@mui/icons-material/Pix";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

const renderHeader = (title, colors) => (
  <Typography variant="h5" fontWeight="bold" color={colors.primary[200]}>
    {title}
  </Typography>
);

const renderStatusCell = ({ row: { status } }, colors, theme) => (
  <Box 
    width="100%" 
    m="0 auto" 
    p="5px" 
    display="flex" 
    alignItems="center"
    color = {getStatusColor(status, theme)}
    >
    {status === "Em Processamento" && <RadioButtonUncheckedIcon />}
    {status === "Aguardando Pagamento" && <PendingOutlinedIcon />}
    {status === "Pagamento Confirmado" && <RadioButtonCheckedOutlinedIcon />}
    {status === "Aguardando Entrega" && <ArrowCircleRightOutlinedIcon/>}
    {status === "Aguardando Retirada" && <ArrowCircleUpOutlinedIcon/>}
    {status === "Cancelado" && <HighlightOffOutlinedIcon/>}
    {status === "Entregue" && <TaskAltOutlinedIcon/>}

    <Typography
      sx={{ ml: "5px" }}
      fontWeight="600"
    >
      {status}
    </Typography>
  </Box>
);

const renderPaymentCell = ({ row: { paymentType } }, colors) => (
  <Box width="100%" m="0 auto" p="5px" display="flex" alignItems="center">
    {paymentType === "crédito" && <CreditCardIcon />}
    {paymentType === "débito" && <CreditCardIcon />}
    {paymentType === "dinheiro" && <LocalAtmIcon />}
    {paymentType === "pix" && <PixIcon />}
    <Typography color={colors.blueAccent[200]} sx={{ ml: "5px" }}>
      {paymentType}
    </Typography>
  </Box>
);

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleMenuOpen = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleEdit = () => {
    console.log("Edit order", selectedOrderId);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log("Delete order", selectedOrderId);
    handleMenuClose();
  };

  const filteredData = useMemo(
    () =>
      mockDataOrders.filter((order) => {
        const matchesCustomerName =
          `${order.customer.firstName} ${order.customer.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesCustomerName;
      }),
    [searchTerm]
  );

  const renderActionCell = (params, colors) => (
    <Box display="flex" justifyContent="space-between">
      <IconButton
        sx={{ color: colors.primary[700] }}
        onClick={(event) => handleMenuOpen(event, params.row.orderId)}
      >
        <MoreVertOutlined />
      </IconButton>
    </Box>
  );

  const columns = useMemo(
    () => [
      {
        field: "orderId",
        headerName: "Order ID",
        flex: 0.6,
        renderHeader: () => renderHeader("Order ID", colors),
        renderCell: (params) => (
          <Typography
            variant="h5"
            fontWeight={700}
            color={colors.blueAccent[600]}
          >
            #{params.value}
          </Typography>
        ),
      },
      {
        field: "customerName",
        headerName: "Cliente",
        flex: 1,
        renderHeader: () => renderHeader("Cliente", colors),
        valueGetter: (params) =>
          `${params.row.customer.firstName} ${params.row.customer.lastName}`,
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "createdBy",
        headerName: "Criado por",
        flex: 1,
        renderHeader: () => renderHeader("Criado por", colors),
        valueGetter: (params) => params.row.createdBy.firstName,
        renderCell: (params) => (
          <Box display="flex" alignItems="center">
            <Avatar src={avatarMap[params.row.createdBy.avatar]} />
            <Typography variant="h5" color={colors.primary[200]} sx={{ ml: 2 }}>
              {params.value}
            </Typography>
          </Box>
        ),
      },
      {
        field: "orderDate",
        headerName: "Data do Pedido",
        flex: 0.7,
        renderHeader: () => renderHeader("Data do Pedido", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "deliveryDate",
        headerName: "Data de Entrega",
        flex: 0.7,
        renderHeader: () => renderHeader("Data de Entrega", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderHeader: () => renderHeader("Status", colors),
        renderCell: (params) =>
          renderStatusCell(params, colors, theme.palette.mode),
      },
      {
        field: "paymentType",
        headerName: "Tipo de Pagamento",
        flex: 0.8,
        renderHeader: () => renderHeader("Tipo de Pagamento", colors),
        renderCell: (params) => renderPaymentCell(params, colors),
      },
      {
        field: "cost",
        headerName: "Valor",
        flex: 0.5,
        renderHeader: () => renderHeader("Valor", colors),
        renderCell: (params) => (
          <Typography variant="h5">R$ {params.row.cost}</Typography>
        ),
      },
      {
        field: "actions",
        headerName: "",
        flex: 0.3,
        disableColumnMenu: true,
        sortable: false,
        filterable: false,
        renderHeader: () => null,
        renderCell: (params) => renderActionCell(params, colors),
      },
    ],
    [colors]
  );

  return (
    <Box m="20px">
      <Title title={"Jogui | Pedidos"} />
      <Box alignItems="center">
        <Header title="Pedidos" subtitle="List of Invoice Balances" />
      </Box>
      <Box display="flex" alignItems="center" mb="20px">
        <Button
          sx={{
            p: "9px 20px",
            color: colors.primary[500],
            backgroundColor: colors.blueAccent[600],
            "&:hover": {
              backgroundColor: colors.blueAccent[800],
            },
          }}
          onClick={() => console.log("Adicionar")}
          startIcon={<AddCircleIcon sx={{ color: "white" }} />}
        >
          <Typography variant="h6" fontWeight="bold" color={"white"}>
            Novo pedido
          </Typography>
        </Button>
        <Box sx={{ width: 20 }} />
        <ExportButton
          data={mockDataOrders}
          columns={[
            { field: "orderId", headerName: "Order ID" },
            {
              field: "customerName",
              headerName: "Customer Name",
              valueGetter: (params) =>
                `${params.row.customer.firstName} ${params.row.customer.lastName}`,
            },
            {
              field: "customerPhone",
              headerName: "Phone Number",
              valueGetter: (params) => params.row.customer.phone,
            },
            {
              field: "customerEmail",
              headerName: "Email",
              valueGetter: (params) => params.row.customer.email,
            },
            { field: "cost", headerName: "Cost" },
            { field: "orderDate", headerName: "Order Date" },
            { field: "deliveryDate", headerName: "Delivery Date" },
            { field: "status", headerName: "Status" },
            { field: "paymentType", headerName: "Payment Type" },
            { field: "orderDescription", headerName: "Description" },
          ]}
          filename="pedidos-danju"
        />
        <Box sx={{ width: 20 }} />
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          colors={colors}
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[900],
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={filteredData}
          columns={columns}
          getRowId={(row) => row.orderId}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEdit}>
            <EditIcon sx={{ mr: 1 }} />
            Editar
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <DeleteIcon sx={{ color: colors.redAccent[500], mr: 1 }} />
            <Typography sx={{ color: colors.redAccent[500] }}>
              Deletar
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Orders;
