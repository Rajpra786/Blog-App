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

	componentWillReceiveProps(nextProps) {
		if (nextProps.location.state === 'desiredState' && nextProps.match.params.id !== this.props.match.params.id) {
			this.updateData(nextProps.match.params.id);
		}
	}

	updateData(blogId) {
		Get("/blogs/" + blogId)
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
					readTime: res.data.readTime ? res.data.readTime : 2,
				});
			})
			.catch((err) => {
				switch (err.message) {
					case "Request failed with status code 404":
						this.props.history.push("/NotFound");
						break;
					default:
						this.props.history.push("/");
						console.log("Something went wrong!");
						break;
				}
			});
	}
	componentDidMount() {
		this.updateData(this.props.match.params.id);
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
						<BlogContent content={this.state.content} author={this.state.author} />
						<RightPanel author={this.state.author} tags={this.state.tags} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(BlogById);
