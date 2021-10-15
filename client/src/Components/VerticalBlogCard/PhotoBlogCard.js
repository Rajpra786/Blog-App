import React from "react";
import {
	Card,
	CardContent,
	Box,
	CardHeader,
	Typography,
	Avatar,
	CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import { Link } from "react-router-dom";

const VerticalBlogCard = (props) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				height: 400,
				width: 320,
				paddingTop: "2vh",
				paddingLeft: "1vw",
				paddingRight: "1vw",
				paddingBottom: "0vh",
				variant: "round",
				transition: "all 0.2s ease-out",
				border: "none",
				borderRadius: "1vw",
				position: "relative",
				"&:hover": {
					boxShadow: "0 0 2vh 0px rgba(0, 0, 0, 0.4)",
					transform: "scale(1.01)",
				},
				"&:active": {
					transform: "scale(1.01) translateY(0.5vh)",
				},
			}}>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Link
					to={props.url}
					style={{ textDecoration: "none", color: theme.palette.text.primary }}>
					<CardMedia
						component="img"
						alt={props.title}
						height="170"
						width="100%"
						image={props.poster}
					/>
					<CardContent>
						<Typography
							variant="h5"
							color="text.primary"
							sx={{ mb: "2vh" }}
							gutterBottom>
							{props.title}
						</Typography>
						<Typography variant="p" color="text.secondary" gutterBottom>
							{props.description}
						</Typography>
					</CardContent>
				</Link>
				<Link
					to={props.userUrl}
					style={{ textDecoration: "none", color: theme.palette.text.primary }}>
					<Box sx={{ display: "flex", position: "absolute", bottom: "0%" }}>
						<CardHeader
							avatar={
								<Avatar
									sx={{ bgcolor: theme.palette.primary[800] }}
									aria-label="user">
									R
								</Avatar>
							}
							title={props.author}
							subheader={
								<Box
									sx={{ display: "flex", alignItems: "center", pr: 1, pb: 1 }}>
									<Typography variant="body1">{props.date}</Typography>
									<AccessTimeFilledOutlinedIcon sx={{ pl: 1 }} />
									<Typography variant="body1">{props.readTime}</Typography>
								</Box>
							}
						/>
					</Box>
				</Link>
			</Box>
		</Card>
	);
};

export default VerticalBlogCard;
