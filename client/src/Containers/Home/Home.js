import React from 'react';
// import CategoryBar from '../../Components/CategoryBar';
// import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';
import BlogsList from '../../Components/BlogsList/BlogsList';
import Categories from '../../Categories';
import EditorsPickBlock from '../../Components/EditorsPick/EditorsPickBlock/EditorsPickBlock';
import HorizontalBlogCard from '../../Components/HorizontalBlogCard/HorizontalBlogCard';
import dateFormat from "dateformat";
import { Box } from '@mui/material';
import Tags from '../../Components/Tags';

const value = {
	_id: "Hello615c8e19dd6b9300ac9598dc",
	title: "Hello I am Here",
	description: "Lets see what we are doing here random random random random random@!",
	image: "https://mysimpleblog.s3.ap-south-1.amazonaws.com/6ce1eeb768bcd0bb1aa44db74831e296Screenshot%20%2811%29.png",
	author: {
		name: "Rajendra Prajapat",
		_id: 3545646345,
		updatedAt: new Date(),

	}
}
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
	const data = [1, 2];
	return (
		<div>
			{/* <CategoryBar/>
			<HomeCarousel/> */}
			{/* <EditorsPickBlock data={data} /> */}
			{/* {Categories.map((value, index) => {
				if (index % 2 === 0) {
					return <BlogsList key={value.tagName + index} category={value.tagName} maximumBlogs={6} />;
				}
				else
					return <BlogsList key={value.tagName + index} type='horizontal' category={value.tagName} maximumBlogs={6} />;
			})} */}

			<Box sx={{ mb: 20, mt: 20, ml: 5 }}>
				<HorizontalBlogCard
					url={"/blogs/" + value._id}
					title={value.title}
					description={
						value.description.length > 50
							? value.description.substring(0, 50) + "..."
							: value.description
					}
					avatar={value.author?.avatar}
					author={value.author.name}
					date={dateFormat(value.updatedAt, "mmmm dS, yyyy")}
					readTime={
						value.readTime ? value.readTime + " min" : "2 min"
					}
					authorUrl={"/profile/" + value.author._id}
					poster={value.image}
				/>

				<Tags tags={tags} />
			</Box>

		</div>


	)
};
export default Home;
