import React from "react";
import Get from "../../Requests/Get";
import { Typography, Avatar, Card, CardContent, Divider } from "@mui/material";
import { CardBottom } from "./CardBottom";

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			description: "",
			github: "",
			twitter: "",
			website: "",
			avatar: "",
		};
	}

	componentDidMount() {
		Get("/users/" + this.props.id)
			.then((res) => {
				let avatar = "";
				if (res.avatar) {
					avatar = res.avatar;
				}
				console.log(res);
				this.setState({
					name: res.name,
					description: res.description,
					avatar: avatar,
					github: res.github ? res.github : "",
					twitter: res.twitter ? res.twitter : "",
					website: res.website ? res.website : "",
				});
				console.log(this.state);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<Card
				sx={{
					margin: "3vw",
					width: "18vw",
					border: "ridge",
				}}>
				<Avatar
					alt="User Avatar"
					src={this.state.avatar}
					sx={{ width: "18vw", height: "19vw" }}
				/>
				<CardContent sx={{ textAlign: "center" }}>
					<Typography component="div" variant="h6">
						{this.state.name}
					</Typography>

					<Typography component="div" variant="caption">
						{this.state.description}
					</Typography>
				</CardContent>
				<Divider />
				<CardBottom
					github={this.state.github}
					twitter={this.state.twitter}
					website={this.state.website}></CardBottom>
			</Card>
		);
	}
}

export default UserCard;
