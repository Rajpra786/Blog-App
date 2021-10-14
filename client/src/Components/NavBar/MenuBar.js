import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

export function MenuBar(props) {
	return (
		<Menu
			id="menu-appbar"
			anchorEl={props.anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={Boolean(props.anchorEl)}
			onClose={props.handleClose}>
			{props.isAuth ? (
				<div>
					<MenuItem onClick={props.handleClose}>
						<Link
							to={"/profile/" + props.userId}
							style={{
								textDecoration: "none",
								color: props.text.primary,
							}}>
							Profile
						</Link>
					</MenuItem>
					<MenuItem onClick={props.handleClose}>
						<Link
							to="/new"
							style={{
								textDecoration: "none",
								color: props.text.primary,
							}}>
							New Blog
						</Link>
					</MenuItem>
					<MenuItem onClick={props.logout}>LogOut</MenuItem>
				</div>
			) : (
				<MenuItem onClick={props.login}>LogIn</MenuItem>
			)}
		</Menu>
	);
}
