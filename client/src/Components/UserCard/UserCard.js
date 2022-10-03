import React from "react";
import Get from "../../Requests/Get";
import { Typography, Avatar, CardContent, Button, Grid, Paper, Divider } from "@mui/material";

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
			<Paper
				elevation={0}
				sx={{
					padding: "1vw",
					width: { xs: "80vw", sm: "62vw" },
					height: { xs: "50vw", sm: "4vw" },
					border: 'none',
					marginLeft: '5%'
				}}>
				<Divider sx={{ marginBottom: "10px" }} />
				<Grid container sx={{ display: "flex", direction: { xs: 'column', sm: 'row' } }}>
					<Avatar
						alt="User Avatar"
						src={this.state.avatar}
						sx={{ width: { xs: "20%", sm: "15%", md: "10%", lg: "7%" }, height: "50%" }}
					/>
					<CardContent sx={{ paddingLeft: "2vw", paddingTop: '0.5vw' }}>
						<Typography component="div" variant="h5">
							{this.state.name}
						</Typography>

						<Typography component="div" variant="body">
							{this.state.description}
						</Typography>
					</CardContent>
					<Button size="medium" variant="contained" sx={{ display: 'flex', justifyContent: 'right', marginLeft: "2vw", marginTop: '1vw', height: '35px' }}>
						FOLLOW
					</Button>
				</Grid>
			</Paper>
		);
	}
}

export default UserCard;
