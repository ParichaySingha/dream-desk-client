import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      // Simulate API call to send OTP
      console.log("Sending OTP to:", mobileNumber);
      // Replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setOtpSent(true);
      setSnackbarMessage("OTP sent successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      setSnackbarMessage("Failed to send OTP. Please try again.");
      setSnackbarOpen(true);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      // Simulate API call to verify OTP
      console.log("Verifying OTP:", otp);
      // Replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSnackbarMessage("Login successful!");
      setSnackbarOpen(true);
      navigate("/registration"); // Redirect to the dashboard or desired page
    } catch (error) {
      setSnackbarMessage("Invalid OTP. Please try again.");
      setSnackbarOpen(true);
    }
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
          Dream Dask
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
              placeholder="Enter Mobile Number"
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
