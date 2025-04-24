import React, { useState } from "react";
import { Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";

function AuthenticatedPageContainer({ isAuthenticated, logout }) {
  // if (!isAuthenticated) {
  //     return <Navigate to="/login" />;
  //   }
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          flexGrow: 1,
          alignContent: "start",
          justifyItems: "center",
          overflowY: "auto",
          height: "calc(100vh)", // Adjust for the NavBar height
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}

export default AuthenticatedPageContainer;
