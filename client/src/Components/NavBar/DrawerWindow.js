import React, { useContext } from "react";
import {
	Toolbar,
	Divider,
	List,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Categories from "../../Categories";
import { Link } from "react-router-dom";

const DrawerWindow = (props) => {
	const theme = useTheme();
	const { toggleTheme } = useContext(ThemeContext);
	const { isAuth, userId, logout } = useContext(UserContext);
	return (
		<div>
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Link to="/" style={{ textDecoration: "none", color: "#36d117" }}>
						Ok-Blogger
					</Link>
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{/* user details part */}
				{isAuth ? (
					<div>
						<ListItem button key="profile-button">
							<ListItemIcon>
								<AccountCircleIcon />
							</ListItemIcon>
							<ListItemText>
								<Link
									to={"/profile/" + userId}
									style={{
										textDecoration: "none",
										color: theme.palette.text.primary,
									}}>
									Profile
								</Link>
							</ListItemText>
						</ListItem>
						<ListItem button key="New Blog">
							<ListItemIcon>
								<AddCircleIcon />
							</ListItemIcon>
							<ListItemText>
								<Link
									to="/new"
									style={{
										textDecoration: "none",
										color: theme.palette.text.primary,
									}}>
									New Blog
								</Link>
							</ListItemText>
						</ListItem>
					</div>
				) : (
					""
				)}
				{isAuth ? (
					<div
						onClick={() => {
							console.log("I'm a button.");
							logout();
						}}>
						<ListItem button key="Logout-button">
							<ListItemIcon>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItem>
					</div>
				) : (
					<div
						onClick={() => {
							console.log("I'm a login.");
							props.login();
						}}>
						<ListItem button key="login-button">
							<ListItemIcon>
								<LoginIcon />
							</ListItemIcon>
							<ListItemText primary="LogIn" />
						</ListItem>
					</div>
				)}
				<ListItem button onClick={toggleTheme}>
					<ListItemIcon>
						{theme.palette.mode === "dark" ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</ListItemIcon>
					<ListItemText>
						{theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
					</ListItemText>
				</ListItem>
				<IconButton size="large" color="inherit"></IconButton>
			</List>

			<Divider />

			<List>
				{Categories.map((category, index) => (
					<ListItem button key={category.url}>
						<ListItemIcon>{category.icon}</ListItemIcon>
						<ListItemText>
							<Link
								to={category.url}
								style={{
									textDecoration: "none",
									color: theme.palette.text.primary,
								}}>
								{category.category}
							</Link>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default DrawerWindow;
