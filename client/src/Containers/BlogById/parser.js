import React from "react";
import parse from "html-react-parser";
import { styled } from "@mui/system";

const Image = styled("img")({
	maxWidth: "100%",
	maxHeight: "100%",
	borderRadius: "2vw",
});

export const parser = (input) =>
	parse(input, {
		replace: (domNode) => {
			if (domNode.name === "img") {
				const newNode = (
					<Image
						src={domNode.attribs.src}
						sx={domNode.attribs.style}
						width={domNode.attribs.width}></Image>
				);
				return newNode;
			}
		},
	});
