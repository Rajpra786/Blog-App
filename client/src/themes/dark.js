import {createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	},
	typography: {
		fontFamily: [
		  'Serif'
		].join(','),
	  }
});

export default darkTheme;