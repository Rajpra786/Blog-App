import React from "react";
import { Paper } from "@mui/material";
import UserCard from "../../Components/UserCard";

export function RightPanel(props) {
	return (
		<Paper
			sx={{
				width: "22vw",
				border: "none",
				display: {
					md: "block",
					xs: "none",
				},
			}}>
			{props.author && <UserCard id={props.author} />}
		</Paper>
	);
}
