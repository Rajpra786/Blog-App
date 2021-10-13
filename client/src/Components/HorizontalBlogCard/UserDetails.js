import React from 'react';
import { Avatar, CardHeader, Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';

export function UserDetails(props) {
	return (<Box sx={{
		display: 'flex',
		alignItems: 'center',
		pl: 1,
		position: 'relative',
		bottom: '0.5vh'
	}}>
		<CardHeader avatar={<Avatar sx={{
			bgcolor: red[500]
		}} aria-label="recipe">
			R
		</Avatar>} title={props.author} subheader={<Box sx={{
			display: 'flex',
			alignItems: 'center',
			pr: 1,
			pb: 1
		}}>
			<Typography variant="body1">
				{props.date}
			</Typography>
			<AccessTimeFilledOutlinedIcon sx={{
				pl: 1,
				display: {
					xs: 'none',
					sm: 'block'
				}
			}} />
			<Typography variant="body1" sx={{
				display: {
					xs: 'none',
					sm: 'block'
				}
			}}>
				{props.readTime}
			</Typography>
		</Box>} />
	</Box>);
}
