import React, { useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataClients } from "../../data/mockData";
import Header from "../../components/Header";
import Title from "../../components/Title";
import {
  MoreVertOutlined,
  Edit as EditIcon,
  Delete as DeleteIcon,
  AddCircle as AddCircleIcon,
} from "@mui/icons-material";
import ExportButton from "../../components/ExportButton";
import SearchFilter from "../../components/SearchFilter";

const renderHeader = (title, colors) => (
  <Typography variant="h5" fontWeight="bold" color={colors.primary[200]}>
    {title}
  </Typography>
);

const Clients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedClientId, setSelectedClientId] = useState(null);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleMenuOpen = (event, clientId) => {
    setAnchorEl(event.currentTarget);
    setSelectedClientId(clientId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedClientId(null);
  };

  const handleEdit = () => {
    console.log("Edit client", selectedClientId);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log("Delete client", selectedClientId);
    handleMenuClose();
  };

  const filteredData = useMemo(
    () =>
      mockDataClients.filter((client) => {
        const matchesFirstName = client.firstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesLastName = client.lastName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return matchesFirstName || matchesLastName;
      }),
    [searchTerm]
  );

  const renderActionCell = (params, colors) => (
    <Box display="flex" justifyContent="space-between">
      <IconButton
        sx={{ color: colors.primary[700] }}
        onClick={(event) => handleMenuOpen(event, params.row.id)}
      >
        <MoreVertOutlined />
      </IconButton>
    </Box>
  );

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        flex: 0.3,
        renderHeader: () => renderHeader("ID", colors),
        renderCell: (params) => (
          <Typography
            fontWeight={600}
            variant="h5"
            color={colors.blueAccent[600]}
          >
            #{params.value}
          </Typography>
        ),
      },
      {
        field: "firstName",
        headerName: "Nome",
        flex: 0.5,
        renderHeader: () => renderHeader("Nome", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "lastName",
        headerName: "Sobrenome",
        flex: 0.5,
        renderHeader: () => renderHeader("Sobrenome", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "birthDate",
        headerName: "Data de Nascimento",
        flex: 0.7,
        renderHeader: () => renderHeader("Data de Nascimento", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "phone",
        headerName: "Telefone",
        flex: 0.5,
        renderHeader: () => renderHeader("Telefone", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        renderHeader: () => renderHeader("Email", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "address",
        headerName: "Endereço",
        flex: 1,
        renderHeader: () => renderHeader("Endereço", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "city",
        headerName: "Cidade",
        flex: 0.6,
        renderHeader: () => renderHeader("Cidade", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "zipCode",
        headerName: "CEP",
        flex: 0.4,
        renderHeader: () => renderHeader("CEP", colors),
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
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
      <Title title={"Jogui | Visualizar Clientes"} />
      <Header
        title="Clientes"
        subtitle="Lista de Clientes para Referência Futura"
      />
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
            Novo cliente
          </Typography>
        </Button>
        <Box sx={{ width: 20 }} />
        <ExportButton
          data={mockDataClients}
          columns={[
            { field: "id", headerName: "ID" },
            { field: "firstName", headerName: "Nome" },
            { field: "lastName", headerName: "Sobrenome" },
            { field: "birthDate", headerName: "Data de Nascimento" },
            { field: "phone", headerName: "Telefone" },
            { field: "email", headerName: "Email" },
            { field: "address", headerName: "Endereço" },
            { field: "city", headerName: "Cidade" },
            { field: "zipCode", headerName: "CEP" },
          ]}
          filename="clientes"
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
          }
        }}
      >
        <DataGrid checkboxSelection rows={filteredData} columns={columns} />
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

export default Clients;
