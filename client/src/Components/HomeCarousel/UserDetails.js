import React from "react";
import { CardHeader, Box, Avatar, Typography } from "@mui/material";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";

export function UserDetails(props) {
	return (
		<CardHeader
			sx={{ position: "absolute", bottom: "1vw" }}
			avatar={<Avatar aria-label="user" src={props.avatar} />}
			title={<Typography variant="h6">{props.author}</Typography>}
			subheader={
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}>
					<Typography variant="body1">{props.date}</Typography>
					<AccessTimeFilledOutlinedIcon
						sx={{
							pl: 0.5,
						}}
						fontSize="small"
					/>
					<Typography variant="body1">{props.readTime}</Typography>
				</Box>
			}
		/>
	);
}
