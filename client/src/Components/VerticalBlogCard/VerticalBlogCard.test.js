import React from "react";
import { shallow, render, mount } from "enzyme";
import VerticalBlogCard from "./VerticalBlogCard";

describe("VerticalBlogCard", () => {
	let props;
	let shallowVerticalBlogCard;
	let renderedVerticalBlogCard;
	let mountedVerticalBlogCard;

	const shallowTestComponent = () => {
		if (!shallowVerticalBlogCard) {
			shallowVerticalBlogCard = shallow(<VerticalBlogCard {...props} />);
		}
		return shallowVerticalBlogCard;
	};

	const renderTestComponent = () => {
		if (!renderedVerticalBlogCard) {
			renderedVerticalBlogCard = render(<VerticalBlogCard {...props} />);
		}
		return renderedVerticalBlogCard;
	};

	const mountTestComponent = () => {
		if (!mountedVerticalBlogCard) {
			mountedVerticalBlogCard = mount(<VerticalBlogCard {...props} />);
		}
		return mountedVerticalBlogCard;
	};

	beforeEach(() => {
		props = {};
		shallowVerticalBlogCard = undefined;
		renderedVerticalBlogCard = undefined;
		mountedVerticalBlogCard = undefined;
	});

	// Shallow / unit tests begin here

	// Render / mount / integration tests begin here
});
