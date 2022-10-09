import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MuiLink from "@mui/material/Link";

const Footer = props => {
	return (
		<Box
			sx={{
				background: "#000",
				color: "#fff",
				p: 8
			}}
		>
			<Grid spacing={8} container>
				<Grid item xs={12} sm={3}>
					<Typography variant="h5" gutterBottom sx={{ fontWeight: "600" }}>
						Smartlist
					</Typography>
					<Typography sx={{ mb: 2 }} gutterBottom>
						We're a philanthropic nonprofit striving to help everyone{" "}
						<span role="img" aria-label="heart emoji">
							❤️
						</span>
					</Typography>
					<Box
						sx={{
							my: 1,
							mb: 2,
							background: "rgba(200,200,200,.1)",
							p: 1,
							borderRadius: 2
						}}
					>
						<Typography gutterBottom variant="h6">
							Proudly made in the USA&nbsp;
							<span role="img" aria-label="USA flag">
								🇺🇸
							</span>
						</Typography>
					</Box>
					<img
						style={{
							width: "100%",
							maxWidth: "400px"
						}}
						src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=321053&theme=dark"
						alt="Featured on ProductHunt"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Typography gutterBottom variant="h6">
						Apps
					</Typography>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Smartlist
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Smartlist Availability
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Smartlist Recipe Generator
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Smartlist Dressing
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Smartlist Collaborate
					</MuiLink>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Typography gutterBottom variant="h6">
						Company
					</Typography>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Join our team
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Terms of service
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Privacy policy
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Our&nbsp;team
					</MuiLink>

					<Typography sx={{ mt: 4 }} gutterBottom>
						Links
					</Typography>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Contact us
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Knowledge base
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						hello@smartlist.tech
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						Official Discord
					</MuiLink>
					<MuiLink
						underline="none"
						sx={{ display: "block", mb: 1, color: "#eee" }}
					>
						GitHub
					</MuiLink>
				</Grid>
				<Grid item xs={12} sm={3}>
					<Typography sx={{ mb: 2 }} variant="h6" gutterBottom>
						Sponsors
					</Typography>
					<Box
						sx={{
							my: 1,
							mb: 2,
							background: "rgba(200,200,200,.2)",
							p: 1,
							pb: 0.3,
							borderRadius: 2
						}}
					>
						<a href="https://infinitzhost.com?smartlist">
							<img
								src="https://cdn.discordapp.com/attachments/833204440295014432/846615097186844692/ihlogo.png"
								alt="InfinitzHost"
								style={{
									width: "80%"
								}}
							/>
						</a>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};


export default Footer;
