import React from "react";
import { Card, CardContent, Chip, CardMedia, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { UserDetails } from "./UserDetails";
import { Link } from "react-router-dom";

const CarouselCardMobile = (props) => {
	const theme = useTheme();
	return (
		<div>
			<Card
				sx={{
					ml: "1vw",
					height: "80vh",
					width: "90vw",
					border: "2px solid #cee0d6",
					borderRadius: "1.5vh",
					borderTopLeftRadius: "9vh",
					borderTopRightRadius: "2vh",
				}}>
				<CardMedia
					sx={{
						maxHeight: "250px",
						maxWidth: "500px",
					}}
					component="img"
					image={props.image}
					title="Pancakes"
					alt="Pancakes"
				/>
				<Chip
					sx={{
						mb: "2vh",
						mt: "2vh",
						ml: "1vh",
						fontSize: "2vh",
					}}
					label={props.Category}
					component="a"
					href={props.url}
					variant="outlined"
					clickable
				/>
				<CardContent>
					<Typography variant="h4" color="text.primary">
						{props.title}
					</Typography>
					<Typography
						sx={{ marigTop: "2vh" }}
						variant="h5"
						color="text.secondary">
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
						avatar={props.avatar}
						author={props.author}
						date={props.date}
						readTime={props.readTime}></UserDetails>
				</Link>
			</Card>
		</div>
	);
};

export default CarouselCardMobile;
