import React from "react";

import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { UserDetails } from "./UserDetails";

const CarouselCardWeb = (props) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				display: "flex",
				width: "85vw",
				height: "70vh",
				marginLeft: "2vw",
				marginRight: "3vh",
				overflow: "hidden",
				border: "hidden",
				borderRadius: "2vh",
				flex: "1 1 auto",
				"&:hover": {
					boxShadow: "0 0.5vh 1vh 0px rgba(0, 0, 0, 0.4)",
					transform: "scale(1.02)",
				},
				"&:active": {
					transform: "scale(1.01) translateY(0.5vh)",
				},
			}}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography variant="h2">{props.title}</Typography>
					<Typography
						sx={{ marginTop: "2vh" }}
						variant="h4"
						color="text.secondary">
						{props.description}
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", ml: "2vw", pb: 1 }}>
					<Link
						to={props.authorUrl}
						style={{
							textDecoration: "none",
							color: theme.palette.text.primary,
						}}>
						<UserDetails
							avatar={props.avatar}
							author={props.author}
							date={props.date}
							readTime={props.readTime}></UserDetails>
					</Link>
				</Box>
			</Box>
			<CardMedia
				component="img"
				sx={{
					width: 450,

					//align image to right
					marginRight: 0,
					marginLeft: "auto",
					display: "block",

					border: "2px solid #cee0d6",
					borderRadius: "1.5vh",
					borderTopLeftRadius: "9vh",
					borderTopRightRadius: "2vh",
				}}
				image={props.image}
				alt="Live from space album cover"
			/>
		</Card>
	);
};

export default CarouselCardWeb;
