import { Grid, Typography, List, Divider } from "@mui/material";
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
			<Grid sx={{ marginTop: '10vh' }}>
				<Typography variant="h5" sx={{ pl: "1vw" }}>
					More from Ok-Blogger
				</Typography>
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					{this.state.blogs.map((blog) => {
						return (
							<React.Fragment>
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
								<Divider variant="inset" component="li" />
							</React.Fragment>
						);
					})}
				</List>
			</Grid>
		);
	}
}

export default Recommendations;
