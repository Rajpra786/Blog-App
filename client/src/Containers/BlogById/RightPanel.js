import React from "react";
import { Paper } from "@mui/material";
import UserCard from "../../Components/UserCard";
import Recommendations from "../../Components/Recommendations/Recommendations";
export function RightPanel(props) {
	return (
		<Paper
			sx={{
				width: "25vw",
				maxHeight: "100%",
				position: "relative",
				border: "none",
				display: {
					md: "block",
					xs: "none",
				},
			}}>
			<div>
				{props.author && <UserCard id={props.author} />}
				<Recommendations tags={props.tags} />
			</div>
		</Paper>
	);
}
