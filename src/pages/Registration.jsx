import { Box, Divider, Typography } from "@mui/material";
// import React from "react";
import StepperRegistration from "../components/Stepper/StepperRegistration";

function Registration() {
  return (
    <Box
      sx={(theme) => ({
        m: 6,
        mt: 10,
        height: "70vh",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 3,
        minWidth: "80vw",
        borderColor: "primary.light",
        background: 'white',
        p: 3,
        pt: 0,
        boxShadow: `0 0 30px 5px ${theme.palette.primary.light}`,
      })}
    >
      <Box sx={{ width: "100%", pb: 1, pt: 1 }}>
        <Typography fontSize={20} fontWeight={500}>
          Enter a few details and you are in
        </Typography>
        <Typography variant="body2" color="error" mt={1}>
          * All fields are mandatory
        </Typography>
      </Box>
      <Divider></Divider>
      <StepperRegistration />
    </Box>
  );
}

export default Registration;
