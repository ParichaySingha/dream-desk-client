import { createTheme } from "@mui/material/styles";
import { blue, grey, red, green, amber, purple} from "@mui/material/colors";

const auditTheme = createTheme({
  palette: {
    primary: {
      main: green[500], // Blue 500 as the primary color
      light: green[300], // Light shade
      lighter: green[50], // Lighter shade
      dark: green[700], // Darker shade
      darkest: green[900]
    },
    secondary: {
      main: grey[600], // Neutral gray
      light: grey[400], // Lighter shade
      dark: grey[800],
      lightest: grey[100],
      background: grey[50]
    },
    background: {
      default: grey[200], // Light gray for the background
      paper: "#FFFFFF",
      light: grey[100] 
    },
    status: {
      success: green[100],
      warning: amber[200],
      failed: red[200]
    },
    text: {
      primary: grey[900], // Dark text
      secondary: grey[700], // Secondary text
      light: grey[100],
      lightest: grey[50]

    },
    error: {
      main: red[500], // Error red
    },
    warning: {
      light: amber[200],
      main: amber[500],
      dark: amber[800] // Warning amber
    },
    success: {
      main: green[500], // Success green
    },
    info: {
      main: blue[300], // Info blue
    },
  },
  typography: {
    // Base font size
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.25rem', // Heading 1 size (36px)
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem', // Heading 2 size (28px)
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem', // Heading 3 size (24px)
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem', // Heading 4 size (20px)
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.125rem', // Heading 5 size (18px)
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem', // Heading 6 size (16px)
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem', // Body text size (16px)
    },
    body2: {
      fontSize: '0.875rem', // Body text size (14px)
    },
    subtitle1: {
      fontSize: '1rem', // Subtitle text size (16px)
    },
    subtitle2: {
      fontSize: '0.875rem', // Subtitle text size (14px)
    },
    caption: {
      fontSize: '0.75rem', // Caption text size (12px)
    },
    overline: {
      fontSize: '0.75rem', // Overline text size (12px)
    },
    small: {
      fontSize: '0.65rem',
    },
    xsmall: {
      fontSize: '0.5rem',
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Remove uppercase text by default
        },
        contained: {
          backgroundColor: green[500], // Default background color for contained buttons
          color: grey[50], // Default text color for contained buttons
          '&:hover': {
            backgroundColor: green[300], // Darker shade for hover
          },
        },
        outlined: {
          color: green[600], // Default text color for outlined buttons
          borderColor: green[600], // Default border color for outlined buttons
          '&:hover': {
            backgroundColor: green[50], // Subtle green background on hover
            borderColor: green[300], // Lighter border on hover
          },
        },
      },
    },
  },
});

export default auditTheme;
