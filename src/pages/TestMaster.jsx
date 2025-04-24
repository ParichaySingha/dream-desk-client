import React from 'react';
import { Box } from '@mui/material';
import StartTests from '../components/Test/StartTests';
const TestMaster = ({setAllTests}) => {
    return (
        <Box>
            <StartTests setAllTests={setAllTests} />
        </Box>
    );
};

export default TestMaster;