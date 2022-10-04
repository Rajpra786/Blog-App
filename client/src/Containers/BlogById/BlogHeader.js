import React from "react";
import { Paper, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function BlogHeader(props) {
	return (
		<Paper
			elevation={0}
			align="center"
			sx={{ mb: "1vw" }}
		>
			<div>
				<Typography
					variant="h2"
					sx={{
						width: "80vw",
						mt: "1vw",
						mb: "0.5vw",
					}}>
					{props.title}
				</Typography>
			</div>
			<Typography
				variant="body"
				sx={{
					width: "80vw",
				}}>
				By <strong>{props.authorName}</strong> ⚫ {props.lastUpdated}{" "}
				<AccessTimeIcon
					sx={{
						fontSize: "20px",
						mb: "-0.5vh",
					}}
				/>{" "}
				{props.readTime} min read
			</Typography>
		</Paper>
	);
}
