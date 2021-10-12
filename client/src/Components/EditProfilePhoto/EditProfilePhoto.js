import React from 'react';
import Avatar from 'react-avatar-edit';
import { Button, LinearProgress, FormHelperText } from '@mui/material';
import ImageUpload from '../../Requests/ImageUpload';

const EditProfilePhoto = props => {
	const [preview, setPreview] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState('');
	const onCrop = (preview) => {
		setPreview(preview);
	}

	const onBeforeFileLoad = (elem) => {
		// if(elem.target.files[0].size > 716800){
		//   alert("File is too big!");
		//   elem.target.value = "";
		// };
	}

	const handleImageUpload = () => {
		setLoading(true);
		fetch(preview)
			.then(res => res.blob())
			.then(blob => {
				const file = new File([blob], "preview.png", { type: "image/png" })
				ImageUpload(file).then((url) => {
					props.setImage(url);
				})
					.catch((err) => {
						setError(true);
						console.log(err);
						setErrorMessage('Something Went wrong!. Image is not uploaded');
						setLoading(false);
					})
			})
	}

	return (<div>
		<Avatar
			width='100%'
			height={295}
			onCrop={onCrop}
			onBeforeFileLoad={onBeforeFileLoad}
			src={props.src}
		/>
		<img src={preview} alt="Preview" />
		{loading && <LinearProgress />}
		{error && <FormHelperText sx={{ color: 'red' }}>{errorMessage}</FormHelperText>}
		<Button fullWidth variant="outlined" onClick={handleImageUpload} >Save</Button>
	</div>)
};


export default EditProfilePhoto;
