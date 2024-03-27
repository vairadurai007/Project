import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
	palette: {
		primary: {
			main: "#EC6C06", //orange
			contrastText: "#242424" //
		},
		secondary: {
			main: "#eee" // white
		}
	},
	typography: {
		fontFamily: [
			"Thunder"
		].join(", "),
	},
});