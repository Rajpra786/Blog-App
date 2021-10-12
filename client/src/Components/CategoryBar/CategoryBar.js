import React from 'react';
import { Grid, Container} from '@mui/material';
import CategoryCard from './CategoryCard';
import Categories from '../../Categories';

const CategoryBar = props =>{	
	return <Container sx={{marginTop:'3rem', marginBottom:'3rem',display: { xs: "none", sm: "block" }}}>
		<Grid container direction="row" alignItems="center" spacing={0}>
			{
				Categories.map((element, i) => {
					return (<Grid item key={i}>
						<CategoryCard
							key = {i}
							url = {element.url}
							category = {element.category}
							icon = {element.icon}
						/>
					</Grid>	)
				})
			}
		</Grid>
	</Container>
}

export default CategoryBar;
