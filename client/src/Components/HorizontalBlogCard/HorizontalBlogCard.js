import React from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UserDetails } from "./UserDetails";

const CardStyle = {
	display: "flex",
	paddingTop: "2vh",
	paddingLeft: "1vw",
	paddingRight: "1vw",
	paddingBottom: "0vh",
	width: 550,
	height: 250,
	overflow: "hidden",
	position: "relative",
	border: "hidden",
	borderRadius: "2vh",
	"&:hover": {
		boxShadow: "0 1vh 2vh 0px rgba(0, 0, 0, 0.4)",
		transform: "scale(1.04)",
	},
	"&:active": {
		transform: "scale(1.01) translateY(0.5vh)",
	},
	"@media (max-width:780px)": {
		width: 370,
		height: 180,
	},
};

const HorizontalBlogCard = (props) => {
	const theme = useTheme();

	return (
		<Link
			to={props.url}
			style={{ textDecoration: "none", color: theme.palette.text.primary }}>
			<Card sx={CardStyle}>
				<CardMedia
					sx={{
						width: "15vw",
						margin: "1vh",
						borderRadius: "1.5vh",
						"@media (max-width:780px)": {
							width: "25vw",
							margin: "0.5vh",
						},
					}}
					component="img"
					image={props.poster}
					alt="green iguana"
				/>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ padding: "2vh !important", flex: "1 0 auto" }}>
						<Typography variant="h6">{props.title}</Typography>

						<Typography
							variant="body1"
							sx={{
								color: theme.palette.secondary,
								marginTop: "5px",
								display: { xs: "none", sm: "block" },
							}}>
							{props.description}
						</Typography>
					</CardContent>
					<Link
						to={props.authorUrl}
						style={{
							textDecoration: "none",
							color: theme.palette.text.primary,
						}}>
						<UserDetails
							author={props.author}
							date={props.date}
							avatar={props.avatar}
							readTime={props.readTime}></UserDetails>
					</Link>
				</Box>
			</Card>
		</Link>
	);
};

export default HorizontalBlogCard;
