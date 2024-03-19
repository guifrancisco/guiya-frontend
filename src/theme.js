import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#db4f4a",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: '#C5D8F6',
          200: '#A1C0F0',
          300: '#7EA9EA',
          400: '#5B91E5',
          500: '#387ADF',
          600: '#1F5FC0',
          700: '#174790',
          800: '#0F2F5F',
          900: '#08172F',
        },
        yellowAccent: {
          100: '#FEEDD4',
          200: '#FDDBAC',
          300: '#FDCA84',
          400: '#FCB95C',
          500: '#FBA834',
          600: '#F28F05',
          700: '#BB6F04',
          800: '#844E03',
          900: '#4D2E02',
        },
        violetAccent: {
          100: '#E0CAFF',
          200: '#C8A1FF',
          300: '#AF79FF',
          400: '#9750FF',
          500: '#7F27FF',
          600: '#6100EE',
          700: '#4A00B6',
          800: '#33007E',
          900: '#1C0046',
        },
        pinkyAccent: {
          100: '#FFE1F1',
          200: '#FFB8DE',
          300: '#FF90CB',
          400: '#FF67B8',
          500: '#FF3EA5',
          600: '#FF068B',
          700: '#CD006D',
          800: '#95004F',
          900: '#5D0031',
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: '#040B17',
          200: '#08172F',
          300: '#0F2F5F',
          400: '#174790',
          500: '#1F5FC0',
          600: '#387ADF',
          700: '#5B91E5',
          800: '#7EA9EA',
          900: '#A1C0F0',
        },
        yellowAccent: {
          100: '#4D2E02',
          200: '#844E03',
          300: '#BB6F04',
          400: '#F28F05',
          500: '#FBA834',
          600: '#FCB95C',
          700: '#FDCA84',
          800: '#FDDBAC',
          900: '#FEEDD4',
        },
        violetAccent: {
          100: '#1C0046',
          200: '#33007E',
          300: '#4A00B6',
          400: '#6100EE',
          500: '#7F27FF',
          600: '#9750FF',
          700: '#AF79FF',
          800: '#C8A1FF',
          900: '#E0CAFF',
        },
        pinkyAccent: {
          100: '#5D0031',
          200: '#95004F',
          300: '#CD006D',
          400: '#FF068B',
          500: '#FF3EA5',
          600: '#FF67B8',
          700: '#FF90CB',
          800: '#FFB8DE',
          900: '#FFE1F1',
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.grey[900],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

export const getStatusColor = (status,mode) => {
  const colors = tokens(mode);
  switch (status) {
    case "Em Processamento":
      return colors.blueAccent[700];
    case "Aguardando Pagamento":
      return colors.pinkyAccent[700];
    case "Pagamento Confirmado":
      return colors.violetAccent[700];
    case "Aguardando Retirada":
      return colors.yellowAccent[700];
    case "Aguardando Entrega":
      return colors.yellowAccent[700];
    case "Cancelado":
      return colors.redAccent[700];
    case "Entregue":
      return colors.greenAccent[700];
  }
}