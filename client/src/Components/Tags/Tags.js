import React from 'react';
import { useTheme } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';


const Tags = props => {
    const theme = useTheme();

    return <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: 500,
        p: 1,
        height: "50px",
        alignContent: 'center',
        border: "3px"
    }}>
        {
            props.tags.map((val, index) => {
                return <Box sx={{ m: 1 }}> <Chip sx={{ borderRadius: 0 }} label={val.name} key={index} variant="outlined" /> </Box>
            })
        }
    </Box>
}

export default Tags;
