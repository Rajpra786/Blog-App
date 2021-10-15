import React, { Component } from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import Get from "../../Requests/Get";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";

class HomeCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};
	}
	static contextType = ThemeContext;

	componentDidMount() {
		Get("/blogs/?maxcount=5&sort=true")
			.then((res) => {
				this.setState({ blogs: res.blogs });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const { theme } = this.context;
		const settings = {
			dots: true,
			lazyLoad: true,
			infinite: true,
			autoplay: true,
			speed: 2000,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			initialSlide: 1,
		};
		return (
			<div style={{ marginTop: "2vh", marginRight: "4vw", marginLeft: "3vw" }}>
				<Slider {...settings}>
					{this.state.blogs.map((blog) => {
						return (
							<CarouselCard
								key={blog._id}
								id={blog._id}
								image={blog.image}
								Category={blog.tags[0]}
								title={blog.title}
								description={blog.description}
								avatar={blog.author.avatar}
								author={blog.author.name}
								authorId={blog.author._id}
								authorUrl={"/profile/" + blog.author._id}
								date={dateFormat(blog.updatedAt, "mmmm dS, yyyy")}
								readTime={blog.readTime ? `${blog.readTime} min` : "2 min"}
							/>
						);
					})}
				</Slider>
			</div>
		);
	}
}

export default HomeCarousel;
