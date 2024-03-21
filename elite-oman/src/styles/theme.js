import { createTheme } from "@mui/material";


export const lightTheme = createTheme({
	palette: {
		primary: {
			main: "#EC6C06",
			contrastText: "#242424"
		},
		secondary: {
			main: "#eee"
		}
	},
	typography: {
		fontFamily: [
			"Thunder"
		].join(", "),
	},
});