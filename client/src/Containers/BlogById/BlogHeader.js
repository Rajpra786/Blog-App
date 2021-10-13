import React from "react";
import { Paper, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { EditButton } from "../../Components/Buttons/Buttons";

export function BlogHeader(props) {
	return (
		<Paper
			sx={{
				display: "flex",
				flexDirection: "column",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}>
				<Typography
					variant="h2"
					sx={{
						width: "80vw",
						ml: "1vw",
						mt: "1vw",
						mb: "1vw",
						textAlign: "center",
					}}>
					{props.title}
				</Typography>
				{props.isAuth && props.userId === props.author && (
					<EditButton
						url={"/update/" + props.id}
						sx={{
							float: "left",
						}}
					/>
				)}
			</div>
			<Typography
				variant="body"
				sx={{
					width: "80vw",
					ml: "5vw",
					mb: "1vw",
				}}>
				By <strong>{props.authorName}</strong> ⚫ {props.lastUpdated}{" "}
				<AccessTimeIcon
					sx={{
						fontSize: "3vh",
						mb: "-0.5vh",
					}}
				/>{" "}
				{props.readTime} min read
			</Typography>
		</Paper>
	);
}
