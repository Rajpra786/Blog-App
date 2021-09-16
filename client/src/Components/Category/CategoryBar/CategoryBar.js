import React from 'react';
import { Grid, Container} from '@mui/material';
import CategoryCard from '../CategoryCard';

const CategoryBar = props =>{	
	return <Container sx={{marginTop:'3rem', marginBottom:'3rem'}}>
		<Grid container direction="row" alignItems="center" spacing={0}>
			{
				props.data.map((element, i) => {
					return (<Grid item key={element}>
						<CategoryCard
							key = {element}
							url = "/hello/something"
							Category = "Nature and Environment"
							icon = ""
						/>
					</Grid>	)
				})
			}
		</Grid>
		{/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
	</Container>
}

export default CategoryBar;
