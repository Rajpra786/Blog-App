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
	width: "100%",
	height: 200,
	overflow: "hidden",
	position: "relative",
	border: "none",
	boxShadow: "none",
	borderRadius: "2vh",
	"&:active": {
		transform: "scale(1.01) translateY(0.5vh)",
	}
};

const HorizontalBlogCard = (props) => {
	const theme = useTheme();

	return (
		<Link
			to={props.url}
			style={{ textDecoration: "none", color: theme.palette.text.primary }}>
			<Card sx={CardStyle}>
				<Box sx={{ display: "flex", flexDirection: "column", width: "75%" }}>
					<CardContent sx={{ padding: "2vh !important" }}>
						<Typography variant="h5" sx={{ fontWeight: 'bold' }}>{props.title}</Typography>

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
							bottom: "3px",
							position: "absolute"
						}}>
						<UserDetails
							author={props.author}
							date={props.date}
							avatar={props.avatar}
							readTime={props.readTime}></UserDetails>
					</Link>
				</Box>
				<CardMedia
					sx={{
						width: "22%",//{ xs: 200, sm: 250, md: 200 },
						margin: "1vh",
						borderRadius: "1.5vh",
						display: "flex",
						height: 150
					}}
					component="img"
					image={props.poster}
					alt="green iguana"
				/>
				{/* <Grid container justifyContent="flex-end">

				</Grid> */}
			</Card>
		</Link>
	);
};

export default HorizontalBlogCard;
