import React from "react";
import { Hidden } from "@mui/material";
import CarouselCardMobile from "./CarouselCardMobile";
import CarouselCardWeb from "./CarouselCardWeb";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const CarouselCard = (props) => {
	const theme = useTheme();
	return (
		<div>
			<Link
				to={"blogs/" + props.id}
				style={{
					textDecoration: "none",
					color: theme.palette.text.primary,
				}}>
				<Hidden smUp>
					<CarouselCardMobile {...props} />
				</Hidden>
				<Hidden smDown>
					<CarouselCardWeb {...props} />
				</Hidden>
			</Link>
		</div>
	);
};

export default CarouselCard;
