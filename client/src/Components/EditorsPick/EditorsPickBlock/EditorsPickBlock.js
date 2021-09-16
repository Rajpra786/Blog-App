import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import EditorPickBlogCard from '../EditorPickBlogCard/EditorPickBlogCard';
import { useTheme} from '@mui/material/styles';


const EditorsPickBlock = (props) => {
	const theme = useTheme();
	
	return <Container sx={{marginTop:'3rem', marginBottom:'3rem'}}>
		<Typography  variant="h4" component="h2"
			sx={{
				color:`${theme.palette.secondary}`,
				fontFamily: "Georgia",
				marginBottom:'2rem',
				textAlign:'left',
			}}
		>
			Editor's Pick
		</Typography>
		<Grid container direction="row" alignItems="center" spacing={1}>
			{
				props.data.map((element, i) => {
					return (<Grid item key={element}>
						<EditorPickBlogCard
							key = {element}
							url = "/hello/something"
							Category = "Nature and Environment"
							title = "Origins Of Earth’s Magnetic Field Remain A Mystery"
							description = "Lorem markdom. Ulixis doceo, pacis et Iove Achilles explicat profuit decimum vide."
							avatar = "Rajendra Prajapat"
							author="Rajendra Prajapat"
							date = "April 16, 2020"
							readTime = "1 min"
						/>
					</Grid>	)
				})
			}
		</Grid>
		{/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
	</Container>
}

export default EditorsPickBlock;
