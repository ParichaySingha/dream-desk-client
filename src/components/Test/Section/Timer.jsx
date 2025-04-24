// import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
const shake = keyframes`
  0% { transform: translate(0.5px, 0.5px) rotate(0deg); }
  10% { transform: translate(-0.5px, -0.5px) rotate(-0.3deg); }
  20% { transform: translate(-1px, 0px) rotate(0.3deg); }
  30% { transform: translate(1px, 0.5px) rotate(0deg); }
  40% { transform: translate(0.5px, -0.5px) rotate(0.3deg); }
  50% { transform: translate(-0.5px, 0.5px) rotate(-0.3deg); }
  60% { transform: translate(-1px, 0.5px) rotate(0deg); }
  70% { transform: translate(1px, 0.5px) rotate(-0.3deg); }
  80% { transform: translate(-0.5px, -0.5px) rotate(0.3deg); }
  90% { transform: translate(0.5px, 0.5px) rotate(0deg); }
  100% { transform: translate(0.5px, -0.5px) rotate(-0.3deg); }
`;

const Timer = ({ remainingTime, timeLimit }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        top: "16px", // Add some spacing from the top
        right: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          (remainingTime / timeLimit) * 100 < 30
            ? "0px 2px 8px rgba(255, 0, 0, 0.5)"
            : "0px 2px 8px rgba(72, 255, 0, 0.3)",
        borderRadius: "8px",
        padding: "8px",
        animation:
          (remainingTime / timeLimit) * 100 < 30
            ? `${shake} 0.5s infinite`
            : "none",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-block", mb: 2 }}>
        <CircularProgress
          variant="determinate"
          value={(remainingTime / timeLimit) * 100}
          size={40}
          sx={{
            display: "block",
            margin: "auto",
            color:
              (remainingTime / timeLimit) * 100 < 30
                ? (theme) => theme.palette.error.main
                : (theme) => theme.palette.primary.main,
          }}
        />
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color:
              (remainingTime / timeLimit) * 100 < 30
                ? (theme) => theme.palette.error.main
                : (theme) => theme.palette.primary.main,
          }}
        >
          {formatTime(remainingTime)}
        </Typography>
      </Box>
      <Typography variant="caption">Time Remaining</Typography>
    </Box>
  );
};

export default Timer;
