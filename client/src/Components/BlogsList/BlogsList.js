import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import dateFormat from 'dateformat';
import Get from '../../Requests/Get';
import PhotoBlogCard from '../PhotoBlogCard/PhotoBlogCard';
import HorizontalBlogCard from '../HorizontalBlogCard/HorizontalBlogCard';
import { getTitle } from './getTitle';

class BlogsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			maximumBlogs: props.maximumBlogs?props.maximumBlogs:-1,
			category: props.category,
			blogs: props.maximumBlogs ? Array.from(Array(props.maximumBlogs).keys()) : Array.from(Array(10).keys()),
		}
	}

	componentDidMount() {
		let url = this.state.category ? '/blogs/?tag=' + this.state.category : '/blogs/';

		if (this.state.maximumBlogs > 0) {
			if (url === '/blogs/') {
				url += "?maxcount=" + this.state.maximumBlogs;
			}
			else
				url += "&maxcount=" + this.state.maximumBlogs;
		}

		Get(url)
			.then(res => {
				this.setState({
					blogs: res.blogs,
					loaded: true
				});
			})
			.catch(err => {
				console.log("Error in BlogsList.js")
				console.log(err);
			});
	}

	render() {
		return <div>
			<Box sx={{
				width: '90vw', m: 'auto', '@media (max-width:780px)': {
					width: '95vw'
				}
			}}>
				{this.state.category && <Typography variant='h2' sx={{ p: '2vw' }}>
					{getTitle(this.state.category)}
				</Typography>}

				{/* vertical cards */}
				{this.props.type !== 'horizontal' &&
					<Grid sx={{ flexGrow: 1, pt: '2vw' }} container spacing={2}>
						<Grid item xs={12}>
							<Grid container justifyContent="center" spacing={2}>
								{(!this.state.loaded && this.state.blogs.map((value, index) => (
									<Grid key={value + this.state.category + index} item>
										<Paper sx={{ height: 400, width: 320 }} >
										</Paper>
									</Grid>
								)))}

								{(this.state.loaded && this.state.blogs.map((value, index) => (
									<Grid key={value._id + this.state.category + index} item>
										<Paper key={value._id + this.state.category} sx={{ height: 400, width: 320 }} >
											<PhotoBlogCard
												url={"/blogs/" + value._id}
												title={value.title}
												description={value.description.length > 50 ?
													value.description.substring(0, 50) + "..." :
													value.description}
												avatar={value?.avatar}
												author={value.name}
												date={dateFormat(value.updatedAt, "mmmm dS, yyyy")}
												readTime="2 min"
												userUrl="/"
												poster={value.image}
											/>
										</Paper>
									</Grid>
								)))}
							</Grid>
						</Grid>
					</Grid>
				}

				{this.props.type === 'horizontal' &&
					<Grid sx={{ flexGrow: 1, pt: '2vw' }} container spacing={2}>
						<Grid item xs={12} md={12}>
							<Grid container justifyContent="center" spacing={2}>
								{(!this.state.loaded && this.state.blogs.map((value, index) => (
									<Grid key={value + this.state.category + index} item>
										<Paper sx={{ height: 150, width: 250 }} >
										</Paper>
									</Grid>
								)))}

								{(this.state.loaded && this.state.blogs.map((value, index) => (
									<Grid key={value._id + this.state.category + index} item>
										<Paper key={value._id + this.state.category} sx={{
											height: 250,
											width: 550,
											'@media (max-width:780px)': {
												width: 370,
												height: 180
											}
										}} >
											<HorizontalBlogCard
												url={"/blogs/" + value._id}
												title={value.title}
												description={value.description.length > 50 ?
													value.description.substring(0, 50) + "..." :
													value.description}
												avatar={value?.avatar}
												author={value.name}
												date={dateFormat(value.updatedAt, "mmmm dS, yyyy")}
												readTime="2 min"
												authorUrl="/"
												poster={value.image}
											/>
										</Paper>
									</Grid>
								)))}
							</Grid>
						</Grid>
					</Grid>}
			</Box>
		</div>
	}
}


export default BlogsList;
