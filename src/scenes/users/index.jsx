import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataUsers } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import GppBadIcon from "@mui/icons-material/GppBad";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Header from "../../components/Header";
import Title from "../../components/Title";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleCreateUser = () => {
    // Função para tratar a criação de um novo usuário
    console.log("Criar Novo Usuário");
  };

  const renderHeader = (title) => (
    <Typography variant="h5" fontWeight="bold" color={colors.primary[200]}>
      {title}
    </Typography>
  );

  const renderStatusCell = ({ row: { status } }) => (
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

  const renderAccessCell = ({ row: { access } }) => (
    <Box width="100%" m="0 auto" p="5px" display="flex" justifyContent="left">
      {access === "moderador" && <AdminPanelSettingsOutlinedIcon />}
      {access === "membro" && <PersonOutlineIcon />}
      <Typography color={colors.blueAccent[200]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );

  const renderActionCell = (params) => (
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

  const columns = [
    {
      field: "name",
      flex: 1,
      renderHeader: () => renderHeader("Nome Completo"),
      renderCell: (params) => (
        <Typography variant="h5" color={colors.primary[200]}>
          {params.value}
        </Typography>
      ),
    },
    {
      field: "phone",
      flex: 0.7,
      renderHeader: () => renderHeader("Telefone"),
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
      renderHeader: () => renderHeader("E-mail"),
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
      renderHeader: () => renderHeader("Status"),
      renderCell: renderStatusCell,
    },
    {
      field: "accessLevel",
      headerName: "Nível de Acesso",
      flex: 0.6,
      renderHeader: () => renderHeader("Nível de Acesso"),
      renderCell: renderAccessCell,
    },
    {
      field: "lastAccess",
      headerName: "Último Acesso",
      flex: 0.6,
      renderHeader: () => renderHeader("Último Acesso"),
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
      renderHeader: () => renderHeader("Ações"),
      renderCell: renderActionCell,
    },
  ];

  return (
    <Box m="20px">
      <Title title={"GUIYA | Gerenciar Usuários"} />
      <Header title="Gerenciar Usuários" subtitle="Gerenciar Usuários" />
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
        <DataGrid rows={mockDataUsers} columns={columns} />
      </Box>
    </Box>
  );
};

export default Users;
