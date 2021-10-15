import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
	Card,
	CardContent,
	CardHeader,
	Box,
	CardMedia,
	Typography,
} from "@mui/material";
import { Link, withRouter } from "react-router-dom";

const cardStyle = {
	display: "flex",
	width: "23vw",
	height: "27vh",
	margin: "1vw",
	overflow: "hidden",
	border: "0.3vh solid #ddd",
	borderRadius: "2vh",
	"&:hover": {
		boxShadow: "0 1vh 2vh 0px rgba(0, 0, 0, 0.4)",
		transform: "scale(1.04)",
	},
	"&:active": {
		transform: "scale(1.01) translateY(0.5vh)",
	},
};

const MiniBlogCard = (props) => {
	const theme = useTheme();

	return (
		<Card sx={cardStyle}>
			<Link
				to={"/blogs/" + props.id}
				style={{
					textDecoration: "none",
					color: theme.palette.text.primary,
				}}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" variant="h6">
							{props.title}
						</Typography>
					</CardContent>
					<Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
						<CardHeader
							sx={{}}
							title={<Typography variant="caption">{props.author}</Typography>}
							subheader={
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<Typography variant="caption">{props.date}</Typography>
								</Box>
							}
						/>
					</Box>
				</Box>
			</Link>
			<CardMedia
				component="img"
				sx={{
					width: 120,
					//align image to right
					marginRight: 0,
					marginLeft: "auto",
					display: "block",
				}}
				image={props.image}
				alt="cover"
			/>
		</Card>
	);
};

export default withRouter(MiniBlogCard);
