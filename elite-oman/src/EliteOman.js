import React from "react";
import Company from "./components/Company";
import About from "./components/About/About";
import { Box } from "@mui/material";

export function EliteOman() {
    return (
        <React.Fragment>
            <Box>
                <Company />
            </Box>

            <Box>
                <About />
            </Box>
        </React.Fragment>
    );
}