import React from 'react';
import { useTheme } from "@mui/material/styles";
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import Fab from '@mui/material/Fab';
import { Grid, Box, Tooltip, SpeedDial, SpeedDialAction } from "@mui/material";

import { Instagram, Facebook, Twitter, LinkedIn, Link, Grade } from '@mui/icons-material';

const socialMediaActions = [
    { icon: <Instagram />, name: 'Instagram' },
    { icon: <Facebook />, name: 'Facebook' },
    { icon: <Twitter />, name: 'Twitter' },
    { icon: <LinkedIn />, name: 'LinkedIn' },
    { icon: <Link />, name: 'Copy Link' },
];

function SocialMediaDial() {
    return (
        <Box sx={{ position: 'absolute', bottom: 20, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                FabProps={{ size: "small" }}
                ariaLabel="SpeedDial Social Media Actions"
                icon={<Fab size="small"><ShareIcon /></Fab>}
            >
                {socialMediaActions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

const actions = [
    {
        name: "Star",
        icon: <Grade />
    },
    {
        name: "Comment",
        icon: <CommentIcon />
    }
];

const ActionButtons = props => {
    const theme = useTheme();
    return <Grid
        container
        direction="row"
        sx={{
            position: 'fixed',
            top: 'auto',
            alignItems: "center",
            justifyContent: "center",
            bottom: 20,
        }}>
        {
            actions.map(action => {
                return <Grid item sx={{ m: 2.5 }}>
                    <Fab aria-label={action.name} size="small">
                        <Tooltip title={action.name}>
                            {action.icon}
                        </Tooltip>
                    </Fab>
                </Grid>
            })
        }
        <Grid item sx={{ m: 1 }}>
            <SocialMediaDial />
        </Grid>
    </Grid>

}

export default ActionButtons;