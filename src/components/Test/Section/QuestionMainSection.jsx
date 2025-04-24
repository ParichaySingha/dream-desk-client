import React from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Stack
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const QuestionMainSection = ({
  currentQuestionIndex,
  totalQuestionInCurrentSection,
  currentQuestion,
  handleAnswerChange,
  currentSectionIndex,
  answers
}) => {
  const selectedAnswer = answers[currentQuestion?.id] || null;

  return (
    <Box >
      <Typography variant="body1" sx={{ mt: 2 }}>
        {`Current Question: ${currentQuestionIndex + 1} of ${totalQuestionInCurrentSection}`}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        {currentQuestion?.label}
      </Typography>

      <RadioGroup name={`question-${currentQuestionIndex}`}>
        <Stack spacing={1}>
          {currentQuestion?.options?.map((option, idx) => {
            const isSelected = selectedAnswer === option.id;

            return (
              <Paper
                key={option?.id}
                elevation={isSelected ? 6 : 4}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 0.5,
                  py: 0.5,
                  width: '100%',
                  backgroundColor: 'grey.100',
                  borderStyle: `solid`,
                  borderWidth: isSelected ? '2px' : '1px',
                  borderColor: isSelected ? 'primary.main' : 'lightgrey',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: '0.2s',
                  
                }}
                onClick={() =>
                  handleAnswerChange(currentQuestion?.id, option?.id)
                }
              >
                {/* Hidden Radio for logic only */}
                <Radio
                  checked={isSelected}
                  value={option?.id}
                  sx={{ display: 'none' }}
                  readOnly
                />
               <Box sx={{
                display: 'flex',
                gap: 2
               }}> 
                 {/* Label */}
                 <Typography
                  variant="body1"
                  sx={{
                    color: isSelected ? 'white' : 'text.primary',
                    fontWeight: isSelected ? 600 : 400,
                    p: 1,
                    pl: 2,
                    pr: 2,
                    backgroundColor: isSelected ? 'primary.main' : 'lightgrey',
                    borderRadius: 1
                  }}
                >
                  {`${alphabet[idx]}`}
                </Typography>

                {/* Label */}
                <Typography
                  variant="body1"
                  sx={{
                    color: isSelected ? 'primary.main' : 'text.primary',
                    fontWeight: isSelected ? 600 : 400,
                    padding: 1
                  }}
                >
                  {`${option.label}`}
                </Typography>
               </Box>

                {/* Tick icon */}
                {isSelected && <CheckCircleIcon color="primary" sx={{
                    mr: 2
                }} />}
              </Paper>
            );
          })}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default QuestionMainSection;
