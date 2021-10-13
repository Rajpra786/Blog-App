import React from "react";
import { Paper } from "@mui/material";
import { parser } from "./parser";

export function BlogContent(props) {
	return (
		<Paper
			sx={{
				width: "71vw",
				ml: "2vw",
				mr: "0vw",
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
	);
}
