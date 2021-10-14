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

const LoginPage = (props) => {
	const theme = useTheme();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [inProgress, setInProgress] = useState(false);
	const [error, setError] = React.useState(false);
	const { login, closeLogin } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInProgress(true);
		const data = {
			email,
			password,
		};

		Post(data, "/users/session")
			.then((userData) => {
				console.log("Login successfull");
				setInProgress(false);
				setError(false);
				login(userData.user._id);
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
		<form autoComplete="true" onSubmit={handleSubmit}>
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
					label="Email"
					type="email"
					required
					value={email}
					disabled={inProgress}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					label="Password"
					type="password"
					required
					value={password}
					disabled={inProgress}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{inProgress && <LinearProgress />}
				{error && (
					<FormHelperText sx={{ color: "red" }}>
						Something went wrong!
					</FormHelperText>
				)}
				<div style={{ margin: "2vw", display: "flex", alignItems: "center" }}>
					<Button
						variant="contained"
						onClick={closeLogin}
						disabled={inProgress}>
						Cancel
					</Button>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={inProgress}>
						LogIn
					</Button>
				</div>
			</FormControl>
		</form>
	);
};

export default LoginPage;
