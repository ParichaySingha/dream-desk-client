import { Box, Typography, Card, CardContent, Grid, LinearProgress, Divider, Chip, Button } from "@mui/material";

 const results = [
    {
      testTitle: "Test One",
      score: 28,
      total: 40,
      sections: [
        { title: "Verbal Ability", score: 8, total: 10 },
        { title: "Logical Reasoning", score: 6, total: 10 },
        { title: "Quantitative", score: 7, total: 10 },
        { title: "General Awareness", score: 7, total: 10 },
      ],
    },
    {
      testTitle: "Test Two",
      score: 15,
      total: 20,
      sections: [
        { title: "Self Motivation", score: 15, total: 20 },
      ],
    },
    // Add more...
  ];
  

const AllTestsCompleted = () => {
  return (
    <Box sx={{ p: 3, maxWidth: "lg", mx: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        🎉 All Tests Completed!
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" mb={4}>
        Here's a summary of your performance:
      </Typography>
      <Button variant="contained">View Result</Button>

      {/* <Grid container spacing={3}>
        {results.map((test, i) => (
          <Grid item xs={12} md={6} key={test.testTitle}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                border: "1px solid #ddd",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {test.testTitle}
                </Typography>

                <Chip
                  label={`Score: ${test.score}/${test.total}`}
                  color="primary"
                  sx={{ mb: 2 }}
                />

                <LinearProgress
                  variant="determinate"
                  value={(test.score / test.total) * 100}
                  color="success"
                  sx={{ height: 10, borderRadius: 5 }}
                />

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2" color="text.secondary">
                  Sections Attempted: {test.sections.length}
                </Typography>
                {test.sections.map((section, idx) => (
                  <Box key={idx} sx={{ mt: 1 }}>
                    <Typography variant="subtitle2" fontWeight="medium">
                      {section.title}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(section.score / section.total) * 100}
                      sx={{ height: 6, borderRadius: 4, mb: 1 }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={5} textAlign="center">
        <Button variant="contained" color="primary" size="large" href="/">
          Go to Dashboard
        </Button>
      </Box> */}
    </Box>
  );
};

export default AllTestsCompleted;
