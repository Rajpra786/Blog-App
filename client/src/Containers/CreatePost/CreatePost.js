import React, { useContext, useEffect } from "react";
import {
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Button,
	Paper,
	Typography,
	Box,
	FormHelperText,
	OutlinedInput,
	LinearProgress,
} from "@mui/material";

import TagSelector from "../../Components/TagSelector/TagSelector";
import Post from "../../Requests/Post";
import ImageUpload from "../../Requests/ImageUpload";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function CreatePost() {
	const history = useHistory();
	const { isAuth, openLogin } = useContext(UserContext);
	const [activeStep, setActiveStep] = React.useState(0);
	const [tags, setTags] = React.useState([]);
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [image, setImage] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState("");
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleImageUpload = (event) => {
		ImageUpload(event.target.files[0])
			.then((url) => {
				setImage(url);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
				console.log(err);
				setErrorMessage("Something Went wrong!. Image is not uploaded");
				setLoading(false);
			});
	};

	const steps = [
		{
			label: "Add Title",
			description: (
				<OutlinedInput
					placeholder="Please Enter Title"
					value={title}
					onChange={handleTitleChange}
					sx={{ width: "80vw", mt: "1vh" }}
				/>
			),
		},
		{
			label: "Add Description",
			description: (
				<OutlinedInput
					placeholder="Please Enter Description"
					value={description}
					onChange={handleDescriptionChange}
					sx={{ width: "80vw", mt: "1vh" }}
				/>
			),
		},
		{
			label: "Select Tags",
			description: <TagSelector setTags={setTags} />,
		},
		{
			label: "Add Poster",
			description: (
				<OutlinedInput
					placeholder="Please add poster"
					type="file"
					onChange={handleImageUpload}
					sx={{ width: "80vw", mt: "1vh" }}
				/>
			),
		},
	];

	const handleNext = () => {
		if (activeStep === steps.length - 1) {
			console.log(tags, title, description);
			setLoading(true);
			const data = {
				title,
				description,
				tags,
				image,
			};
			console.log(data);
			Post(data, "/blogs/new")
				.then((response) => {
					history.push("/update/" + response.blogId);
				})
				.catch((err) => {
					console.log(err);
					setError(true);
					setLoading(false);
				});
		} else {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		}
	};

	useEffect(() => {
		if (!isAuth) {
			openLogin();
		}
	});

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Box sx={{ maxWidth: 400 }}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel>{step.label}</StepLabel>
						<StepContent>
							{step.description}
							<Box sx={{ mb: 2 }}>
								<div>
									{loading && <LinearProgress />}
									{error && (
										<FormHelperText sx={{ color: "red" }}>
											{errorMessage}
										</FormHelperText>
									)}
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}>
										{index === steps.length - 1 ? "Finish" : "Continue"}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>Blog Created - start editing...</Typography>
				</Paper>
			)}
		</Box>
	);
}

export default CreatePost;
