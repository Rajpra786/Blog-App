import React from 'react';
import {Paper,Typography} from '@mui/material';

const NoMatch = props => (
	<div>
		<Paper>
			<Typography sx={{fontSize:'20vw',textAlign:'center' }}>
				404
			</Typography>
			<Typography sx={{fontSize:'4vw', textAlign:'center'}}>
				Requested URL not found!
			</Typography>
		</Paper>
	</div>
);

export default NoMatch;
