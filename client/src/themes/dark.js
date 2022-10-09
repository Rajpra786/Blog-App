import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		navBack: "rgba(28, 25, 27, 0.8)"
	},
	typography: {
		fontFamily: [
			'sans-serif'
		].join(','),
	}
});

export default darkTheme;