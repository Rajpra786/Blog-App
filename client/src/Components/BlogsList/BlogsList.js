import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";
import dateFormat from "dateformat";
import Get from "../../Requests/Get";
import HorizontalBlogCard from "../HorizontalBlogCard/HorizontalBlogCard";
import { getTitle } from "./getTitle";
import InfiniteScroll from "react-infinite-scroll-component";

class BlogsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			stepSize: 5,
			hasMore: true,
			lastDate: new Date().toISOString(),
			category: props.category,
			blogs: Array.from(Array(5).keys()),
		};
	}

	getBlogs() {
		console.log({ "State Details": this.state });
		if (this.state.blogs.length >= 20) {
			this.setState({ hasMore: false });
			return;
		}
		let url = this.state.category
			? "/blogs/?tag=" + this.state.category
			: "/blogs/";

		if (url === "/blogs/") {
			url += "?maxcount=" + this.state.stepSize;
		} else url += "&maxcount=" + this.state.stepSize;

		url += "&lastDate=" + this.state.lastDate;

		Get(url)
			.then((res) => {
				if (this.state.loaded) {
					this.setState({
						blogs: [...this.state.blogs, ...res.blogs],
						loaded: true,
						lastDate: res.blogs?.slice(-1)[0]?.updatedAt
					});

					console.log({ "data": res.blogs, "last": res.blogs?.slice(-1), "lastDate": res.blogs?.slice(-1)[0]?.updatedAt });
				}
				else {
					this.setState({
						blogs: res.blogs,
						loaded: true,
					});
				}
				console.log({ "State: ": this.state });
			})
			.catch((err) => {
				console.log("Error in BlogsList.js");
				console.log(err);
			});
	}

	componentDidMount() {
		this.getBlogs();
	}

	render() {
		return (
			<div>
				<Box
					sx={{
						width: "100%",
						m: "auto",
					}}>
					{this.state.category && (
						<Typography variant="h2" sx={{ p: "2vw" }}>
							{getTitle(this.state.category)}
						</Typography>
					)}

					{/* vertical cards */}
					{this.props.type !== "horizontal" && (
						<Grid sx={{ pt: "2vw" }} container spacing={4}>
							<Grid item>
								<Grid container justifyContent="center" spacing={2}>
									<InfiniteScroll
										dataLength={this.state.blogs.length}
										next={() => { this.getBlogs() }}
										hasMore={this.state.hasMore}
										loader={<h4>Loading...</h4>}
										//height={400}
										endMessage={
											<p style={{ textAlign: "center" }}>
												<b>Yay! You have seen it all</b>
											</p>
										}
									>
										{!this.state.loaded &&
											this.state.blogs.map((value, index) => (
												<Grid key={value + this.state.category + index} item>
													<Paper sx={{ height: 400, width: 320 }}></Paper>
												</Grid>
											))}

										{this.state.loaded &&
											this.state.blogs.map((value, index) => (
												<div>
													<Box sx={{ mb: 1, mt: 1 }}>
														<HorizontalBlogCard
															url={"/blogs/" + value._id}
															title={value.title}
															description={
																value.description.length > 50
																	? value.description.substring(0, 50) + "..."
																	: value.description
															}
															avatar={value.author?.avatar}
															author={value.author.name}
															date={dateFormat(value.updatedAt, "mmmm dS, yyyy")}
															readTime={
																value.readTime ? value.readTime + " min" : "2 min"
															}
															authorUrl={"/profile/" + value.author._id}
															poster={value.image}
														/>
													</Box>
												</div>
											))}
									</InfiniteScroll>
								</Grid>
							</Grid>
						</Grid>
					)}

					{this.props.type === "horizontal" && (
						<Grid sx={{ flexGrow: 1, pt: "2vw" }} container spacing={2}>
							<Grid item xs={12} md={12}>
								<Grid container justifyContent="center" spacing={2}>
									{!this.state.loaded &&
										this.state.blogs.map((value, index) => (
											<Grid key={value + this.state.category + index} item>
												<Paper sx={{ height: 150, width: 250 }}></Paper>
											</Grid>
										))}

									{this.state.loaded &&
										this.state.blogs.map((value, index) => (
											<Grid key={value._id + this.state.category + index} item>
												<Paper
													key={value._id + this.state.category}
													elevation={0}
													sx={{
														height: 250,
														width: 800,
														"@media (max-width:780px)": {
															width: 370,
															height: 180,
														},
													}}>
													<HorizontalBlogCard
														url={"/blogs/" + value._id}
														title={value.title}
														description={
															value.description.length > 50
																? value.description.substring(0, 50) + "..."
																: value.description
														}
														avatar={value.author?.avatar}
														author={value.author?.name}
														date={dateFormat(value.updatedAt, "mmmm dS, yyyy")}
														readTime={
															value.readTime ? value.readTime + " min" : "2 min"
														}
														authorUrl={"/profile/" + value.author._id}
														poster={value.image}
													/>
												</Paper>
											</Grid>
										))}
								</Grid>
							</Grid>
						</Grid>
					)}
				</Box>
			</div>
		);
	}
}

export default BlogsList;
