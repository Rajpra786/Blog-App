import React, { Component } from "react";
import UserContextProvider from "./Context/UserContext";
import ThemeContextProvider from "./Context/ThemeContext";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Containers/Home/Home";
import UserProfile from "./Containers/UserProfile/UserProfile";
import Blogs from "./Containers/Blogs/Blogs";
import CreatePost from "./Containers/CreatePost/CreatePost";
import NoMatch from "./Containers/NoMatch/NoMatch";
import UpdateBlog from "./Containers/UpdateBlog";
import BlogById from "./Containers/BlogById";
import ProfileUpdate from "./Containers/ProfileUpdate";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import history from './utils/history';
import ReactGA from 'react-ga';
import ttiPolyfill from 'tti-polyfill';

ReactGA.initialize('UA-213624020-2');


ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
	ReactGA.timing({
		category: "Load Performace",
		variable: 'Time to Interactive',
		value: tti
	})
});


const callback = list => {
	list.getEntries().forEach(entry => {
		console.log(entry)
		ReactGA.timing({
			category: "First Meaningful Paint",
			variable: entry.name,
			value: entry.responseEnd
		})
	})
}

var observer = new PerformanceObserver(callback);
observer.observe({
	entryTypes: [
		'navigation',
		'paint',
		'resource',
		'mark',
		'measure',
		'frame',
		'longtask'
	]
})




history.listen((location) => {
	if (location.pathname.includes('/user')) {
		let rootURL = location.pathname.split('/')[1]
		let userPage = location.pathname.split('/')[3]

		let pageHit = `/${rootURL}/${userPage}`
		ReactGA.pageview(pageHit)
	} else {
		ReactGA.set({ page: location.pathname });
		ReactGA.pageview(location.pathname)
	}
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Ram Babu",
			data: [1, 2],
			D: [1, 2, 3, 4],
		};
	}

	render() {
		return (
			<ThemeContextProvider>
				<UserContextProvider>
					<Router>
						<NavBar />
						<Switch>
							<Route path="/profile/:id">
								<UserProfile />
							</Route>

							<Route path="/edit/profile">
								<ProfileUpdate />
							</Route>

							<Route path="/new">
								<CreatePost />
							</Route>

							<Route path="/blogs/:id">
								<BlogById />
							</Route>

							<Route path="/update/:id">
								<UpdateBlog />
							</Route>
							<Route path="/blogs">
								<Blogs />
							</Route>
							<Route path="/category/:category">
								<Blogs />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="*">
								<NoMatch />
							</Route>
						</Switch>
					</Router>

					<Footer />
				</UserContextProvider>
			</ThemeContextProvider>
		);
	}
}

export default App;
