import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../Context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

import Login from "../Login/Login";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Box,
	CssBaseline,
	Drawer,
	Modal,
} from "@mui/material";

import DrawerWindow from "./DrawerWindow";
import { MenuBar } from "./MenuBar";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));
const drawerWidth = 240;

const NavBar = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const theme = useTheme();
	const { toggleTheme } = useContext(ThemeContext);
	const { isAuth, userId, logout, loginModel, openLogin, closeLogin } =
		useContext(UserContext);
	const login = () => {
		openLogin();
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<Modal
				open={loginModel && !isAuth}
				onClose={closeLogin}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						bgcolor: "background.paper",
					}}>
					<Login />
				</Box>
			</Modal>

			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleDrawerToggle}
						sx={{ display: { md: "none", xs: "block" } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/" style={{ textDecoration: "none", color: "#36d117" }}>
							Blogger Bhaiya
						</Link>
					</Typography>

					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							sx={{ display: { md: "block", xs: "none" } }}
							color="inherit">
							<AccountCircle />
						</IconButton>
						<IconButton
							sx={{ display: { md: "block", xs: "none" } }}
							size="large"
							onClick={toggleTheme}
							color="inherit">
							{theme.palette.mode === "dark" ? (
								<Brightness7Icon />
							) : (
								<Brightness4Icon />
							)}
						</IconButton>

						<MenuBar
							anchorEl={anchorEl}
							text={theme.palette.text}
							isAuth={isAuth}
							userId={userId}
							logout={logout}
							login={login}
							handleClose={handleClose}></MenuBar>
					</div>
				</Toolbar>
			</AppBar>
			<CssBaseline />

			<Box component="nav" aria-label="mailbox folders">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					<DrawerWindow isAuth={isAuth} logout={logout} login={login} />
				</Drawer>
			</Box>
		</Box>
	);
};

export default NavBar;
