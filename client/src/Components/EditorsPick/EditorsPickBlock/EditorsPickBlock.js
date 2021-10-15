import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import EditorPickBlogCard from "../EditorPickBlogCard/EditorPickBlogCard";
import Get from "../../../Requests/Get";
import dateFormat from "dateformat";

class EditorsPickBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};
	}

	componentDidMount() {
		const url = `/blogs/?maxcount=3`; //Todo: add some meaning full query here
		console.log(url);
		Get(url)
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
			<Container sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
				<Typography variant="h2" sx={{ p: "2vw" }}>
					Editor's Pick
				</Typography>
				<Grid
					container
					sx={{ flexGrow: 1, pt: "2vw", pl: "5vw" }}
					direction="row"
					alignItems="center"
					spacing={2}>
					{this.state.blogs.map((blog, i) => {
						return (
							<Grid item key={i}>
								<EditorPickBlogCard
									id={blog._id}
									url={"/blogs/" + blog._id}
									image={blog.image}
									title={blog.title}
									Category={blog.tags[0]}
									description={blog.description}
									avatar={blog.author.avatar}
									author={blog.author.name}
									authorUrl={"/profile/" + blog.author._id}
									date={dateFormat(blog.updatedAt, "mmmm dS, yyyy")}
									readTime={blog.readTime ? `${blog.readTime} min` : "2 min"}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		);
	}
}

export default EditorsPickBlock;
