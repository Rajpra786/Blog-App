import React from 'react';
import { Paper,Typography } from '@mui/material';

const Footer = props => {

	return(
		<footer style={{textAlign: 'center'}}>
			<Paper sx={{height:'30vh',p:'3vh', mt:'10vh'}}>
				<Typography variant="body1" color="inherit">
                © 2021 Rajendra
              </Typography>
			</Paper>
		</footer>
	)
};


export default Footer;
