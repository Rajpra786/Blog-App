import React from 'react';
import Get from '../../Requests/Get';
import { Grid, Paper, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UserContext } from '../../Context/UserContext';
import { withRouter } from 'react-router-dom';
import { EditButton } from '../../Components/Buttons/Buttons';
import { ProfileBar } from './ProfileBar';


const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	border: 'hidden',
	borderRadius: '3rem',
	maxWidth: '100%',
	maxHeight: '100%',
});


class UserProfile extends React.Component {
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
			website: ""
		}
	}
	static contextType = UserContext;

	componentDidMount() {
		Get('/users/' + this.props.match.params.id).then((data) => {
			this.setState({
				id: data.userId,
				userName: data.name,
				email: data.email,
				description: data.description,
				avatar: data.avatar ? data.avatar : "/userAvatar.png",
				website: data.website ? data.website : "",
				github: data.github ? data.github : "",
				twitter: data.twitter ? data.twitter : ""
			})
		})
			.catch((err) => {
				console.log(err);
			})
	}

	render() {
		const { userId } = this.context;
		return (
			<Paper sx={{ margin: 'auto', maxWidth: '98vw', flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={11} sm={4}>
						<ButtonBase sx={{
							width: '30vw',
							height: '30vw',
							'@media (max-width:780px)': {
								width: '96vw',
								height: '50vw'
							}
						}}>
							<Img alt="complex" src={this.state.avatar} />
						</ButtonBase>
					</Grid>
					<Grid item xs={11} sm={7} container>
						<Grid item container direction="column" spacing={2}>
							<Grid item>
								<Typography gutterBottom sx={{
									fontSize: '4vw',
									'@media (max-width:780px)': {
										fontSize: '10vw',
										textAlign: 'center'
									}
								}}
									component="div">
									{this.state.userName}
								</Typography>
								<Typography variant="subtitle1"
									sx={{
										fontSize: '1.5vw',
										'@media (max-width:780px)': {
											fontSize: '5vw',
											textAlign: 'center'
										}
									}}
									gutterBottom>
									{this.state.description}
								</Typography>
							</Grid>
							<Grid item>
								<ProfileBar email={this.state.email} github={this.state.github} twitter={this.state.twitter} website={this.state.website}></ProfileBar>
							</Grid>
							<Grid item>
								{userId === this.state.id && <EditButton url="/edit/profile/" />}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

export default withRouter(UserProfile);
