import React from "react";
import { withRouter } from "react-router-dom";
import Get from "../../Requests/Get";
import dateFormat from "dateformat";
import { Grid } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { BlogHeader } from "./BlogHeader";
import { Poster } from "./Poster";
import { BlogContent } from "./BlogContent";
import { RightPanel } from "./RightPanel";

class BlogById extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			content: "",
			comments_enabled: false,
			poster: "",
			author: null,
			authorName: "",
			tags: [],
			lastUpdated: "",
			readTime: "",
		};
	}
	static contextType = UserContext;

	componentDidMount() {
		Get("/blogs/" + this.props.match.params.id)
			.then((res) => {
				this.setState({
					title: res.data.title,
					description: res.data.description,
					content: res.data.content,
					comments_enabled: res.data.comments_enabled,
					poster: res.data.image,
					author: res.data.author,
					authorName: res.data.name,
					tags: res.data.tags,
					lastUpdated:
						"Last updated: " + dateFormat(res.data.updatedAt, "mmmm dS, yyyy"),
					readTime: Math.round(res.data.content.split(" ").length / 200),
				});
			})
			.catch((err) => {
				console.log("Something went wrong!");
			});
	}

	render() {
		const { isAuth, userId } = this.context;
		return (
			<div>
				<Grid container sx={{ display: "flex", flexDirection: "column" }}>
					<Grid container sx={{ display: "flex", flexDirection: "column" }}>
						<BlogHeader
							title={this.state.title}
							author={this.state.author}
							id={this.props.match.params.id}
							authorName={this.state.authorName}
							lastUpdated={this.state.lastUpdated}
							readTime={this.state.readTime}
							isAuth={isAuth}
							userId={userId}
						/>

						<Poster poster={this.state.poster} />
					</Grid>

					<Grid container sx={{ display: "flex", flexDirection: "row" }}>
						<BlogContent content={this.state.content} />
						<RightPanel author={this.state.author} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(BlogById);
