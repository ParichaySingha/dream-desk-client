// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ResultsPage = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const response = await axios.get("/api/test-results");
        setTestResults(response.data);
      } catch (error) {
        console.error("Error fetching results:", error);
        setError("Failed to fetch test results.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  // const ResultsPage = () => {
  //   // Mock data for test results
  //   const testResults = [
  //     { testName: "Test 1", score: 85, total: 100 },
  //     { testName: "Test 2", score: 90, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //     { testName: "Test 3", score: 75, total: 100 },
  //   ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          borderRadius: 4,
          maxWidth: 800,
          width: "100%",
          textAlign: "center",
          background: "#fff",
          border: "2px solid #c6f6d5",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          <Box
            component="img"
            src="https://dreamdesk.in/assets/img/logo/logo.png" // Replace with your logo URL
            alt="Logo"
            sx={{
              width: 100, // Adjust the width as needed
              height: "auto",
              mb: 2, // Add margin below the logo
              position: "left",
            }}
          />
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Test Name</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Score</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>Total</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.testName}</TableCell>
                  <TableCell align="center">{result.score}</TableCell>
                  <TableCell align="center">{result.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ResultsPage;
