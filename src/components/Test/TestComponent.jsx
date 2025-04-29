import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  useMediaQuery,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionOverview from "./Section/SectionOverview";
import Timer from "./Section/Timer";
import QuestionMainSection from "./Section/QuestionMainSection";
import QuestionsMatrixSection from "./Section/QuestionsMatrixSection";

const TestComponent = ({
  testData,
  totalTests,
  currentTestIndex,
  setCurrentTestIndex,
  answers,
  setAnswers,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null);

  // Handle missing testData
  useEffect(() => {
    if (testData?.length > 0) {
      setCurrentSectionIndex(0);
      setCurrentQuestionIndex(0);
      setRemainingTime(testData[0]?.timeLimit || 0);
      //setAnswers({});
    }
  }, [testData]);

  useEffect(() => {
    if (!remainingTime || remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const moveToNextSection = () => {
    console.log("Moving to next section...", answers);
    if (currentSectionIndex < testData.length - 1) {
      const nextIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextIndex);
      setCurrentQuestionIndex(0);
      setRemainingTime(testData[nextIndex]?.timeLimit || 0);
    } else {
      if (currentTestIndex < totalTests - 1) {
        setCurrentTestIndex((prev) => prev + 1);
      } else {
        onSubmit();
        navigate("/completionScreen");
      }
    }
  };

  useEffect(() => {
    if (remainingTime === 0) {
      moveToNextSection();
    }
  }, [remainingTime]);

  const handleAnswerChange = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNextQuestion = () => {
    if (
      currentQuestionIndex <
      (testData?.[currentSectionIndex]?.questions?.length || 0) - 1
    ) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const getQuestionStatus = (questionId, questionIndex) => {
    if (questionIndex === currentQuestionIndex) return "current";
    if (answers[questionId]) return "answered";
    return "unanswered";
  };

  // Guard for null or empty testData
  if (!testData || testData.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          No test data found. Please try again later.
        </Typography>
      </Box>
    );
  }

  const currentSection = testData[currentSectionIndex];
  const currentQuestion = currentSection?.questions?.[currentQuestionIndex];

  return (
    <Box sx={{ px: isSmallScreen ? 1 : 3, py: 2, maxWidth: "md", mx: "auto" }}>
      {/* Stepper + Timer */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {!isSmallScreen ? (
          <Stepper
            activeStep={currentSectionIndex}
            alternativeLabel
            sx={{ overflowX: "auto", flexGrow: 1 }}
          >
            {testData.map((section) => (
              <Step key={section.title}>
                <StepLabel>{section.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : (
          <Paper
            elevation={3}
            sx={{
              width: "100%",
              p: 2,
              borderRadius: 2,
              backgroundColor: "#fafafa",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {[
              { label: "Start", index: 0 },
              { label: "Current", index: currentSectionIndex },
              { label: "Next", index: currentSectionIndex + 1 },
              { label: "End", index: testData.length - 1 },
            ]
              .filter(
                (step, i, arr) =>
                  step.index >= 0 &&
                  step.index < testData.length &&
                  arr.findIndex((s) => s.index === step.index) === i
              )
              .map((step) => {
                const isCurrent = step.index === currentSectionIndex;
                return (
                  <Paper
                    key={step.label}
                    elevation={isCurrent ? 4 : 1}
                    sx={{
                      px: 2,
                      py: 1,
                      minWidth: 80,
                      borderRadius: 2,
                      backgroundColor: isCurrent ? "primary.light" : "#ffffff",
                      border: isCurrent ? "2px solid" : "1px solid #ddd",
                      borderColor: isCurrent ? "primary.main" : "grey.300",
                      textAlign: "center",
                    }}
                  >
                    <Chip
                      label={step.label}
                      size="small"
                      color={isCurrent ? "primary" : "default"}
                      sx={{ mb: 0.5, fontWeight: "bold" }}
                    />
                    <Typography
                      variant="body2"
                      fontWeight={isCurrent ? "bold" : "normal"}
                      color={isCurrent ? "primary.main" : "text.secondary"}
                      noWrap
                    >
                      {testData[step.index]?.title}
                    </Typography>
                  </Paper>
                );
              })}
          </Paper>
        )}

        {/* Timer */}
        <Box mt={isSmallScreen ? 2 : 0}>
          <Timer
            remainingTime={remainingTime}
            timeLimit={currentSection?.timeLimit}
          />
        </Box>
      </Box>

      {/* Section Overview */}
      <Box sx={{ mt: 2 }}>
        <SectionOverview
          currentSection={currentSection}
          currentSectionIndex={currentSectionIndex}
          totalSectionLenght={testData.length}
        />
      </Box>

      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={
          (currentQuestionIndex / (currentSection?.questions?.length || 1)) *
          100
        }
        sx={{ my: 2 }}
      />

      {/* Questions */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {currentQuestion?.image && (
            <Box
              component="img"
              src={currentQuestion.image}
              alt={`Question ${currentQuestionIndex + 1}`}
              sx={{
                width: "100%",
                maxHeight: 150,
                objectFit: "contain",
                mb: 2,
                borderRadius: 1,
              }}
            />
          )}
          <QuestionMainSection
            currentSectionIndex={currentSectionIndex}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            currentQuestion={currentQuestion}
            handleAnswerChange={handleAnswerChange}
            totalQuestionInCurrentSection={
              currentSection?.questions?.length || 0
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 2,
              border: "2px solid",
              borderColor: "primary.light",
              borderRadius: 2,
              maxHeight: 300,
              overflowY: "auto",
            }}
          >
            <Typography align="center" variant="h6" gutterBottom>
              Questions
            </Typography>
            <QuestionsMatrixSection
              getQuestionStatus={getQuestionStatus}
              currentSection={currentSection}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Navigation Buttons */}
      <Box
        mt={3}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Button
          fullWidth={isSmallScreen}
          variant="contained"
          color="secondary"
          onClick={handlePrevQuestion}
          disabled={remainingTime === 0 || currentQuestionIndex === 0}
        >
          Previous Question
        </Button>
        <Button
          fullWidth={isSmallScreen}
          variant="contained"
          color="primary"
          onClick={handleNextQuestion}
          disabled={
            remainingTime === 0 ||
            currentQuestionIndex >= (currentSection?.questions?.length || 1) - 1
          }
        >
          Next Question
        </Button>
      </Box>
    </Box>
  );
};

export default TestComponent;
