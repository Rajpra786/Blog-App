import {createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	palette: {
	  mode: 'light',
	},
	typography: {
		fontFamily: [
		  'Serif'
		].join(','),
	  }
});

export default lightTheme;