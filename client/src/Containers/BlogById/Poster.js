import React from "react";
import { Paper } from "@mui/material";

export function Poster(props) {
	return (
		<Paper
			sx={{
				width: "98vw",
				height: "60vh",
				textAlign: "center",
				pb: "2vw",
			}}>
			<img
				src={props.poster}
				alt="The blog poster"
				style={{
					borderRadius: "2vw",
					width: "95%",
					height: "100%",
					mb: "2vw",
				}}
			/>
		</Paper>
	);
}
