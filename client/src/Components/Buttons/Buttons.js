import React from 'react';
import { useTheme } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import {Link}  from 'react-router-dom';

export const EditButton = props => {
	const theme = useTheme();
	return <Button variant='text' size='small' startIcon={<EditIcon/>} sx={props.sx}>
		<Link to={props.url} style={{ textDecoration: 'none',color:theme.palette.text.primary}}>
			Edit
		</Link>
	</Button>
}

// export const EditProfileButton
