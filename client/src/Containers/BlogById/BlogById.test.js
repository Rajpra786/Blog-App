import React from "react";
import { shallow, render, mount } from "enzyme";
import BlogById from "./BlogById";

describe("BlogById", () => {
	let props;
	let shallowBlogById;
	let renderedBlogById;
	let mountedBlogById;

	const shallowTestComponent = () => {
		if (!shallowBlogById) {
			shallowBlogById = shallow(<BlogById {...props} />);
		}
		return shallowBlogById;
	};

	const renderTestComponent = () => {
		if (!renderedBlogById) {
			renderedBlogById = render(<BlogById {...props} />);
		}
		return renderedBlogById;
	};

	const mountTestComponent = () => {
		if (!mountedBlogById) {
			mountedBlogById = mount(<BlogById {...props} />);
		}
		return mountedBlogById;
	};

	beforeEach(() => {
		props = {};
		shallowBlogById = undefined;
		renderedBlogById = undefined;
		mountedBlogById = undefined;
	});

	// Shallow / unit tests begin here

	// Render / mount / integration tests begin here
});
