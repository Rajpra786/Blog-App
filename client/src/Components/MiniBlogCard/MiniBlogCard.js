import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
	Box,
	Typography,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText
} from "@mui/material";
import { Link, withRouter } from "react-router-dom";

const MiniBlogCard = (props) => {
	const theme = useTheme();

	return (
		<Box>
			<ListItem alignItems="flex-start">
				<ListItemText
					primary={
						<React.Fragment>
							<Link to={props.authorUrl} style={{
								textDecoration: "none",
								color: theme.palette.text.primary,
							}}>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{props.author}
								</Typography>
							</Link>
						</React.Fragment>
					}
					secondary={
						<React.Fragment>
							<Link
								to={"/blogs/" + props.id}
								style={{
									textDecoration: "none",
									color: theme.palette.text.primary,
								}}
							>
								<Typography
									sx={{ display: 'inline' }}
									component="span"
									variant="h6"
									color="text.primary"
								>
									{props.title}
								</Typography>
							</Link>
						</React.Fragment>
					}
				/>
				<ListItemAvatar>
					<a
						style={{
							textDecoration: "none",
							color: theme.palette.text.primary,
						}}
						href={"/blogs/" + props.id}
					>
						<Avatar alt="Remy Sharp" src={props.image} variant="square" sx={{ width: 56, height: 56 }} />
					</a>
				</ListItemAvatar>
			</ListItem>
		</Box>
	);
};

export default withRouter(MiniBlogCard);
