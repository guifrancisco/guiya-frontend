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
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
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
import { MoreVertOutlined } from "@mui/icons-material";
import ExportButton from "../../components/ExportButton";
import SearchFilter from "../../components/SearchFilter";
import avatarMap from "../../utils/avatarMap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
        field: "firstName",
        flex: 0.5,
        renderHeader: () => renderHeader("Nome", colors),
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
        renderHeader: () => renderHeader("Sobrenome", colors),
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
        flex: 0.5,
        renderHeader: () => renderHeader("Nível de Acesso", colors),
        renderCell: (params) => renderAccessCell(params, colors),
      },
      {
        field: "lastAccess",
        headerName: "Último Acesso",
        flex: 0.5,
        renderHeader: () => renderHeader("Último Acesso", colors),
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

export default Users;
