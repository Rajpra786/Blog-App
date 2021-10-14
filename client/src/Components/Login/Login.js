import React, { useState } from "react";
import { Box } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

const Login = (props) => {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	//login / signup
	return (
		<Box
			sx={{
				width: 400,
				bgcolor: "background.paper",
				boxShadow: 24,
				p: 4,
			}}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs value={value} onChange={handleChange} centered>
						<Tab label="Login" value="1" />
						<Tab label="SignUP" value="2" />
					</Tabs>
				</Box>
				<TabPanel value="1">
					<LoginPage />
				</TabPanel>
				<TabPanel value="2">
					<SignupPage />
				</TabPanel>
			</TabContext>
		</Box>
	);
};

export default Login;
