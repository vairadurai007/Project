import React from "react";
import Company from "./components/Company";
import About from "./components/About/About";
import { Box } from "@mui/material";
import Contact from "./components/Contact/Contact";
import Services from './components/Services/Services';
import Footer from "./components/Footer/Footer";
import Productions from "./components/Productions/Productions";
import Benifits from "./components/Benifits/Benifits";
import ServiceWeProvite from "./components/ServiceWeProvide/ServiceWeProvite";

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
                <Benifits />
            </Box>

            <Box>
                <Services />
            </Box>

            <Box>
                <Productions />
            </Box>

            <Box>
                <ServiceWeProvite />
            </Box>

            <Box>
                <Contact />
            </Box>

            <Box>
                <Footer />
            </Box>
        </React.Fragment>
    );
}