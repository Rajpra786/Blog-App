import React from "react";
import Get from "../../Requests/Get";
import Put from "../../Requests/Put";
import {
	Grid,
	Box,
	Modal,
	Button,
	TextField,
	FormHelperText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import SaveIcon from "@mui/icons-material/Save";
import EditProfilePhoto from "../../Components/EditProfilePhoto";

const Img = styled("img")({
	paddingTop: "2vw",
	margin: "auto",
	display: "block",
	border: "hidden",
	borderRadius: "50%",
	width: "50%",
	height: "50%",
});

const Div = styled("div")({
	marginTop: "5vh",
	"@media (max-width:780px)": {
		marginTop: "1vw",
	},
});

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "90vw",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
};

const iconStyle = {
	color: "action.active",
	fontSize: "4vw",
	mr: 1,
	my: 0.5,
	"@media (max-width:780px)": { fontSize: "15vw" },
};

function EditPhotoModal(props) {
	return (
		<Modal open={props.editAvatar} onClose={props.handleCloseAvatarEdit}>
			<Box sx={style}>
				<EditProfilePhoto setImage={props.setImage} src={props.avatar} />
			</Box>
		</Modal>
	);
}

class ProfileUpdate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			userName: "",
			email: "",
			description: "",
			avatar: "",
			github: "",
			twitter: "",
			website: "",
			editAvatar: false,
			error: false,
			success: false,
		};
		this.handleCloseAvatarEdit = this.handleCloseAvatarEdit.bind(this);
		this.setImage = this.setImage.bind(this);
	}

	setImage = (src) => {
		this.setState({ avatar: src, editAvatar: false });
	};

	handleOpenAvatarEdit = () => this.setState({ editAvatar: true });
	handleCloseAvatarEdit = () => this.setState({ editAvatar: false });

	componentDidMount() {
		Get("/users/my")
			.then((data) => {
				console.log(data);
				this.setState({
					id: data.userId,
					userName: data.name,
					email: data.email,
					description: data.description,
					avatar: data.avatar ? data.avatar : "/userAvatar.png",
					github: data.github ? data.github : "",
					twitter: data.twitter ? data.twitter : "",
					website: data.website ? data.website : "",
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	saveProfile = () => {
		const data = {
			name: this.state.userName,
			email: this.state.email,
			description: this.state.description,
			avatar: this.state.avatar,
			github: this.state.github,
			twitter: this.state.twitter,
			website: this.state.website,
		};

		Put(data, "/users/" + this.state.id)
			.then((res) => {
				this.setState({ success: true });
			})
			.catch((err) => {
				console.log(err);
				this.setState({ error: true });
			});
	};

	render() {
		return (
			<Box sx={{ flexGrow: 1 }}>
				<EditPhotoModal
					editAvatar={this.state.editAvatar}
					handleCloseAvatarEdit={this.handleCloseAvatarEdit}
					setImage={this.setImage}
					avatar={this.state.avatar}
				/>

				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						{/* profile pic */}
						<Img alt="complex" src={this.state.avatar} />
						<Button
							onClick={this.handleOpenAvatarEdit.bind(this)}
							sx={{ margin: "auto", display: "block" }}>
							Change Avatar
						</Button>
					</Grid>
					<Grid item xs={11} sm={7}>
						{/* Profile details */}

						<Div>
							<TextField
								fullWidth
								value={this.state.userName}
								onChange={(event) =>
									this.setState({ userName: event.target.value })
								}
								label="User Name"
								id="userNameField"
								sx={{ ml: "1vw", mt: "1vw", mb: "1vw" }}
							/>
							<TextField
								fullWidth
								value={this.state.description}
								onChange={(event) =>
									this.setState({ description: event.target.value })
								}
								label="Description"
								id="descField"
								sx={{ ml: "1vw", mt: "1vw", mb: "1vw" }}
							/>
							<Box sx={{ display: "flex", alignItems: "flex-end", m: "1vw" }}>
								<EmailIcon sx={iconStyle} />
								<TextField
									fullWidth
									value={this.state.email}
									onChange={(event) =>
										this.setState({ email: event.target.value })
									}
									label="Email"
									id="emailField"
								/>
							</Box>

							<Box sx={{ display: "flex", alignItems: "flex-end", m: "1vw" }}>
								<GitHubIcon sx={iconStyle} />
								<TextField
									fullWidth
									value={this.state.github}
									onChange={(event) =>
										this.setState({ github: event.target.value })
									}
									label="Github"
									id="githubField"
								/>
							</Box>
							<Box sx={{ display: "flex", alignItems: "flex-end", m: "1vw" }}>
								<TwitterIcon sx={iconStyle} />
								<TextField
									fullWidth
									value={this.state.twitter}
									onChange={(event) =>
										this.setState({ twitter: event.target.value })
									}
									label="Twitter"
									id="twitterField"
								/>
							</Box>
							<Box sx={{ display: "flex", alignItems: "flex-end", m: "1vw" }}>
								<LanguageIcon sx={iconStyle} />
								<TextField
									fullWidth
									value={this.state.website}
									onChange={(event) =>
										this.setState({ website: event.target.value })
									}
									label="Website"
									id="websiteField"
								/>
							</Box>

							{this.state.error && (
								<FormHelperText sx={{ color: "red" }}>
									Something Went Wrong😞 please check the console
								</FormHelperText>
							)}
							{this.state.success && (
								<FormHelperText sx={{ color: "green" }}>
									Successfully Updated🙂
								</FormHelperText>
							)}
							<Button
								onClick={this.saveProfile}
								sx={{ mr: "1vw", mt: "2vw", float: "right" }}
								variant="contained"
								endIcon={<SaveIcon />}>
								Save Changes
							</Button>
						</Div>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

export default ProfileUpdate;
