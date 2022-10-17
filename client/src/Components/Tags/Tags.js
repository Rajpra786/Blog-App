import React from 'react';
import { useTheme } from "@mui/material/styles";
import { Box, Chip } from '@mui/material';

const Tags = props => {
    const theme = useTheme();

    return <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
        p: 1,
        height: "30vh",
        alignContent: 'center'
    }}>
        {
            props.tags.map((val, index) => {
                return <Box sx={{ m: 1 }}> <Chip sx={{ borderRadius: 0 }} label={val.name} key={index} variant="outlined" /> </Box>
            })
        }
    </Box>
}

export default Tags;
