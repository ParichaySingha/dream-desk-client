import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function VerticalLinearStepper({steps, buttonLabels, activeStep, setActiveStep, handleNext, handleBack, handleFinish}) {
 

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
               /* optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Final step</Typography>
                ) : null
              } */
            >
              {step.label}
            </StepLabel>
            <StepContent>
            <Box sx={{mt:2, mb: 2 }}>
            {step.content}
              </Box>
              
              <Box sx={{mt:2, mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={ index === steps.length - 1  ? handleFinish : handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? (buttonLabels?.final || 'Finish') : (buttonLabels?.next || 'Continue')}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {buttonLabels?.previous || 'Back' }
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/*activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )*/}
    </Box>
  );
}
