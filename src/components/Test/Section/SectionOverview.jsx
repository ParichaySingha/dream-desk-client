// import React from "react";
import { Box, Typography } from "@mui/material";

const SectionOverview = ({
  currentSection,
  currentSectionIndex,
  totalSectionLenght,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      {/* Section Overview */}
      <Typography variant="h4" align="center" sx={{ marginTop: 3 }}>
        {currentSection?.title}
      </Typography>
      <Typography variant="body1" align="center">
        {`Section ${currentSectionIndex + 1} of ${totalSectionLenght}`}
      </Typography>
      <Typography variant="body2" align="center">
        {`Questions: ${currentSection?.questions?.length}, Time: ${
          currentSection?.timeLimit / 60
        } minutes`}
      </Typography>
      {currentSection?.description && (
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: 2, fontStyle: "italic" }}
        >
          {currentSection?.description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionOverview;
