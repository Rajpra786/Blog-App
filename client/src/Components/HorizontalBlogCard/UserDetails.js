import React from "react";
import { Avatar, CardHeader, Box, Typography } from "@mui/material";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";

export function UserDetails(props) {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				pl: 1,
				position: "relative",
				bottom: "0.5vh",
			}}>
			<CardHeader
				avatar={<Avatar aria-label="recipe" src={props.avatar} />}
				title={<Typography variant="body2" sx={{ fontWeight: "bold" }}>{props.author}</Typography>}
				subheader={
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							pr: 1,
							pb: 1,
						}}>
						<Typography variant="body2">{props.date}</Typography>
						<AccessTimeFilledOutlinedIcon
							sx={{
								pl: 1,
								display: {
									xs: "none",
									sm: "block",
								},
							}}
						/>
						<Typography
							variant="body1"
							sx={{
								display: {
									xs: "none",
									sm: "block",
								},
							}}>
							{props.readTime}
						</Typography>
					</Box>
				}
			/>
		</Box>
	);
}
