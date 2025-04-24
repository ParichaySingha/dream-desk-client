import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import auditTheme from "./theme";

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={auditTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
