import React, { useState, useMemo, useCallback } from "react";
import { Box, Typography, useTheme, Button, Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { tokens } from "../../theme";
import { mockDataOrders } from "../../data/mockData";
import Header from "../../components/Header";
import Title from "../../components/Title";
import SearchFilter from "../../components/SearchFilter";
import avatarMap from "../../utils/avatarMap";
import GridHeader from "../../components/GridHeader";
import StatusCell from "../../components/StatusCell";
import ActionMenu from "../../components/ActionMenu";
import ActionCell from "../../components/ActionCell";
import StatusFilterSelect from "../../components/StatusFilterSelect";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleStatusChange = useCallback((event) => {
    setStatusFilter(event.target.value);
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

        const matchesStatus = statusFilter
          ? order.status === statusFilter
          : true;

        return matchesCustomerName && matchesStatus;
      }),
    [searchTerm, statusFilter]
  );

  const columns = useMemo(
    () => [
      {
        field: "orderId",
        headerName: "Order ID",
        flex: 0.6,
        renderHeader: () => <GridHeader title="Order ID" />,
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
        renderHeader: () => <GridHeader title="Cliente" />,
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
        renderHeader: () => <GridHeader title="Criado por" />,
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
        renderHeader: () => <GridHeader title="Data do Pedido" />,
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
        renderHeader: () => <GridHeader title="Data de Entrega" />,
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
        renderHeader: () => <GridHeader title="Status" />,
        renderCell: (params) => <StatusCell status={params.value} />,
      },
      {
        field: "paymentType",
        headerName: "Tipo de Pagamento",
        flex: 0.8,
        renderHeader: () => <GridHeader title="Tipo de Pagamento" />,
        renderCell: (params) => <StatusCell status={params.value}/>,
      },
      {
        field: "cost",
        headerName: "Valor",
        flex: 0.5,
        renderHeader: () => <GridHeader title="Valor" />,
        renderCell: (params) => (
          <Typography variant="h5" fontWeight={600}>R$ {params.row.cost.toFixed(2)}</Typography>
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
        renderCell: (params) => (
          <ActionCell
            params={params.row.orderId}
            handleMenuOpen={handleMenuOpen}
          />
        ),
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
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          colors={colors}
        />
        <Box sx={{ width: 20 }} />
        <StatusFilterSelect
          value={statusFilter}
          onChange={handleStatusChange}
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
        <ActionMenu
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default Orders;
