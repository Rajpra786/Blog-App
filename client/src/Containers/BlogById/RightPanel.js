import React from "react";
import { Paper } from "@mui/material";
// import UserCard from "../../Components/UserCard";
import Recommendations from "../../Components/Recommendations/Recommendations";
export function RightPanel(props) {
	return (
		<Paper
			elevation={0}
			sx={{
				width: { md: "25vw", xs: "100vw" },
				maxHeight: "100%",
				position: "relative",
				border: "none"
			}}>
			<Recommendations tags={props.tags} />
			<Recommendations tags={props.tags} />
		</Paper>
	);
}
