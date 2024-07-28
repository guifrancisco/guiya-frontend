import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { tokens } from "../theme";
import { useTheme } from '@emotion/react';

const StatusFilterSelect = ({ value, onChange }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <FormControl
      variant="filled"
      sx={{
        minWidth: 200,
        borderRadius: '50px',
        backgroundColor: colors.primary[900],
        '& .MuiFilledInput-root': {
          backgroundColor: colors.primary[900],
        },
      }}
    >
      <InputLabel sx={{ height: '15px', lineHeight: '10px' }}>Status</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label="Status"
        sx={{
          height: '40px',
          '.MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <MenuItem value="">
          <em>Todos</em>
        </MenuItem>
        <MenuItem value="Em Processamento">Em Processamento</MenuItem>
        <MenuItem value="Aguardando Pagamento">Aguardando Pagamento</MenuItem>
        <MenuItem value="Pagamento Confirmado">Pagamento Confirmado</MenuItem>
        <MenuItem value="Aguardando Entrega">Aguardando Entrega</MenuItem>
        <MenuItem value="Aguardando Retirada">Aguardando Retirada</MenuItem>
        <MenuItem value="Cancelado">Cancelado</MenuItem>
        <MenuItem value="Entregue">Entregue</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilterSelect;