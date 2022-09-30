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
import { createBrowserHistory } from "history";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-213624020-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {
	componentDidMount() {
		ReactGA.pageview(window.location.pathname);
	}

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
					<Router history={history}>
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
