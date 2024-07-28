import React, { useState, useMemo, useCallback } from "react";
import { Box, Typography, useTheme, Button, Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataUsers } from "../../data/mockData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Header from "../../components/Header";
import Title from "../../components/Title";
import ExportButton from "../../components/ExportButton";
import SearchFilter from "../../components/SearchFilter";
import avatarMap from "../../utils/avatarMap";
import ActionMenu from "../../components/ActionMenu";
import ActionCell from "../../components/ActionCell";
import GridHeader from "../../components/GridHeader";
import StatusCell from "../../components/StatusCell";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleMenuOpen = (event, userId) => {
    setAnchorEl(event.currentTarget);
    setSelectedUserId(userId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUserId(null);
  };

  const handleEdit = () => {
    console.log("Edit user", selectedUserId);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log("Delete user", selectedUserId);
    handleMenuClose();
  };

  const filteredData = useMemo(
    () =>
      mockDataUsers.filter((user) => {
        const matchesName = user.firstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesLastName = user.lastName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        return matchesName || matchesLastName;
      }),
    [searchTerm]
  );

  const columns = useMemo(
    () => [
      {
        field: "firstName",
        flex: 0.5,
        renderHeader: () => <GridHeader title="Nome" />,
        renderCell: (params) => (
          <Box display="flex" alignItems="center">
            <Avatar src={avatarMap[params.row.avatar]} />
            <Typography variant="h5" color={colors.primary[200]} sx={{ ml: 2 }}>
              {params.value}
            </Typography>
          </Box>
        ),
      },
      {
        field: "lastName",
        flex: 0.5,
        renderHeader: () => <GridHeader title="Sobrenome" />,
        renderCell: (params) => (
          <Box display="flex" alignItems="center">
            <Typography variant="h5" color={colors.primary[200]} sx={{ ml: 2 }}>
              {params.value}
            </Typography>
          </Box>
        ),
      },
      {
        field: "phone",
        flex: 0.5,
        renderHeader: () => <GridHeader title="Telefone" />,
        renderCell: (params) => (
          <Typography variant="h5" color={colors.primary[200]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "email",
        headerName: "Email",
        flex: 0.7,
        renderHeader: () => <GridHeader title="Email" />,
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
        renderCell: (params) => (
          <StatusCell status={params.value} withBackground={true} />
        ),
      },
      {
        field: "access",
        headerName: "Nível de Acesso",
        flex: 0.5,
        renderHeader: () => <GridHeader title="Nível de Acesso" />,
        renderCell: (params) => <StatusCell status={params.value} />,
      },
      {
        field: "lastAccess",
        headerName: "Último Acesso",
        flex: 0.5,
        renderHeader: () => <GridHeader title="Último Acesso" />,
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
      <Title title={"Jogui | Gerenciar Usuários"} />
      <Box alignItems="center">
        <Header title="Usuários" subtitle="Gerenciar Usuários" />
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
            Novo usuário
          </Typography>
        </Button>
        <Box sx={{ width: 20 }} />
        <ExportButton
          data={mockDataUsers}
          columns={[
            { field: "firstName", headerName: "Nome" },
            { field: "lastName", headerName: "Sobrenome" },
            { field: "phone", headerName: "Telefone" },
            { field: "email", headerName: "E-mail" },
            { field: "status", headerName: "Status" },
            { field: "access", headerName: "Nível de Acesso" },
          ]}
          filename="usuarios-danju"
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
        <DataGrid rows={filteredData} columns={columns} />
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

export default Users;
