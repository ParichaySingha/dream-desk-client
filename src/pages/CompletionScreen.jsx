// import React from 'react';
import { jsPDF } from "jspdf";
import axios from "axios"; // Install axios if not already installed: npm install axios
import { Box, Button, Typography, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const CompletionScreen = () => {
  const navigate = useNavigate();
  // const handleViewReport = () => {
  //   navigate("/completionScreen", { state: { userId: { idID } } }); // Pass user-specific data
  // };
  const handleViewReport = () => {
    navigate("/resultsPage"); // Navigate to the results page
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5fff6",
        padding: 2,
        overflowX: "hidden",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 800,
          minHeight: "75vh",
          textAlign: "center",
          background: "#fff",
          border: "2px solid #c6f6d5",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <CheckCircleIcon
            sx={{ fontSize: 60, color: "#38a169", cursor: "pointer" }}
            onClick={async () => {
              try {
                // Fetch test results from the API
                const response = await axios.get("/api/user-test-results"); // Replace with your API endpoint
                const reportData = response.data; // Assuming the API returns an object with name and testResults

                // Create a new jsPDF instance
                const doc = new jsPDF();

                // Add content to the PDF
                doc.setFontSize(16);
                doc.text("Report Card", 10, 10);
                doc.setFontSize(12);
                doc.text(`Name: ${reportData.name}`, 10, 20);

                // Add test results
                doc.text("Test Results:", 10, 30);
                reportData.testResults.forEach((result, index) => {
                  doc.text(
                    `${index + 1}. ${result.testName}: ${result.score}/${
                      result.total
                    }`,
                    10,
                    40 + index * 10
                  );
                });

                // Save the PDF
                doc.save("report-card.pdf");
              } catch (error) {
                console.error("Error fetching test results:", error);
                alert("Failed to fetch test results. Please try again later.");
              }
            }}
          />
          <Typography variant="h5" fontWeight="bold">
            Well Done!
          </Typography>
          <Typography>
            You&apos;ve successfully completed the Dream Dask Psychometric
            Evaluation.
          </Typography>
          <Typography variant="body2">
            Click below to return to the home screen.
          </Typography>
          <Button
            variant="contained"
            onClick={handleViewReport}
            sx={{
              mt: 2,
              backgroundColor: "#38a169",
              "&:hover": { backgroundColor: "#2f855a" },
              px: 4,
              minWidth: "20vw",
            }}
          >
            View Report
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CompletionScreen;
