import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import { Close } from "@mui/icons-material";

const InfoModal = ({ isModalOpen, setIsModalOpen, currentTest }) => {
  const theme = useTheme();

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="test-description-title"
      aria-describedby="test-description-content"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "70%", lg: 1000 },
          maxHeight: "90vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          overflowY: "auto",
        }}
      >
        <Typography
          id="test-description-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
        >
          {currentTest?.title || "Test Instructions"}
        </Typography>

        <Typography id="test-description-content" sx={{ mb: 2 }}>
          {currentTest?.description ||
            "This test evaluates multiple cognitive and reasoning skills. Read each section below for specific instructions."}
        </Typography>

        {/* Adding an image */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <img
            src="https://dreamdesk.in/assets/img/logo/logo.png"
            alt="Test Description"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </Box>

        {/* Adding sections in a styled box */}
        <Box
          sx={{
            p: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            bgcolor: "background.default",
          }}
        >
          {[
            {
              title: "Verbal Ability",
              content:
                "Tests grammar, vocabulary, sentence structure, and comprehension. ⏱️ 7:30 mins | 📋 24 MCQs | ✅ 1 mark each.",
            },
            {
              title: "Numerical Ability",
              content:
                "Assesses mathematical reasoning and number problem-solving. ⏱️ 5:30 mins | 📋 20 MCQs | ✅ 1 mark each.",
            },
            {
              title: "Closure Ability",
              content:
                "Measures visual perception to mentally complete patterns. ⏱️ 4:30 mins | 📋 20 Image MCQs | ✅ 1 mark each.",
            },
            {
              title: "Spatial Ability",
              content:
                "Assesses spatial visualization and transformations. ⏱️ 4:30 mins | 📋 20 Image MCQs | ✅ 1 mark each.",
            },
            {
              title: "Mechanical Ability",
              content:
                "Evaluates mechanical/physical principles. ⏱️ 4:30 mins | 📋 20 Image MCQs | ✅ 1 mark each.",
            },
            {
              title: "Clerical Ability",
              content:
                "Checks attention to detail and basic office logic. Read instructions carefully before starting.",
            },
            {
              title: "Reasoning Ability",
              content:
                "Evaluates logical and analytical reasoning. Make sure to read the instructions carefully before starting.",
            },
            {
              title: "Psychomotor Ability",
              content:
                "Measures coordination of thinking and physical movement. Instructions must be followed closely.",
            },
          ].map((section, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body1" fontWeight="bold">
                {section.title}:
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {section.content}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* External Link */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2">
            For more details, visit{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "underline",
              }}
            >
              this link
            </a>
            .
          </Typography>
        </Box>

        {/* Close Button */}
        <Box sx={{ mt: 3, textAlign: "right" }}>
          <Button color="error" onClick={() => setIsModalOpen(false)}>
            <Close mr={2} />
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default InfoModal;
