import React from 'react';
import { Card, CardContent,Grid,CardHeader, Typography,Avatar,Chip} from '@mui/material';
import { useTheme} from '@mui/material/styles';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
/*
props : {
	url,
	Category,


}

*/
const EditorPickBlogCard = (props) => {
	const theme = useTheme();

	return <Card 
		sx = {{
			width:'45vh',
			height:'55vh',
			marginLeft:'3vh',
			marginRight:'2vh',
			padding:'3vh',
			variant:'round',
			transition: 'all 0.2s ease-out',
			border: '0.3vh solid #ddd',
			borderRadius: '2vh',
			'&:hover':{
				boxShadow: '0 0 2vh 0px rgba(0, 0, 0, 0.4)',
				transform: 'scale(1.01)'
			},
			'&:active':{
				transform: 'scale(1.01) translateY(0.5vh)'
			}
		}}>
		<Chip
			// color='text.primary'
			label={props.Category}
			component="a"
			href={props.url}
			variant="outlined"
			clickable
		/>
		 <CardContent>
			<Typography variant="h5" color="text.primary" gutterBottom>
				{props.title}
			</Typography>
			<Typography variant="p" color="text.secondary" gutterBottom>
				{props.description}
			</Typography>
		 </CardContent>
		 <CardHeader
			avatar={
			<Avatar sx={{ bgcolor: theme.palette.primary[800] }} aria-label="user">
				R
			</Avatar>
			}
			title={props.author}
			subheader={
					<Grid container direction="row" alignItems="center" spacing={2}>
						<Grid item>
							{props.date}
						</Grid>
						<Grid item>
							<Grid container direction="row" alignItems="center" spacing={0.5}>
								<Grid item>
									<AccessTimeFilledOutlinedIcon />
								</Grid>
								<Grid item>
									{props.readTime}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
			}
		/>
	</Card>
}

export default EditorPickBlogCard;
