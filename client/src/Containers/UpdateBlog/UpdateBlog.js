import { Button, Paper, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Editor from "../../Components/Editor/Editor";
import { UserContext } from "../../Context/UserContext";
import Get from "../../Requests/Get";
import Put from "../../Requests/Put";
import { Link } from "react-router-dom";

class UpdateBlog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			content: "",
			author: "",
			blogId: "",
			isAuth: "",
			loggedInUser: "",
		};
		this.savePost = this.savePost.bind(this);
		this.setContent = this.setContent.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}
	static contextType = UserContext;

	componentDidMount() {
		Get("/blogs/" + this.props.match.params.id)
			.then((res) => {
				this.setState({
					title: res.data.title,
					description: res.data.description,
					content: res.data.content,
					author: res.data.author,
					blogId: res.data._id,
				});
			})
			.catch((err) => {
				console.log("Something went wrong!");
			});
	}

	handleTitleChange = (event) => {
		this.setState({ title: event.target.value });
	};

	handleDescriptionChange = (event) => {
		this.setState({ description: event.target.value });
	};

	setContent = (value) => {
		this.setState({ content: value });
	};

	savePost = () => {
		const data = {
			title: this.state.title,
			description: this.state.description,
			content: this.state.content,
		};
		console.log(data);
		Put(data, "/blogs/" + this.state.blogId)
			.then((res) => {
				this.props.history.push("/blogs/" + this.props.match.params.id);
			})
			.catch((err) => {
				alert("something went wrong");
				console.log(err);
			});
	};

	render() {
		const { isAuth, userId } = this.context;
		if (!isAuth || this.state.author !== userId) {
			return (
				<Paper sx={{ ml: "2vw", mr: "2vw", textAlign: "center", pb: "2vh" }}>
					<Typography sx={{ fontSize: "20vw", textAlign: "center" }}>
						401
					</Typography>
					<Typography sx={{ fontSize: "4vw", textAlign: "center" }}>
						Not Authorized!
					</Typography>
					<div sx={{ fontSize: "4vw", textAlign: "center" }}>
						<Button>
							<Link to="/">Home</Link>
						</Button>
						<Button>
							<Link to={"/blogs/" + this.props.match.params.id}>
								Visit Blog
							</Link>
						</Button>
					</div>
				</Paper>
			);
		} else
			return (
				<div>
					<Paper sx={{ ml: "2vw", mr: "2vw", textAlign: "center", pb: "2vh" }}>
						<div>
							<OutlinedInput
								placeholder="Please Enter Title"
								variant="h3"
								value={this.state.title}
								onChange={this.handleTitleChange}
								sx={{ width: "80vw", mt: "1vh" }}
							/>
							<OutlinedInput
								placeholder="Please Enter Title"
								value={this.state.description}
								onChange={this.handleDescriptionChange}
								sx={{ width: "80vw", mt: "1vh" }}
							/>
							<Editor
								setContent={this.setContent}
								content={this.state.content}
							/>
							<Button
								onClick={this.savePost}
								sx={{ width: "80vw", mt: "10vh" }}>
								Save
							</Button>
						</div>
					</Paper>
				</div>
			);
	}
}

export default withRouter(UpdateBlog);
