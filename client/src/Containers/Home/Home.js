import React from 'react';
import BlogsList from '../../Components/BlogsList/BlogsList';
import { Box, Grid } from '@mui/material';
import Tags from '../../Components/Tags';

const tags = [
	{ name: "Ok bro", link: "/bro" },
	{ name: "Ok", link: "/bro" },
	{ name: "Ok bro2", link: "/bro" },
	{ name: "Ok bro3", link: "/bro" },
	{ name: "Ok bro4", link: "/bro" },
	{ name: "Ok", link: "/bro" },
	{ name: "Ok bro2", link: "/bro" },
	{ name: "Ok bro3", link: "/bro" },
	{ name: "Ok bro4", link: "/bro" },
	{ name: "Ok bro2", link: "/bro" },
	{ name: "Ok bro3", link: "/bro" },
	{ name: "Ok bro4", link: "/bro" },
	{ name: "Ok", link: "/bro" },
	{ name: "Ok bro2", link: "/bro" },
	{ name: "Ok bro3", link: "/bro" },
	{ name: "Ok bro4", link: "/bro" },
]

const Home = props => {
	return (
		<div>
			<Grid sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, mt: "10vh" }}>
				<Box sx={{ ml: { xs: "2vw", md: "10vw" }, width: { xs: "98%", md: "73%" } }}>
					<BlogsList />
				</Box>
				<Box sx={{ width: { xs: "98%", md: "23%" }, mt: "7vh", mr: { xs: 0, md: "10vw" } }}>
					<Tags tags={tags} />
				</Box>
			</Grid>
		</div>
	)
};
export default Home;
