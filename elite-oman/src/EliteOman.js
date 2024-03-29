import React from "react";
import Company from "./components/Company";
import About from "./components/About/About";
import { Box } from "@mui/material";
import Contact from "./components/Contact/Contact";
import Services from './components/Services/Services';
import Footer from "./components/Footer/Footer";

export function EliteOman() {
    return (
        <React.Fragment>
            <Box>
                <Company />
            </Box>

            <Box>
                <About />
            </Box>

            <Box>
                <Services />
            </Box>

            <Box>
                <Contact />
            </Box>

            <Box>
                <Footer/>
            </Box>
        </React.Fragment>
    );
}