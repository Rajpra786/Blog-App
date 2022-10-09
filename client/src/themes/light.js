import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		navBack: "rgba(250,250,250,.9)"
	},
	typography: {
		fontFamily: [
			'Serif'
		].join(','),
	}
});

export default lightTheme;