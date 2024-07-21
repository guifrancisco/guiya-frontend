import React, { useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Button,
  InputBase,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataUsers } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import GppBadIcon from "@mui/icons-material/GppBad";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Header from "../../components/Header";
import Title from "../../components/Title";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FileDownloadOutlined, SearchOutlined } from "@mui/icons-material";
import ExportButton from "../../components/ExportButton";
import SearchFilter from "../../components/SearchFilter";

const renderHeader = (title, colors) => (
  <Typography variant="h5" fontWeight="bold" color={colors.primary[200]}>
    {title}
  </Typography>
);

const renderStatusCell = ({ row: { status } }, colors) => (
  <Box
    width="60%"
    m="0 auto"
    p="5px"
    display="flex"
    justifyContent="center"
    backgroundColor={
      status === "ativo"
        ? colors.greenAccent[600]
        : status === "suspenso"
        ? colors.yellowAccent[600]
        : colors.redAccent[600]
    }
    borderRadius="4px"
  >
    {status === "ativo" && <AssignmentIndIcon />}
    {status === "suspenso" && <PersonOffIcon />}
    {status === "bloqueado" && <GppBadIcon />}
    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
      {status}
    </Typography>
  </Box>
);

const renderAccessCell = ({ row: { access } }, colors) => (
  <Box width="100%" m="0 auto" p="5px" display="flex" justifyContent="left">
    {access === "moderador" && <AdminPanelSettingsOutlinedIcon />}
    {access === "membro" && <PersonOutlineIcon />}
    <Typography color={colors.blueAccent[200]} sx={{ ml: "5px" }}>
      {access}
    </Typography>
  </Box>
);

const renderActionCell = (params, colors) => (
  <Box display="flex" justifyContent="space-between" width="80%">
    <IconButton
      sx={{ color: colors.primary[500] }}
      onClick={() => console.log("Editar", params.row.id)}
    >
      <EditIcon />
    </IconButton>
    <IconButton
      color="error"
      onClick={() => console.log("Deletar", params.row.id)}
    >
      <DeleteIcon />
    </IconButton>
  </Box>
);

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleFilterChange = useCallback((event) => {
    setFilterStatus(event.target.value);
  }, []);

  const filteredData = useMemo(() => 
    mockDataUsers.filter((user) => {
      const matchesName = user.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus ? user.status === filterStatus : true;
      return matchesName && matchesStatus;
    }), [searchTerm, filterStatus]);

  const columns = useMemo(() => [
    {
      field: "name",
      flex: 1,
      renderHeader: () => renderHeader("Nome Completo", colors),
      renderCell: (params) => (
        <Typography variant="h5" color={colors.primary[200]}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "phone",
      flex: 0.7,
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
      flex: 0.7,
      renderHeader: () => renderHeader("E-mail", colors),
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
      renderCell: (params) => renderStatusCell(params, colors),
    },
    {
      field: "access",
      headerName: "Nível de Acesso",
      flex: 0.6,
      renderHeader: () => renderHeader("Nível de Acesso", colors),
      renderCell: (params) => renderAccessCell(params, colors),
    },
    {
      field: "lastAccess",
      headerName: "Último Acesso",
      flex: 0.6,
      renderHeader: () => renderHeader("Último Acesso", colors),
      renderCell: (params) => (
        <Typography variant="h5" color={colors.primary[200]}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Ações",
      flex: 0.5,
      renderHeader: () => renderHeader("Ações", colors),
      renderCell: (params) => renderActionCell(params, colors),
    },
  ], [colors]);

  return (
    <Box m="20px">
      <Title title={"Jogui | Gerenciar Usuários"} />
      <Box alignItems="center">
        <Header title="Gerenciar Usuários" subtitle="Gerenciar Usuários" />
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
            { field: "name", headerName: "Nome Completo" },
            { field: "phone", headerName: "Telefone" },
            { field: "email", headerName: "E-mail" },
            { field: "status", headerName: "Status" },
            { field: "access", headerName: "Nível de Acesso" },
            { field: "lastAccess", headerName: "Último Acesso" },
          ]}
          filename="usuarios-danju"
        />
        <Box sx={{ width: 20 }} />
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          filterStatus={filterStatus}
          onFilterChange={handleFilterChange}
          colors={colors}
        />
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
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
        }}
      >
        <DataGrid rows={filteredData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Users;
