import React from 'react';
import { CardActions, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

export function ProfileBar(props) {
	return (<CardActions sx={{
		marginLeft: '10vw' // itemAlign: 'center',
	}}>
		<Button size="small" href={"mailto:" + props.email}>
			<EmailIcon fontSize='large' />
		</Button>

		<Button size="small" href={props.github}>
			<GitHubIcon fontSize='large' />
		</Button>

		<Button size="small" href={props.twitter}>
			<TwitterIcon fontSize='large' />
		</Button>
		<Button size="small" href={props.website}>
			<LanguageIcon fontSize='large' />
		</Button>
	</CardActions>);
}
