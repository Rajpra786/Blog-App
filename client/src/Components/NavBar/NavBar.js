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
import InfoMsg from "../InfoMsg/InfoMsg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Box,
	CssBaseline,
	Drawer,
	Modal,
	Button,
	//Link
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

const styles = {
	button: { textTransform: "none", borderRadius: 4, px: 2 }
};

const NavLink = (props) => {
	console.log(props.theme)
	return (
		<Link to={props.link} style={{ textDecoration: 'none' }}>
			<Button
				size="large"
				color="inherit"
				sx={{
					...styles.button,
					...(typeof window !== "undefined" &&
						window.location.pathname === props.link && {
						background: "rgba(0,0,0,0.15)!important"
					}),
					display: { xs: "none", sm: "none", md: "inline-flex" },
					fontWeight: "bold"
				}}
			>
				<Typography variant="body" style={{ color: props.theme.palette.text.primary }}>
					{props.name}
				</Typography>
			</Button>
		</Link>
	)
}

const navLinks = [
	{
		link: "/our-team",
		name: "Our Team"
	},
	{
		link: "/write",
		name: "Write"
	}
]

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

			<AppBar position="static"
				elevation={0}
				sx={{
					zIndex: 9999,
					position: "fixed",
					top: 0,
					left: 0,
					color: "hsl(240, 11%, 25%)",
					background: theme.palette.navBack,
					backdropFilter: "blur(15px)",
					height: "70px",
					display: "flex",
					justifyContent: "center",
				}}>
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

					<Link to="/" style={{ textDecoration: 'none' }}>
						<Typography
							variant="h6"
							component="div"
							sx={{
								cursor: "pointer",
								"&:hover": { textDecoration: "underline" },
								"&:active": { opacity: 0.7 },
								mr: 3,
								fontWeight: "600",
							}}
							style={{ color: theme.palette.text }}
						>
							Blogger Bhaiya
						</Typography>
					</Link>
					<Box sx={{
						flexGrow: 1,
						ml: 3
					}}>
						{
							navLinks.map((val, index) => {
								return <NavLink name={val.name} link={val.link} key={index} theme={theme} />
							})
						}
					</Box>

					<Button
						onClick={login}
						target="_blank"
						size="large"
						color="inherit"
						sx={{
							...styles.button,
							background: "rgba(0,0,0,.1)",
							"&:hover": {
								background: "rgba(0,0,0,.2)"
							}
						}}
					>
						<Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
							Continue&nbsp;to&nbsp;my&nbsp;account
						</Box>
						<Box sx={{ display: { xs: "inline-block", sm: "none" } }}>
							Sign&nbsp;in
						</Box>

						<KeyboardArrowRightIcon sx={{ ml: "5px" }} />
					</Button>

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

						{/* <MenuBar
							anchorEl={anchorEl}
							text={theme.palette.text}
							isAuth={isAuth}
							userId={userId}
							logout={logout}
							login={login}
							handleClose={handleClose}></MenuBar> */}
					</div>
				</Toolbar>
				<InfoMsg msg="This is a sample msg! Lets see what we can do?" />
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
