import React from "react";
import { useParams, withRouter } from "react-router-dom";
import BlogsList from "../../Components/BlogsList/BlogsList";

const Blogs = (props) => {
	const { category } = useParams();

	return <BlogsList category={category} />;
};

export default withRouter(Blogs);
