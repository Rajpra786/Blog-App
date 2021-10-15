import { Grid, Typography } from "@mui/material";
import React from "react";
import MiniBlogCard from "../MiniBlogCard/MiniBlogCard";
import Get from "../../Requests/Get";
import dateFormat from "dateformat";

class Recommendations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};
	}

	componentDidMount() {
		Get(`/blogs/?tags=${this.props.tags[0]}&maxcount=3`)
			.then((res) => {
				console.log(res);
				this.setState({ blogs: res.blogs });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<Grid>
				<Typography variant="h4" sx={{ pl: "1vw" }}>
					Recommendations
				</Typography>
				{this.state.blogs.map((blog) => {
					return (
						<MiniBlogCard
							id={blog._id}
							image={blog.image}
							title={blog.title}
							description={blog.description}
							author={blog.author.name}
							authorUrl={"/profile/" + blog.author._id}
							date={dateFormat(blog.updatedAt, "mmmm dS, yyyy")}
							readTime={blog.readTime ? `${blog.readTime} min` : "2 min"}
						/>
					);
				})}
			</Grid>
		);
	}
}

export default Recommendations;
