import React from 'react';
// import CategoryBar from '../../Components/CategoryBar';
// import HomeCarousel from '../../Components/HomeCarousel/HomeCarousel';
import BlogsList from '../../Components/BlogsList/BlogsList';
import Categories from '../../Categories';
import EditorsPickBlock from '../../Components/EditorsPick/EditorsPickBlock/EditorsPickBlock';

const Home = props => {
	const data = [1, 2];
	return (
		<div>
			{/* <CategoryBar/>
			<HomeCarousel/> */}
			<EditorsPickBlock data={data} />
			{Categories.map((value, index) => {
				if (index % 2 === 0) {
					return <BlogsList key={value.tagName + index} category={value.tagName} maximumBlogs={6} />;
				}
				else
					return <BlogsList key={value.tagName + index} type='horizontal' category={value.tagName} maximumBlogs={6} />;
			})}

		</div>


	)
};
export default Home;
