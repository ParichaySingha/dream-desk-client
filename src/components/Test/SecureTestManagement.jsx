import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import TestComponent from "./TestComponent";
import InfoModal from "./Section/InfoModal";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

// const testOne = [

//   {
//     title: "Verbal Ability",
//     sectionDetails: "20 Questions, 5:00 mins",
//     timeLimit: 12,
//     questions: [
//       {
//         id: 1,
//         image: "https://files.prepinsta.com/2019/09/visual11.png",
//         label: "Choose the synonym of the word- Big' :",
//         options: [
//           { id: 101, label: "YeTinys" },
//           { id: 102, label: "Huge" },
//           { id: 103, label: "Small" },
//           { id: 104, label: "Weak" },
//           { id: 105, label: "Little" },
//         ],
//       },
//       {
//         id: 2,
//         image: "https://media-hosting.imagekit.io/f7e98c9a50964d98/%7B70A2FED4-61B3-4866-B4D6-0D314150B96C%7D.png?...",
//         label: "Choose the synonym of the word- Big' :",
//         options: [
//           { id: 201, label: "SAME" },
//           { id: 202, label: "REVERSE" },
//         ],
//       },
//       {
//         id: 3,
//         label: "Select the correctly spelled word:",
//         options: [
//           { id: 301, label: "Comitee" },
//           { id: 302, label: "Comittee" },
//           { id: 303, label: "Commetee" },
//           { id: 304, label: "Committee" },
//           { id: 305, label: "Commitee" },
//         ],
//       },
//       {
//         id: 4,
//         label: "Choose the antonym of “Cold”:",
//         options: [
//           { id: 401, label: "Snowy" },
//           { id: 402, label: "Chilly" },
//           { id: 403, label: "Warm" },
//           { id: 404, label: "Freeze" },
//           { id: 405, label: "Ice" },
//         ],
//       },
//       {
//         id: 5,
//         label: "Pick the noun from the following words:",
//         options: [
//           { id: 501, label: "Quickly" },
//           { id: 502, label: "Run" },
//           { id: 503, label: "Blue" },
//           { id: 504, label: "Dog" },
//           { id: 505, label: "Walk" },
//         ],
//       },
//       {
//         id: 6,
//         label: "Fill in the blank: She ___ to school every day.",
//         options: [
//           { id: 601, label: "walk" },
//           { id: 602, label: "walked" },
//           { id: 603, label: "walks" },
//           { id: 604, label: "walking" },
//           { id: 605, label: "has walk" },
//         ],
//       },
//       {
//         id: 7,
//         label: "Choose the synonym of “Happy”:",
//         options: [
//           { id: 701, label: "Angry" },
//           { id: 702, label: "Joyful" },
//           { id: 703, label: "Tired" },
//           { id: 704, label: "Hungry" },
//           { id: 705, label: "Nervous" },
//         ],
//       },
//       {
//         id: 8,
//         label: "Identify the plural form of “Foot”:",
//         options: [
//           { id: 801, label: "Feets" },
//           { id: 802, label: "Foots" },
//           { id: 803, label: "Fets" },
//           { id: 804, label: "Fetes" },
//           { id: 805, label: "Feet" },
//         ],
//       },
//       {
//         id: 9,
//         label: "Which of the following is a verb?",
//         options: [
//           { id: 901, label: "Table" },
//           { id: 902, label: "Book" },
//           { id: 903, label: "Jump" },
//           { id: 904, label: "Sweet" },
//           { id: 905, label: "Red" },
//         ],
//       },
//       {
//         id: 10,
//         label: "Is the analogy strong or weak?",
//         options: [
//           { id: 1001, label: "Strong" },
//           { id: 1002, label: "Weak" },
//         ],
//       },
//       {
//         id: 11,
//         label: "Does this statement contradict earlier information?",
//         options: [
//           { id: 1101, label: "while" },
//           { id: 1102, label: "when" },
//           { id: 1103, label: "although" },
//           { id: 1104, label: "until" },
//           { id: 1105, label: "Red" },
//         ],
//       },
//       {
//         id: 12,
//         label: "Choose the synonym of the word- Big':",
//         options: [
//           { id: 1201, label: "YeTinys" },
//           { id: 1202, label: "Huge" },
//           { id: 1203, label: "Small" },
//           { id: 1204, label: "Weak" },
//           { id: 1205, label: "Little" },
//         ],
//       },
//       {
//         id: 13,
//         label: "Select the correctly spelled word:",
//         options: [
//           { id: 1301, label: "Comitee" },
//           { id: 1302, label: "Comittee" },
//           { id: 1303, label: "Commetee" },
//           { id: 1304, label: "Committee" },
//           { id: 1305, label: "Commitee" },
//         ],
//       },
//       {
//         id: 14,
//         label: "Choose the antonym of “Cold”:",
//         options: [
//           { id: 1401, label: "Snowy" },
//           { id: 1402, label: "Chilly" },
//           { id: 1403, label: "Warm" },
//           { id: 1404, label: "Freeze" },
//           { id: 1405, label: "Ice" },
//         ],
//       },
//       {
//         id: 15,
//         label: "Pick the noun from the following words:",
//         options: [
//           { id: 1501, label: "Quickly" },
//           { id: 1502, label: "Run" },
//           { id: 1503, label: "Blue" },
//           { id: 1504, label: "Dog" },
//           { id: 1505, label: "Walk" },
//         ],
//       },
//       {
//         id: 16,
//         label: "Fill in the blank: She ___ to school every day.",
//         options: [
//           { id: 1601, label: "walk" },
//           { id: 1602, label: "walked" },
//           { id: 1603, label: "walks" },
//           { id: 1604, label: "walking" },
//           { id: 1605, label: "has walk" },
//         ],
//       },
//       {
//         id: 17,
//         label: "Choose the synonym of “Happy”:",
//         options: [
//           { id: 1701, label: "Angry" },
//           { id: 1702, label: "Joyful" },
//           { id: 1703, label: "Tired" },
//           { id: 1704, label: "Hungry" },
//           { id: 1705, label: "Nervous" },
//         ],
//       },
//       {
//         id: 18,
//         label: "Identify the plural form of “Foot”:",
//         options: [
//           { id: 1801, label: "Feets" },
//           { id: 1802, label: "Foots" },
//           { id: 1803, label: "Fets" },
//           { id: 1804, label: "Fetes" },
//           { id: 1805, label: "Feet" },
//         ],
//       },
//       {
//         id: 19,
//         label: "Which of the following is a verb?",
//         options: [
//           { id: 1901, label: "Table" },
//           { id: 1902, label: "Book" },
//           { id: 1903, label: "Jump" },
//           { id: 1904, label: "Sweet" },
//           { id: 1905, label: "Red" },
//         ],
//       },
//       {
//         id: 20,
//         label: "Does this statement contradict earlier information?",
//         options: [
//           { id: 2001, label: "while" },
//           { id: 2002, label: "when" },
//           { id: 2003, label: "although" },
//           { id: 2004, label: "until" },
//           { id: 2005, label: "Red" },
//         ],
//       },
//     ],
//   },

//   {
//     title: "Closure Ability",
//     sectionDetails: "20 Questions, 4:00 mins",
//     timeLimit: 10,
//     questions: [
//       {
//         "id": 21,
//         "label": "Which segment best fills the missing area in the mosaic?",
//         "options": [
//           { "id": 1, "label": "Segment A" },
//           { "id": 2, "label": "Segment B" },
//           { "id": 3, "label": "Segment C" },
//           { "id": 4, "label": "Segment D" }
//         ]
//       },
//       {
//         "id": 22,
//         "label": "Identify the shape that completes the broken figure.",
//         "options": [
//           { "id": 1, "label": "Broken A" },
//           { "id": 2, "label": "Broken B" },
//           { "id": 3, "label": "Broken C" },
//           { "id": 4, "label": "Broken D" }
//         ]
//       },
//       {
//         "id": 23,
//         "label": "Which design completes the visual puzzle?",
//         "options": [
//           { "id": 1, "label": "Design A" },
//           { "id": 2, "label": "Design B" },
//           { "id": 3, "label": "Design C" },
//           { "id": 4, "label": "Design D" }
//         ]
//       },
//       {
//         "id": 24,
//         "label": "Find the image that completes the fragmented object.",
//         "options": [
//           { "id": 1, "label": "Fragment A" },
//           { "id": 2, "label": "Fragment B" },
//           { "id": 3, "label": "Fragment C" },
//           { "id": 4, "label": "Fragment D" }
//         ]
//       },
//       {
//         "id": 25,
//         "label": "Choose the missing detail that completes the structure.",
//         "options": [
//           { "id": 1, "label": "Detail A" },
//           { "id": 2, "label": "Detail B" },
//           { "id": 3, "label": "Detail C" },
//           { "id": 4, "label": "Detail D" }
//         ]
//       }
//     ]

//   }
// ];

// Array of your tests

const SecureTestManagement = ({ allTests }) => {
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [currentTest, setCurrentTest] = useState(allTests?.[0] || null); // Initialize with the first test

  useEffect(() => {
    // Update the current test based on the currentTestIndex

    allTests && setCurrentTest(allTests[currentTestIndex]);
  }, [currentTestIndex, allTests]);

  const handleTestSubmit = () => {
    // Here you can handle the test submission logic (API Call)
    console.log("Test submitted with answers:", answers);
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      {currentTest ? (
        <>
          {/* Hint Button with responsive alignment */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                p: 1,
                pr: 6,
                backgroundColor: "info.main",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                color: "white",
                cursor: "pointer",
              }}
            >
              {currentTest?.testName} ({currentTestIndex + 1} of{" "}
              {allTests.length} tests)
            </Typography>
            <Button
              size="small"
              onClick={() => setIsModalOpen(true)}
              variant="outlined"
            >
              <TipsAndUpdatesIcon
                sx={{
                  mr: 1,
                  fontSize: 16,
                }}
              />{" "}
              <Typography> Hint </Typography>
            </Button>
          </Box>

          {/* Modal */}
          <InfoModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            currentTestIndex={currentTestIndex}
          />

          {/* Test Component */}
          <TestComponent
            key={currentTest?.id}
            title={currentTest?.sections?.title}
            answers={answers}
            setAnswers={setAnswers}
            testData={currentTest?.sections || []}
            timeLimit={currentTest?.sections?.timeLimit || 0}
            onSubmit={handleTestSubmit}
            currentTestIndex={currentTestIndex}
            setCurrentTestIndex={setCurrentTestIndex}
            totalTests={allTests?.length || 0}
          />
        </>
      ) : (
        <p>All assessments completed!</p>
      )}
    </Box>
  );
};

export default SecureTestManagement;
