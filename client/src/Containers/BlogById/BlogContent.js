import React from "react";
import { Grid, Paper } from "@mui/material";
import { parser } from "./parser";
import UserCard from "../../Components/UserCard";

export function BlogContent(props) {
	return (
		<Grid sx={{ display: "flex", flexDirection: "column" }}>
			<Paper
				elevation={0}
				sx={{
					width: "68vw",
					ml: "2vw",
					mr: "1vw",
					p: "2vw",
					border: "none",
					fontSize: "120%",
					"@media (max-width:780px)": {
						width: "95vw",
						fontSize: "150%",
					},
				}}>
				{parser(props.content)}
			</Paper>
			{props.author && <UserCard id={props.author} />}
		</Grid>
	);
}
