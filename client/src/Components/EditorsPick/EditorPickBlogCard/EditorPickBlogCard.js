import React from "react";
import {
	Card,
	CardContent,
	Box,
	CardHeader,
	Typography,
	Avatar,
	Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import { Link } from "react-router-dom";

const EditorPickBlogCard = (props) => {
	const theme = useTheme();

	return (
		<Card
			sx={{
				height: 340,
				width: 320,
				paddingTop: "2vh",
				paddingLeft: "2vw",
				paddingRight: "2vw",
				paddingBottom: "0vh",
				variant: "round",
				transition: "all 0.2s ease-out",
				border: "none",
				borderRadius: "2vh",
				position: "relative",
				"&:hover": {
					boxShadow: "0 0 2vh 0px rgba(0, 0, 0, 0.4)",
					transform: "scale(1.01)",
				},
				"&:active": {
					transform: "scale(1.01) translateY(0.5vh)",
				},
			}}>
			<Chip
				// color='text.primary'
				label={props.Category}
				component="a"
				href={props.CategoryUrl}
				variant="outlined"
				clickable
			/>

			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Link
					to={props.url}
					style={{ textDecoration: "none", color: theme.palette.text.primary }}>
					<CardContent>
						<Typography variant="h5" color="text.primary" gutterBottom>
							{props.title}
						</Typography>
						<Typography variant="p" color="text.secondary" gutterBottom>
							{props.description}
						</Typography>
					</CardContent>
				</Link>
				<Link
					to={props.authorUrl}
					style={{ textDecoration: "none", color: theme.palette.text.primary }}>
					<Box sx={{ display: "flex", position: "absolute", bottom: "0%" }}>
						<CardHeader
							avatar={
								<Avatar
									sx={{ bgcolor: theme.palette.primary[800] }}
									aria-label="user"
									src={props.avatar}
								/>
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

export default EditorPickBlogCard;
