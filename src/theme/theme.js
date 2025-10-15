import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1", // Indigo-violet from your logo
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A855F7", // Vibrant purple complement
      light: "#C084FC",
      dark: "#7E22CE",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#22C55E", // Modern green
      light: "#4ADE80",
      dark: "#16A34A",
    },
    warning: {
      main: "#F59E0B", // Amber
      light: "#FBBF24",
      dark: "#B45309",
    },
    error: {
      main: "#EF4444", // Soft red
      light: "#F87171",
      dark: "#B91C1C",
    },
    info: {
      main: "#3B82F6", // Bright blue
      light: "#60A5FA",
      dark: "#1D4ED8",
    },
    background: {
      default: "#0F172A", // Deep navy for elegant contrast
      paper: "#1E293B", // Slightly lighter for cards & surfaces
    },
    text: {
      primary: "#F1F5F9", // Near-white for readability
      secondary: "#94A3B8", // Muted gray-blue for subtext
    },
    divider: "rgba(255,255,255,0.1)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 600 },
    h6: { fontSize: "1rem", fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 18px",
          boxShadow: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#4F46E5",
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#1E293B",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 6px 20px rgba(99, 102, 241, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1B4B", // Deep indigo tone
          boxShadow: "0 2px 12px rgba(99, 102, 241, 0.25)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "#1E293B",
        },
      },
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6366F1", // Same indigo-violet
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#A855F7",
      light: "#C084FC",
      dark: "#7E22CE",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#22C55E",
      light: "#4ADE80",
      dark: "#16A34A",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#B45309",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#B91C1C",
    },
    info: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#1D4ED8",
    },
    background: {
      default: "#F8FAFC", // Light gray
      paper: "#FFFFFF", // White for cards & surfaces
    },
    text: {
      primary: "#111827", // Dark text for readability
      secondary: "#6B7280", // Muted gray
    },
    divider: "rgba(0,0,0,0.12)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 600 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 600 },
    h6: { fontSize: "1rem", fontWeight: 600 },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "8px 18px",
          boxShadow: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#4F46E5",
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 6px 20px rgba(99, 102, 241, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF", // Light AppBar
          color: "#111827",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});
