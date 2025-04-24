import React from 'react';
import { Box, Grid, Paper, useTheme, keyframes } from '@mui/material';

export default function QuestionsMatrixSection({ currentSection, getQuestionStatus, setCurrentQuestionIndex }) {
  const theme = useTheme();

  // Define keyframes for blinking
  const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  `;

  const getColor = (status) => {
    switch (status) {
      case 'current':
        return theme.palette.info.main;
      case 'answered':
        return theme.palette.success.main;
      case 'unanswered':
        return theme.palette.warning.main;
      default:
        return theme.palette.grey[500];
    }
  };

  return (
    <Box mt={2} >
      <Grid container spacing={1} justifyContent="center">
        {currentSection?.questions.map((item, index) => {
          const status = getQuestionStatus(item?.id, index);
          const isCurrent = status === 'current';

          return (
            <Grid item key={index}>
              <Paper
                sx={{
                  width: 30,
                  height: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: getColor(status),
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  borderRadius: '50%',
                  transition: 'background-color 0.3s',
                  animation: isCurrent ? `${blink} 1s infinite` : 'none',
                  fontSize: '12px'
                }}
                onClick={() => setCurrentQuestionIndex(index)}
                elevation={3}
              >
                {index + 1}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
