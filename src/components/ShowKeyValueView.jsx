import React from 'react';
import { Box, Typography } from '@mui/material';

function ShowKeyValueView({title}) {
    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column',
                minWidth: 200
            }
        }>
            <Typography variant='small'>
            {title}
            </Typography>
            <Typography variant='subtitle2'>
                Value
            </Typography>

        </Box>
    );
}

export default ShowKeyValueView;