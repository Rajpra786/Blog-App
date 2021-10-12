import React from 'react';
import { useTheme} from '@mui/material/styles';
import { Card,Typography,Avatar,Grid} from '@mui/material';
import {Link} from "react-router-dom";

const cardStyles = {
    width:'40vh',
    overflow: 'hidden',
    position: 'relative',
    marginLeft:'2vh',
    marginRight:'1vh',
    padding:'1vh',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '30vh',
        height: '30vh',
        background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: '-1vh',
        right: '-20vh'
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: '30vh',
        height: '30vh',
        background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: '-20vh',
        right: '-15vh'
    },
    border: '0.3vh solid #ddd',
    borderRadius: '2vh',
    '&:hover':{
        boxShadow: '0 0 3vh 0px rgba(0, 0, 0, 0.4)',
        transform: 'scale(1.04)'
    },
    '&:active':{
        transform: 'scale(1.01) translateY(0.5vh)'
    }
};

const CategoryCard = props => {
    const theme = useTheme();

	return  <Link to={props.url} style={{ textDecoration: 'none'}}>
        <Card sx={cardStyles}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Avatar variant="rounded"
                        sx ={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.largeAvatar,
                            backgroundColor: theme.palette.primary[800],
                            color: '#fff'
                        }}>
                            {props.icon}
                    </Avatar>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        {props.category}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    </Link> 
}


export default CategoryCard;
