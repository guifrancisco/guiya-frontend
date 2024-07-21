import React from "react";
import { Button, colors, Typography } from "@mui/material";
import { FileDownloadOutlined } from "@mui/icons-material";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const ExportButton = ({ data, columns, filename }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleExportClick = () => {
    const csvData = [
      columns.map((col) => col.headerName).join(","),
      ...data.map((row) => columns.map((col) => row[col.field]).join(",")),
    ].join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `${filename}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      sx={{
        p: "9px 20px",
        backgroundColor: colors.primary[900],
        "&:hover": { 
          backgroundColor: colors.primary[800],
        },
      }}
      onClick={handleExportClick}
      startIcon={<FileDownloadOutlined />}
    >
      <Typography variant="h6" fontWeight="600">
        Exportar
      </Typography>
    </Button>
  );
};

export default ExportButton;
