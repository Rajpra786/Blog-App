import React, { useState, useContext } from "react";
import {
	TextField,
	Button,
	FormControl,
	LinearProgress,
	FormHelperText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Post from "../../Requests/Post";
import { UserContext } from "../../Context/UserContext";

const SignupPage = (props) => {
	const theme = useTheme();
	const [inProgress, setInProgress] = useState(false);
	const [error, setError] = React.useState(false);
	const { closeLogin } = useContext(UserContext);

	// create state variables for each input
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			password,
		};

		Post(data, "/users/new")
			.then((data) => {
				console.log("Login successfull");
				setInProgress(false);
				setError(false);
				alert("User registerd successfully!");
				closeLogin();
			})
			.catch((error) => {
				setError(true);
				setInProgress(false);
				console.log(error);
			});
	};

	//login / signup
	return (
		<form onSubmit={handleSubmit}>
			<FormControl
				fullWidth
				sx={{
					m: 1,

					"& .MuiTextField-root": {
						margin: theme.spacing(1),
					},
					"& .MuiButtonBase-root": {
						margin: theme.spacing(2),
					},
				}}>
				<TextField
					label="Name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<TextField
					label="Email"
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					label="Password"
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{inProgress && <LinearProgress />}
				{error && (
					<FormHelperText sx={{ color: "red" }}>
						Something went wrong!
					</FormHelperText>
				)}
				<div style={{ margin: "2vw", display: "flex", alignItems: "center" }}>
					<Button variant="contained" onClick={props.handleClose}>
						Cancel
					</Button>
					<Button type="submit" variant="contained" color="primary">
						Signup
					</Button>
				</div>
			</FormControl>
		</form>
	);
};

export default SignupPage;
