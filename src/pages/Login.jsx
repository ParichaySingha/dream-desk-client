import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [username, setUsername] = useState(""); // State for username
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  // const handleSendOTP = async () => {
  //   try {
  //     // Simulate API call to send OTP
  //     console.log("Sending OTP to:", mobileNumber);
  //     console.log("Username:", username); // Log the username
  //     // Replace this with your actual API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     setOtpSent(true);
  //     setSnackbarMessage("OTP sent successfully!");
  //     setSnackbarOpen(true);
  //   } catch (error) {
  //     setSnackbarMessage("Failed to send OTP. Please try again.");
  //     setSnackbarOpen(true);
  //   }
  // };

  const handleSendOTP = async () => {
    const response = await handleAxiosPostSendOtp({
      phoneNumber: mobileNumber,
      userName: username,
    });
    console.log("Response: otp", response);
  };

  const handleAxiosPostSendOtp = async ({ phoneNumber, userName }) => {
    try {
      const response = await axios.post(
        "https://otp-verification-production.up.railway.app/router/sendOTP",
        {
          phoneNumber: phoneNumber,
          userName: userName,
        }
      );

      if (response.status === 200) {
        console.log("Response: otp", response);
        setOtpSent(true);
        setSnackbarMessage("OTP sent successfully!");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAxiosPost = async ({ oneTimePassword }) => {
    try {
      const response = await axios.post(
        "https://otp-verification-production.up.railway.app/router/validateOTP",
        {
          userName: username,
          oneTimePassword,
        }
      );

      if (response.status === 200) {
        console.log("Response: otp", response);
        setSnackbarMessage("Login successful!");
        // setSnackbarOpen(true);
        navigate("/registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleVerifyOTP = async () => {
    const response = await handleAxiosPost({ oneTimePassword: otp });
    console.log("Response: otp", response);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: "url('/path/to/your/image.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          border: "1px solid #a0f0c1",
          minWidth: 350,
          maxWidth: 400,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Add transparency
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Welcome to
        </Typography>
        <Typography variant="h4" fontWeight={800} color="success.main">
          Dream Desk
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          An Education that Earns
        </Typography>

        <Typography variant="h6" mt={3} mb={2}>
          Log in
        </Typography>

        {!otpSent ? (
          <>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }} // Add margin below the username field
            />

            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter Mobile Number with +91"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, bgcolor: "success.main", color: "#fff" }}
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ mt: 2 }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, bgcolor: "success.main", color: "#fff" }}
              onClick={handleVerifyOTP}
            >
              Verify OTP
            </Button>
          </>
        )}
      </Paper>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage.includes("success") ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
