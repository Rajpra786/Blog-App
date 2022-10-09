import React from 'react';
import {
  IconButton,
  Box,
  Collapse,
  Alert,
  Typography,
  Toolbar
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const InfoMsg = (props) => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Collapse in={open} sx={{ height: "70px" }}>
        <Box sx={{ p: 1 }}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                sx={{
                  mt: {
                    sm: "-4px",
                    xs: 2.2
                  }
                }}
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            }
            severity="info"
            sx={{
              background: "linear-gradient(to right, #237A57, #093028)",
              width: "100%",
              borderRadius: 4,
              boxSizing: "border-box",
              zIndex: 1
            }}
            variant="filled"
          >
            <Typography variant="body" sx={{ fontSize: '19px' }}>
              {props.msg}
            </Typography>
          </Alert>
        </Box>
      </Collapse>
    </>
  )
};

export default InfoMsg;
