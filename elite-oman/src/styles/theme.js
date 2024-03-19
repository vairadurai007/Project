import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#ce1212"
        },
        secondary: {
            main: "#eee"
        }
    },
    typography: {
		fontFamily: [
			"Metal",
			// "Lexend",
			// "sans-serif",
			// "-apple-system",
			// "BlinkMacSystemFont",
			// "Segoe UI",
			// "Roboto",
			// "Oxygen",
			// "Ubuntu",
			// "Cantarell",
			// "Fira Sans",
			// "Droid Sans",
			// "Helvetica Neue",
		].join(", "),
	},
});